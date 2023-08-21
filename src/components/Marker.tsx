import { useContext, useEffect, useState } from 'react';
import MapContext from '../context/MapContext';
import { FeatureVisibility, toMapKitFeatureVisibility } from '../util/parameters';
import MarkerProps from './MarkerProps';

export default function Marker({
  latitude,
  longitude,

  title = '',
  subtitle = '',
  accessibilityLabel = null,
  subtitleVisibility = FeatureVisibility.Adaptive,
  titleVisibility = FeatureVisibility.Adaptive,
  clusteringIdentifier = null,
  color = '#ff5b40',
  glyphColor = 'white',

  glyphText = '',
  glyphImage = null,
  selectedGlyphImage = undefined,

  size = undefined,

  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,

  selected = undefined,
  animates = undefined,
  appearanceAnimation = '',
  draggable = undefined,
  enabled = undefined,
  visible = undefined,

  onSelect = undefined,
  onDeselect = undefined,
  onDragStart = undefined,
  onDragEnd = undefined,
}: MarkerProps) {
  const [marker, setMarker] = useState<mapkit.MarkerAnnotation | null>(null);
  const map = useContext(MapContext);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    const m = new mapkit.MarkerAnnotation(
      new mapkit.Coordinate(latitude, longitude),
    );
    map.addAnnotation(m);
    setMarker(m);

    return () => {
      map.removeAnnotation(m);
    };
  }, [map, latitude, longitude]);

  // Enum properties
  useEffect(() => {
    if (!marker) return;
    marker.subtitleVisibility = toMapKitFeatureVisibility(subtitleVisibility);
  }, [marker, subtitleVisibility]);
  useEffect(() => {
    if (!marker) return;
    marker.titleVisibility = toMapKitFeatureVisibility(titleVisibility);
  }, [marker, titleVisibility]);

  // Simple values properties
  const properties = {
    title,
    subtitle,
    accessibilityLabel,

    color,
    glyphColor,

    glyphText,
    glyphImage,
    selectedGlyphImage,

    size,

    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,

    clusteringIdentifier,
    selected,
    animates,
    appearanceAnimation,
    draggable,
    enabled,
    visible,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!marker) return;
      // @ts-ignore
      if (prop === undefined) { delete annotation[propertyName]; return; }
      // @ts-ignore
      marker[propertyName] = prop;
    }, [marker, prop]);
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
      if (!marker || !handler) return undefined;

      const handlerWithoutParameters = () => handler();

      marker.addEventListener(name, handlerWithoutParameters);
      return () => marker.removeEventListener(name, handlerWithoutParameters);
    }, [marker, handler]);
  });

  return null;
}
