import React, { useCallback, useRef } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import './stories.css';

import Map from '../components/Map';
import {
  ColorScheme, MapType, Distances, LoadPriority,
} from '../util/parameters';

const token = process.env.STORYBOOK_MAPKIT_JS_TOKEN!;

const enumArgType = (e: object) => ({
  options: Object.values(e).filter((val) => typeof val === 'number'),
  control: {
    type: 'inline-radio',
    labels: Object.values(e).filter((val) => typeof val === 'string'),
  },
});
export default {
  title: 'MapKit JS refs/Map',
  component: Map,
  args: { token },
  argTypes: {
    colorScheme: enumArgType(ColorScheme),
    mapType: enumArgType(MapType),
    distances: enumArgType(Distances),
    loadPriority: enumArgType(LoadPriority),
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'To access methods or properties not exposed by mapkit-react, you can access the `map` object provided by MapKit JS using a reference.',
      },
    },
  },
} as ComponentMeta<typeof Map>;

type MapProps = React.ComponentProps<typeof Map>;

export const MapReference: Story<MapProps> = (args) => {
  const mapRef = useRef<mapkit.Map>(null);

  // Animate a rotation when the button is pressed
  const rotate = useCallback(() => {
    if (mapRef.current === null) return;

    if (!mapRef.current.isRotationAvailable) {
      // eslint-disable-next-line no-alert
      alert('Sorry, rotation is not available.');
      return;
    }

    mapRef.current.setRotationAnimated(mapRef.current.rotation + 90);
  }, [mapRef]);

  return (
    <>
      <Map ref={mapRef} {...args} />

      <div className="map-overlay">
        <button type="button" onClick={rotate}>
          ↻ Rotate
        </button>
      </div>
    </>
  );
};
MapReference.args = {
  paddingBottom: 44,
  initialRegion: {
    centerLatitude: 37.7812,
    centerLongitude: -122.44755,
    latitudeDelta: 0.10,
    longitudeDelta: 0.11,
  },
};
