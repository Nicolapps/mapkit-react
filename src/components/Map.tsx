import React, { useState, useEffect, useRef } from 'react';
import load from '../util/loader';
import { ColorScheme, toMapKitColorScheme } from '../util/parameters';

export interface MapProps {
  /**
   * The token provided by MapKit JS
   */
  token: string;

  /**
   * The color scheme of the map
   */
  colorScheme?: ColorScheme;
}

export default function Map({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  token,
  colorScheme = ColorScheme.Light,
}: MapProps) {
  const [map, setMap] = useState<mapkit.Map | null>(null);
  const element = useRef<HTMLDivElement>(null);

  // Load the map
  useEffect(() => {
    load(token).then(() => {
      setMap(new mapkit.Map(element.current!));
    });

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  // Color scheme
  useEffect(() => {
    if (!map) return;

    map.colorScheme = toMapKitColorScheme(colorScheme);
  }, [map, colorScheme]);

  return (
    <React.StrictMode>
      <div style={{ width: '100%', height: '100%' }} ref={element} />
    </React.StrictMode>
  );
}
