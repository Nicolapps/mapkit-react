import {
  useContext,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import MapContext from '../context/MapContext';
import AnnotationProps from './AnnotationProps';

export default function Annotation({
  latitude,
  longitude,

  title = '',
  subtitle = '',
  accessibilityLabel = null,

  selected = undefined,
  onSelect = undefined,
  onDeselect = undefined,
  children,
}: AnnotationProps) {
  const [annotation, setAnnotation] = useState<mapkit.Annotation | null>(null);
  const [contentEl, setContentEl] = useState<HTMLDivElement | null>(null);
  const map = useContext(MapContext);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    const el = document.createElement('div');
    el.id = 'annotation-content';
    setContentEl(el);
    const a = new mapkit.Annotation(
      new mapkit.Coordinate(latitude, longitude),
      () => el,
    );
    map.addAnnotation(a);
    setAnnotation(a);

    return () => {
      map.removeAnnotation(a);
    };
  }, [map, latitude, longitude]);

  // Simple values properties
  const properties = {
    title,
    subtitle,
    accessibilityLabel,

    selected,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!annotation) return;
      // @ts-ignore
      annotation[propertyName] = prop;
    }, [annotation, prop]);
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
  ] as const;
  events.forEach(({ name, handler }) => {
    useEffect(() => {
      if (!annotation || !handler) return undefined;

      const handlerWithoutParameters = () => handler();

      annotation.addEventListener(name, handlerWithoutParameters);
      return () => annotation.removeEventListener(name, handlerWithoutParameters);
    }, [annotation, handler]);
  });

  return contentEl && createPortal(children, contentEl);
}
