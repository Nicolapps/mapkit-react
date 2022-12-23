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
  title: 'Components/Map',
  component: Map,
  args: { token },
  argTypes: {
    colorScheme: enumArgType(ColorScheme),
    mapType: enumArgType(MapType),
    distances: enumArgType(Distances),
    loadPriority: enumArgType(LoadPriority),
  },
  parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof Map>;

type MapProps = React.ComponentProps<typeof Map>;

const Template: Story<MapProps> = (args) => <Map {...args} />;

export const Empty = Template.bind({});

export const CustomizedAppearance = Template.bind({});
CustomizedAppearance.args = {
  colorScheme: ColorScheme.Dark,
  mapType: MapType.MutedStandard,
  showsMapTypeControl: false,
  showsUserLocationControl: true,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 32,
  paddingBottom: 32,
};

export const RegionLock = Template.bind({});
RegionLock.args = {
  cameraBoundary: {
    centerLatitude: 40.444,
    centerLongitude: -79.945,
    latitudeDelta: 0.006,
    longitudeDelta: 0.008,
  },
  minCameraDistance: 100,
  maxCameraDistance: 1000,
};

export const MapObject: Story<MapProps> = (args) => {
  const mapRef = useRef<mapkit.Map>(null);

  // Set the initial region to San Francisco
  const ready = useCallback(() => {
    mapRef.current!.region = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(37.7812, -122.44755),
      new mapkit.CoordinateSpan(0.10, 0.11),
    );
  }, [mapRef]);

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
      <Map ref={mapRef} {...args} onReady={ready} />

      <div className="map-overlay">
        <button type="button" onClick={rotate}>
          ↻ Rotate
        </button>
      </div>
    </>
  );
};
MapObject.storyName = 'Use the Map Object';
MapObject.args = {
  paddingBottom: 44,
};
