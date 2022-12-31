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

  color = '#ff5b40',
  glyphColor = 'white',

  glyphText = '',
  glyphImage = null,
  selectedGlyphImage = undefined,

  selected = undefined,
  onSelect = undefined,
  onDeselect = undefined,
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

    selected,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!marker) return;
      // @ts-ignore
      marker[propertyName] = prop;
    }, [marker, prop]);
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
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
