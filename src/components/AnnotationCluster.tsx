import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { createPortal } from 'react-dom';
import AnnotationClusterProps from './AnnotationClusterProps';
import MapContext from '../context/MapContext';

export const AnnotationClusterIdentifierContext = createContext<string | null>(null);
export const ClusterAnnotationContext = createContext<mapkit.Annotation | undefined>(undefined);

export default function AnnotationCluster({
  children,
  annotationForCluster,
  clusterIdenfier,
}: AnnotationClusterProps) {
  const contentEl = useMemo<HTMLDivElement>(() => document.createElement('div'), []);

  const map = useContext(MapContext);
  const [
    existingClusterFunc, setExistingClusterFunc,
  ] = useState<((clusterAnnotation: mapkit.Annotation) => void) | undefined>(undefined);

  const [memberAnnotations, setMemberAnnotations] = useState<mapkit.Annotation[]>([]);
  const [clusterCoordinate, setClusterCoordinate] = useState<mapkit.Coordinate>();
  const [clusterAnnotation, setClusterAnnotation] = useState<mapkit.Annotation>();

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    if (existingClusterFunc === undefined) {
      setExistingClusterFunc(map.annotationForCluster);
    }

    map.annotationForCluster = (clusterAnnotationData) => {
      if (clusterAnnotationData.clusteringIdentifier === clusterIdenfier) {
        setMemberAnnotations(clusterAnnotationData.memberAnnotations);
        setClusterCoordinate(clusterAnnotationData.coordinate);

        if (annotationForCluster) {
          if (!clusterAnnotation) {
            const a = new mapkit.Annotation(
              new mapkit.Coordinate(
                clusterAnnotationData.coordinate.latitude,
                clusterAnnotationData.coordinate.longitude,
              ),
              () => contentEl,
            );
            setClusterAnnotation(a);
            return a;
          }
          return clusterAnnotation;
        }

        return clusterAnnotationData;
      }

      setMemberAnnotations([]);
      setClusterCoordinate(undefined);

      return existingClusterFunc
        ? existingClusterFunc(clusterAnnotationData)
        : clusterAnnotationData;
    };

    return () => {
      if (existingClusterFunc === undefined && map.annotationForCluster !== undefined) {
        // @ts-ignore
        delete map.annotationForCluster;
      } else {
        // @ts-ignore
        map.annotationForCluster = existingClusterFunc;
      }
    };
  }, [map]);

  return (
    <>
      {clusterCoordinate && annotationForCluster && clusterAnnotation
        ? createPortal(
          <ClusterAnnotationContext.Provider value={clusterAnnotation}>
            {annotationForCluster(
              memberAnnotations,
              clusterCoordinate,
            )}
          </ClusterAnnotationContext.Provider>,
          contentEl,
        )
        : null}
      <AnnotationClusterIdentifierContext.Provider value={clusterIdenfier}>
        {children}
      </AnnotationClusterIdentifierContext.Provider>
    </>
  );
}
