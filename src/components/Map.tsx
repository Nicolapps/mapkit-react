import React from 'react';

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
  return (
    <React.StrictMode>
      <div />
    </React.StrictMode>
  );
}
