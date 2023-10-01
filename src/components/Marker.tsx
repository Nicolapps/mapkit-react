import { useContext, useEffect, useState } from 'react';
import MapContext from '../context/MapContext';
import { FeatureVisibility, toMapKitFeatureVisibility } from '../util/parameters';
import MarkerProps from './MarkerProps';
import forwardMapkitEvent from '../util/forwardMapkitEvent';

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

  selected = undefined,
  animates = undefined,
  appearanceAnimation = '',
  draggable = undefined,
  enabled = undefined,
  onSelect = undefined,
  onDeselect = undefined,
  onDragStart = undefined,
  onDragEnd = undefined,
  onDragging = undefined,
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
    clusteringIdentifier,
    selected,
    animates,
    appearanceAnimation,
    draggable,
    enabled,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!marker) return;
      // @ts-ignore
      marker[propertyName] = prop;
    }, [marker, prop]);
  });

  // Events
  const handlerWithoutParameters = () => { };
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
    { name: 'drag-start', handler: onDragStart },
  ] as const;
  events.forEach(({ name, handler }) => {
    forwardMapkitEvent(marker, name, handler, handlerWithoutParameters);
  });

  const dragEndParameters = () => ({
    latitude: marker!.coordinate.latitude,
    longitude: marker!.coordinate.longitude,
  });
  const draggingParameters = (e: { coordinate: mapkit.Coordinate }) => ({
    latitude: e.coordinate.latitude,
    longitude: e.coordinate.longitude,
  });
  forwardMapkitEvent(marker, 'drag-end', onDragEnd, dragEndParameters);
  forwardMapkitEvent(marker, 'dragging', onDragging, draggingParameters);

  return null;
}
