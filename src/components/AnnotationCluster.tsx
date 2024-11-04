import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import AnnotationClusterProps from './AnnotationClusterProps';
import MapContext from '../context/MapContext';

export const AnnotationClusterContext = createContext<string | null>(null);

export default function AnnotationCluster({
  children,
  annotationForCluster,
  clusterIdenfiier,
}: AnnotationClusterProps) {
  const map = useContext(MapContext);
  const [
    existingClusterFunc, setExistingClusterFunc,
  ] = useState<((clusterAnnotation: mapkit.Annotation) => void) | undefined>(undefined);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    if (existingClusterFunc === undefined) {
      setExistingClusterFunc(map.annotationForCluster);
    }

    map.annotationForCluster = (clusterAnnotation) => {
      if (clusterAnnotation.clusteringIdentifier === clusterIdenfiier) {
        if (annotationForCluster) {
          const annotation = annotationForCluster(clusterAnnotation.memberAnnotations);
          const { children: annotationChildren } = annotation;
          delete annotation.children;
          if (annotationChildren) {
            const contentEl = document.createElement('div');
            createPortal(annotationChildren, contentEl);

            const a = new mapkit.Annotation(
              new mapkit.Coordinate(
                clusterAnnotation.coordinate.latitude,
                clusterAnnotation.coordinate.longitude,
              ),
              () => contentEl,
            );

            /* Object.assign(
              a,
              annotation,
            ); */

            return a;
          }

          Object.assign(
            clusterAnnotation,
            annotation,
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
    <AnnotationClusterContext.Provider value={clusterIdenfiier}>
      {children}
    </AnnotationClusterContext.Provider>
  );
}
