import { useContext, useEffect, useState } from 'react';
import MapContext from '../context/MapContext';
import CircleProps from './CircleProps';

export default function Circle({
  coordinate,
  radius,

  visible = true,
  enabled = true,
  selected = false,

  onSelect = undefined,
  onDeselect = undefined,

  lineDash = [],
  lineDashOffset = 0,
  lineWidth = 1,

  strokeColor = 'rgb(0, 122, 255)',
  strokeOpacity = 1,

  fillColor = 'rgb(0, 122, 255)',
  fillOpacity = 0.1,
}: CircleProps) {
  const [circle, setCircle] = useState<mapkit.CircleOverlay | null>(null);
  const map = useContext(MapContext);

  useEffect(() => {
    if (map === null) return undefined;

    const { latitude, longitude } = coordinate;
    const mapKitCoordinate = new mapkit.Coordinate(latitude, longitude);
    const overlay = new mapkit.CircleOverlay(mapKitCoordinate, radius);
    map.addOverlay(overlay);
    setCircle(overlay);

    return () => {
      map.removeOverlay(overlay);
    };
  }, [map]);

  // Simple properties
  const properties = { visible, enabled, selected };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!circle) return;
      // @ts-ignore
      circle[propertyName] = prop;
    }, [circle, prop]);
  });

  // Simple style properties
  const styleProperties = {
    lineDash,
    lineDashOffset,
    lineWidth,

    strokeColor,
    strokeOpacity,

    fillColor,
    fillOpacity,
  };
  Object.entries(styleProperties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!circle) return;
      // @ts-ignore
      circle.style[propertyName] = prop;
    }, [circle, prop]);
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
  ] as const;
  events.forEach(({ name, handler }) => {
    useEffect(() => {
      if (!circle || !handler) return undefined;

      const handlerWithoutParameters = () => handler();

      circle.addEventListener(name, handlerWithoutParameters);
      return () => circle.removeEventListener(name, handlerWithoutParameters);
    }, [circle, handler]);
  });

  return null;
}
