import React, { useEffect, useRef } from 'react';
import load from '../util/loader';

interface MapProps {
  /**
   * The token provided by MapKit JS
   */
  token: string;
}

export default function Map({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  token,
}: MapProps) {
  const map = useRef<mapkit.Map | null>(null);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    load(token).then(() => {
      map.current = new mapkit.Map(element.current!);
    });
  }, []);

  return (
    <React.StrictMode>
      <div style={{ width: '100%', height: '100%' }} ref={element} />
    </React.StrictMode>
  );
}
