import { useContext, useEffect, useState } from 'react';
import MapContext from '../context/MapContext';
import PolygonProps from './PolygonProps';
import { Coordinate } from '../util/parameters';

export default function Polygon({
  points,

  visible = true,
  enabled = true,
  selected = false,

  onSelect = undefined,
  onDeselect = undefined,

  lineDash = [],
  lineDashOffset = 0,
  lineJoin = 'round',
  lineWidth = 1,

  strokeColor = 'rgb(0, 122, 255)',
  strokeOpacity = 1,
  strokeStart = 0,
  strokeEnd = 1,

  fillColor = 'rgb(0, 122, 255)',
  fillOpacity = 0.1,
  fillRule = 'nonzero',
}: PolygonProps) {
  const [polygon, setPolygon] = useState<mapkit.PolygonOverlay | null>(null);
  const map = useContext(MapContext);

  useEffect(() => {
    if (map === null) return undefined;

    const overlay = new mapkit.PolygonOverlay([]);
    map.addOverlay(overlay);
    setPolygon(overlay);

    return () => {
      map.removeOverlay(overlay);
    };
  }, [map]);

  // Points
  useEffect(() => {
    if (polygon === null) return;

    // No points
    if (!points || points.length === 0) {
      polygon.points = [];
      return;
    }

    const toMapKitCoordinates = (coordinates: Coordinate[]): mapkit.Coordinate[] => coordinates.map(
      ({ latitude, longitude }) => new mapkit.Coordinate(latitude, longitude),
    );

    // @ts-ignore
    polygon.points = Array.isArray(points[0])
      ? (points as Coordinate[][]).map(toMapKitCoordinates)
      : toMapKitCoordinates(points as Coordinate[]);
  }, [polygon, points]);

  // Simple properties
  const properties = { visible, enabled, selected };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!polygon) return;
      // @ts-ignore
      polygon[propertyName] = prop;
    }, [polygon, prop]);
  });

  // Simple style properties
  const styleProperties = {
    lineDash,
    lineDashOffset,
    lineJoin,
    lineWidth,

    strokeColor,
    strokeOpacity,
    strokeStart,
    strokeEnd,

    fillColor,
    fillOpacity,
    fillRule,
  };
  Object.entries(styleProperties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!polygon) return;
      // @ts-ignore
      polygon.style[propertyName] = prop;
    }, [polygon, prop]);
  });

  // Events
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
  ] as const;
  events.forEach(({ name, handler }) => {
    useEffect(() => {
      if (!polygon || !handler) return undefined;

      const handlerWithoutParameters = () => handler();

      polygon.addEventListener(name, handlerWithoutParameters);
      return () => polygon.removeEventListener(name, handlerWithoutParameters);
    }, [polygon, handler]);
  });

  return null;
}
