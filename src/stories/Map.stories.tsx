import React, {
  useId, useState,
} from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import './stories.css';

import Map from '../components/Map';
import {
  ColorScheme, MapType, Distances, LoadPriority,
} from '../util/parameters';
import Marker from '../components/Marker';
import { MapInteractionEvent } from '../components/MapProps';

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

export const FixedSize: Story<MapProps> = (args) => (
  <div style={{ width: '300px', height: '200px' }}>
    <Map {...args} />
  </div>
);

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
  initialRegion: {
    centerLatitude: 40.44316701238923,
    centerLongitude: -79.9431147637379,
    latitudeDelta: 0.006337455593801167,
    longitudeDelta: 0.011960061265583022,
  },
  minCameraDistance: 100,
  maxCameraDistance: 1000,
};

export const LiveStateUpdate = () => {
  const [theme, setTheme] = useState(ColorScheme.Light);

  const options: { name: string, value: ColorScheme, id: string }[] = [
    { name: 'Light', value: ColorScheme.Light, id: useId() },
    { name: 'Dark', value: ColorScheme.Dark, id: useId() },
  ];

  return (
    <>
      <Map token={token} colorScheme={theme} paddingBottom={44} />

      <div className="map-overlay">
        <div className="map-overlay-box">
          {options.map((option) => (
            <label htmlFor={option.id}>
              <input
                id={option.id}
                type="radio"
                name="theme"
                value={option.value}
                onChange={() => setTheme(option.value)}
                checked={theme === option.value}
              />
              {option.name}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export const MapInteractionEvents = () => {
  type MarkerData = {
    latitude: number,
    longitude: number,
    title: string,
    color: string,
  };

  const [markers, setMarkers] = useState<MarkerData[]>([]);

  const eventHandler = (title: string, color: string) => (e: MapInteractionEvent) => {
    const { latitude, longitude } = e.toCoordinates();
    const newMarker: MarkerData = {
      latitude,
      longitude,
      title,
      color,
    };
    setMarkers([...markers, newMarker]);
  };

  return (
    <Map
      token={token}
      onSingleTap={eventHandler('Single tap', '#30b0c7')}
      onDoubleTap={eventHandler('Double tap', '#5856d7')}
      onLongPress={eventHandler('Long press', '#ff9500')}
      isZoomEnabled={false}
    >
      {markers.map(({
        latitude, longitude, title, color,
      }, index) => (
        <Marker
          latitude={latitude}
          longitude={longitude}
          title={title}
          subtitle={`(${latitude}, ${longitude})`}
          color={color}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ))}
    </Map>
  );
};
