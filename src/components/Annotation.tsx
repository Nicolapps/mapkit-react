import {
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import MapContext from '../context/MapContext';
import AnnotationProps from './AnnotationProps';
import forwardMapkitEvent from '../util/forwardMapkitEvent';

export default function Annotation({
  latitude,
  longitude,

  title = '',
  subtitle = '',
  accessibilityLabel = null,

  selected = undefined,
  onSelect = undefined,
  onDeselect = undefined,
  onDragStart = undefined,
  onDragEnd = undefined,
  onDragging = undefined,

  animates = undefined,
  appearanceAnimation = '',
  draggable = undefined,
  enabled = undefined,

  children,
}: AnnotationProps) {
  const [annotation, setAnnotation] = useState<mapkit.Annotation | null>(null);
  const contentEl = useMemo<HTMLDivElement>(() => document.createElement('div'), []);
  const map = useContext(MapContext);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    const a = new mapkit.Annotation(
      new mapkit.Coordinate(latitude, longitude),
      () => contentEl,
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
    animates,
    appearanceAnimation,
    draggable,
    enabled,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!annotation) return;
      // @ts-ignore
      annotation[propertyName] = prop;
    }, [annotation, prop]);
  });

  const handlerWithoutParameters = () => { };

  const mapDragEndParameters = () => ({
    // @ts-ignore
    latitude: annotation.coordinate.latitude,
    // @ts-ignore
    longitude: annotation.coordinate.longitude,
  });

  const mapDraggingParameters = (e: any) => ({
    latitude: e.coordinate.latitude,
    longitude: e.coordinate.longitude,
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
    { name: 'drag-start', handler: onDragStart },
  ] as const;
  events.forEach(({ name, handler }) => {
    forwardMapkitEvent(annotation, name, handler, handlerWithoutParameters);
  });

  forwardMapkitEvent(annotation, 'drag-end', onDragEnd, mapDragEndParameters);
  forwardMapkitEvent(annotation, 'dragging', onDragging, mapDraggingParameters);

  return createPortal(children, contentEl);
}
