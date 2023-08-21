import {
  useContext,
  useEffect,
  useState,
  useMemo,
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

  size = undefined,

  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  anchorOffsetX = 0,
  anchorOffsetY = 0,

  selected = undefined,
  onSelect = undefined,
  onDeselect = undefined,
  onDragStart = undefined,
  onDragEnd = undefined,

  animates = undefined,
  appearanceAnimation = '',
  draggable = undefined,
  enabled = undefined,
  visible = undefined,

  clusteringIdentifier = null,

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

  // Padding
  useEffect(() => {
    if (!annotation) return;
    annotation.padding = new mapkit.Padding(paddingTop, paddingRight, paddingBottom, paddingLeft);
  }, [annotation, paddingTop, paddingRight, paddingBottom, paddingLeft]);

  // AnchorOffset
  useEffect(() => {
    if (!annotation) return;
    annotation.anchorOffset = new DOMPoint(anchorOffsetX, anchorOffsetY);
  }, [annotation, anchorOffsetX, anchorOffsetY]);

  // Simple values properties
  const properties = {
    title,
    subtitle,
    accessibilityLabel,

    size,

    selected,
    animates,
    appearanceAnimation,
    draggable,
    enabled,
    visible,
    clusteringIdentifier,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!annotation) return;
      // @ts-ignore
      if (prop === undefined) { delete annotation[propertyName]; return; }
      // @ts-ignore
      annotation[propertyName] = prop;
    }, [annotation, prop]);
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
    { name: 'drag-start', handler: onDragStart },
    { name: 'drag-end', handler: onDragEnd },
  ] as const;
  events.forEach(({ name, handler }) => {
    useEffect(() => {
      if (!annotation || !handler) return undefined;

      const handlerWithoutParameters = () => handler();

      annotation.addEventListener(name, handlerWithoutParameters);
      return () => annotation.removeEventListener(name, handlerWithoutParameters);
    }, [annotation, handler]);
  });

  return createPortal(children, contentEl);
}
