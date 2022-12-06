import { useContext, useEffect } from 'react';
import MapContext from '../context/MapContext';

export interface AnnotationProps {
  latitude: number;
  longitude: number;
}

export default function Annotation({ latitude, longitude }: AnnotationProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (map === null) return undefined;

    const marker = new mapkit.MarkerAnnotation(
      new mapkit.Coordinate(latitude, longitude),
    );
    map.addAnnotation(marker);

    return () => {
      map.removeAnnotation(marker);
    };
  }, [map, latitude, longitude]);

  return null;
}
