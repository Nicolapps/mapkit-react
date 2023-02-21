import { useContext, useEffect, useState } from 'react';
import MapContext from '../context/MapContext';
import PolylineProps from './PolylineProps';

export default function Polyline({
  points,

  visible = true,
  enabled = true,
  selected = false,

  onSelect = undefined,
  onDeselect = undefined,

  lineCap = 'round',
  lineDash = [],
  lineDashOffset = 0,
  lineJoin = 'round',
  lineWidth = 1,

  strokeColor = 'rgb(0, 122, 255)',
  strokeOpacity = 1,
  strokeStart = 0,
  strokeEnd = 1,
}: PolylineProps) {
  const [polyline, setPolyline] = useState<mapkit.PolylineOverlay | null>(null);
  const map = useContext(MapContext);

  useEffect(() => {
    if (map === null) return undefined;

    const overlay = new mapkit.PolylineOverlay([]);
    map.addOverlay(overlay);
    setPolyline(overlay);

    return () => {
      map.removeOverlay(overlay);
    };
  }, [map]);

  // Points
  useEffect(() => {
    if (polyline === null) return;
    polyline.points = points
      .map(({ latitude, longitude }) => new mapkit.Coordinate(latitude, longitude));
  }, [polyline, points]);

  // Simple properties
  const properties = { visible, enabled, selected };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!polyline) return;
      // @ts-ignore
      polyline[propertyName] = prop;
    }, [polyline, prop]);
  });

  // Simple style properties
  const styleProperties = {
    lineCap,
    lineDash,
    lineDashOffset,
    lineJoin,
    lineWidth,

    strokeColor,
    strokeOpacity,
    strokeStart,
    strokeEnd,
  };
  Object.entries(styleProperties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!polyline) return;
      // @ts-ignore
      polyline.style[propertyName] = prop;
    }, [polyline, prop]);
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
  ] as const;
  events.forEach(({ name, handler }) => {
    useEffect(() => {
      if (!polyline || !handler) return undefined;

      const handlerWithoutParameters = () => handler();

      polyline.addEventListener(name, handlerWithoutParameters);
      return () => polyline.removeEventListener(name, handlerWithoutParameters);
    }, [polyline, handler]);
  });

  return null;
}
