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
  displayPriority = undefined,
  collisionMode = undefined,

  color = '#ff5b40',
  glyphColor = 'white',
  glyphText = '',
  glyphImage = null,
  selectedGlyphImage = null,

  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  anchorOffsetX = 0,
  anchorOffsetY = 0,

  data = {},
  callout = undefined,
  calloutEnabled = undefined,
  calloutOffsetX = 0,
  calloutOffsetY = 0,

  selected = false,
  animates = true,
  appearanceAnimation = '',
  visible = true,

  draggable = false,
  enabled = true,

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

  // Padding
  useEffect(() => {
    if (!marker) return;
    marker.padding = new mapkit.Padding(paddingTop, paddingRight, paddingBottom, paddingLeft);
  }, [marker, paddingTop, paddingRight, paddingBottom, paddingLeft]);

  // AnchorOffset
  useEffect(() => {
    if (!marker) return;
    marker.anchorOffset = new DOMPoint(anchorOffsetX, anchorOffsetY);
  }, [marker, anchorOffsetX, anchorOffsetY]);

  // CalloutOffset
  useEffect(() => {
    if (!marker) return;
    marker.calloutOffset = new DOMPoint(calloutOffsetX, calloutOffsetY);
  }, [marker, calloutOffsetX, calloutOffsetY]);

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
    displayPriority,
    collisionMode,

    selected,
    animates,
    appearanceAnimation,
    draggable,
    enabled,
    visible,

    data,
    callout,
    calloutEnabled,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!marker) return;
      // @ts-ignore
      if (prop === undefined) { delete marker[propertyName]; return; }
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
