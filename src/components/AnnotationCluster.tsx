import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import AnnotationClusterProps from './AnnotationClusterProps';
import MapContext from '../context/MapContext';

export const AnnotationClusterContext = createContext<{
  memberAnnotations: mapkit.Annotation[], coordinate: mapkit.Coordinate
}>({
  memberAnnotations: [],
  // @ts-ignore
  coordinate: undefined,
});

export const AnnotationClusterIdentifierContext = createContext<string | null>(null);

export const useClusterAnnotation = () => useContext(AnnotationClusterContext);

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

  const annotationContextValue = useMemo(() => ({
    memberAnnotations,
    coordinate: clusterCoordinate,
  }), [memberAnnotations, clusterCoordinate]);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    if (existingClusterFunc === undefined) {
      setExistingClusterFunc(map.annotationForCluster);
    }

    map.annotationForCluster = (clusterAnnotation) => {
      if (clusterAnnotation.clusteringIdentifier === clusterIdenfier) {
        if (annotationForCluster) {
          setMemberAnnotations(clusterAnnotation.memberAnnotations);
          setClusterCoordinate(clusterAnnotation.coordinate);

          // Return an empty annotation to remove the default cluster
          return new mapkit.Annotation(
            new mapkit.Coordinate(
              clusterAnnotation.coordinate.latitude,
              clusterAnnotation.coordinate.longitude,
            ),
            () => contentEl,
          );
        }
        return clusterAnnotation;
      }

      return existingClusterFunc ? existingClusterFunc(clusterAnnotation) : clusterAnnotation;
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
    // @ts-ignore
    <AnnotationClusterContext.Provider value={annotationContextValue}>
      {clusterCoordinate ? annotationForCluster : null}
      <AnnotationClusterIdentifierContext.Provider value={clusterIdenfier}>
        {children}
      </AnnotationClusterIdentifierContext.Provider>
    </AnnotationClusterContext.Provider>
  );
}
