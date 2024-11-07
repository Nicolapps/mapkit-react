import React, {
  createContext, Fragment, useContext, useEffect, useState,
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
  const map = useContext(MapContext);
  const [
    existingClusterFunc, setExistingClusterFunc,
  ] = useState<((clusterAnnotation: mapkit.Annotation) => void) | undefined>(undefined);
  const [clusterAnnotations, setClusterAnnotations] = useState<{
    contentElement: HTMLDivElement,
    annotation: mapkit.Annotation,
    coordinate: mapkit.Coordinate,
    memberAnnotations: mapkit.Annotation[]
  }[]>([]);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    if (existingClusterFunc === undefined) {
      setExistingClusterFunc(map.annotationForCluster);
    }

    map.annotationForCluster = (clusterAnnotationData) => {
      if (clusterAnnotationData.clusteringIdentifier === clusterIdenfier) {
        if (annotationForCluster) {
          const annotation = clusterAnnotations.find((a) => a.coordinate.latitude == clusterAnnotationData.coordinate.latitude
          && a.coordinate.longitude == clusterAnnotationData.coordinate.longitude);
          if (annotation) {
            return annotation.annotation;
          }

          const contentElement = document.createElement('div');
          const a = new mapkit.Annotation(
            new mapkit.Coordinate(
              clusterAnnotationData.coordinate.latitude,
              clusterAnnotationData.coordinate.longitude,
            ),
            () => contentElement,
          );

          setClusterAnnotations((annotations) => [...annotations, {
            contentElement,
            annotation: a,
            coordinate: clusterAnnotationData.coordinate,
            memberAnnotations: clusterAnnotationData.memberAnnotations,
          }]);

          return a;
        }

        return clusterAnnotationData;
      }

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

  console.log('clusterAnnotation', clusterAnnotations);

  return (
    <>
      {annotationForCluster && clusterAnnotations.map(({
        contentElement, annotation, coordinate, memberAnnotations,
      }) => (
        <Fragment key={`${coordinate.latitude}_${coordinate.longitude}`}>
          {createPortal(
            <ClusterAnnotationContext.Provider value={annotation}>
              {annotationForCluster(
                memberAnnotations,
                coordinate,
              )}
            </ClusterAnnotationContext.Provider>,
            contentElement,
          )}
        </Fragment>
      ))}
      <AnnotationClusterIdentifierContext.Provider value={clusterIdenfier}>
        {children}
      </AnnotationClusterIdentifierContext.Provider>
    </>
  );
}
