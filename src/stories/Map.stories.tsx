import React, { useId, useMemo, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import './stories.css';

import Map from '../components/Map';
import {
  ColorScheme,
  MapType,
  Distances,
  LoadPriority,
  CoordinateRegion,
  PointOfInterestCategory,
  FeatureVisibility,
} from '../util/parameters';
import Marker from '../components/Marker';
import { MapInteractionEvent } from '..';

// @ts-ignore
const token = import.meta.env.STORYBOOK_MAPKIT_JS_TOKEN!;

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
  args: {
    token,
    onLoad: fn(),
    onRegionChangeStart: fn(),
    onRegionChangeEnd: fn(),
    onMapTypeChange: fn(),
    onSingleTap: fn(),
    onDoubleTap: fn(),
    onLongPress: fn(),
    onClick: fn(),
    onMouseMove: fn(),
    onMouseDown: fn(),
    onMouseUp: fn(),
    onUserLocationChange: fn(),
    onUserLocationError: fn(),
  },
  argTypes: {
    colorScheme: enumArgType(ColorScheme),
    mapType: enumArgType(MapType),
    distances: enumArgType(Distances),
    loadPriority: enumArgType(LoadPriority),
    showsCompass: enumArgType(FeatureVisibility),
    showsScale: enumArgType(FeatureVisibility),
  },
  parameters: { layout: 'fullscreen' },
} as Meta<typeof Map>;

type MapProps = React.ComponentProps<typeof Map>;

const Template: StoryFn<MapProps> = (args) => <Map {...args} />;

export const Empty = Template.bind({});

export const FixedSize: StoryFn<MapProps> = (args) => (
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

  const options: { name: string; value: ColorScheme; id: string }[] = [
    { name: 'Light', value: ColorScheme.Light, id: useId() },
    { name: 'Dark', value: ColorScheme.Dark, id: useId() },
    { name: 'Auto', value: ColorScheme.Auto, id: useId() },
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
    latitude: number;
    longitude: number;
    title: string;
    color: string;
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

export const PointOfInterestFilters = () => {
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 40.7538,
      centerLongitude: -73.986,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }),
    [],
  );

  const categories: PointOfInterestCategory[] = useMemo(
    () => (
      Object.values(PointOfInterestCategory) as Array<
      keyof typeof PointOfInterestCategory
      >
    )
      .filter((val) => typeof val === 'string')
      .map((str) => PointOfInterestCategory[str]),
    [],
  );

  const [isEnabled, setIsEnabled] = useState(() => categories.map(() => true));

  const idPrefix = useId();

  return (
    <>
      <Map
        token={token}
        initialRegion={initialRegion}
        showsMapTypeControl={false}
        includedPOICategories={categories.filter(
          (_, index) => isEnabled[index],
        )}
      />

      <div className="map-overlay map-overlay-top">
        <div className="map-overlay-box map-overlay-options">
          {categories.map((category, categoryIndex) => (
            <label key={category} htmlFor={idPrefix + categoryIndex}>
              <input
                id={idPrefix + categoryIndex}
                type="checkbox"
                checked={isEnabled[categoryIndex]}
                onChange={() => {
                  const newIsEnabled = [...isEnabled];
                  newIsEnabled[categoryIndex] = !isEnabled[categoryIndex];
                  setIsEnabled(newIsEnabled);
                }}
              />
              {PointOfInterestCategory[category]}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
PointOfInterestFilters.storyName = 'Point of Interest Filter';

function ReadOnlyInput({ label, value }: { label: string; value: string }) {
  const id = useId();
  return (
    <label className="form-group" htmlFor={id}>
      {label}
      <input id={id} type="text" className="input" value={value} readOnly />
    </label>
  );
}

export const RegionChangeEvent = () => {
  const [centerLatitude, setCenterLatitude] = useState(46.94869130019719);
  const [centerLongitude, setCenterLongitude] = useState(7.447300186911917);
  const [latitudeDelta, setLatitudeDelta] = useState(0.010188625378894756);
  const [longitudeDelta, setLongitudeDelta] = useState(0.024314821659999097);

  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude,
      centerLongitude,
      latitudeDelta,
      longitudeDelta,
    }),
    [],
  );

  return (
    <>
      <Map
        token={token}
        initialRegion={initialRegion}
        onRegionChangeEnd={(region) => {
          setCenterLatitude(region.centerLatitude);
          setCenterLongitude(region.centerLongitude);
          setLatitudeDelta(region.latitudeDelta);
          setLongitudeDelta(region.longitudeDelta);
        }}
      />

      <div className="map-overlay map-overlay-top">
        <div className="map-overlay-box map-overlay-inputs">
          <ReadOnlyInput
            label="Center latitude"
            value={centerLatitude.toString()}
          />
          <ReadOnlyInput
            label="Center longitude"
            value={centerLongitude.toString()}
          />
          <ReadOnlyInput
            label="Latitude delta"
            value={latitudeDelta.toString()}
          />
          <ReadOnlyInput
            label="Longitude delta"
            value={longitudeDelta.toString()}
          />
        </div>
      </div>
    </>
  );
};

export const CustomLoadFunction = () => {
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 40.7538,
      centerLongitude: -73.986,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }),
    [],
  );

  return (
    <Map
      load={(customLoadToken) => new Promise((resolve) => {
        const element = document.createElement('script');
        // @ts-ignore-next-line
        window.initMapKit = () => {
          // @ts-ignore-next-line
          delete window.initMapKit;
          window.mapkit.init({
            authorizationCallback: (done) => {
              done(customLoadToken);
            },
          });
          resolve();
        };
        element.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js';
        element.dataset.callback = 'initMapKit';
        element.dataset.initialToken = customLoadToken;
        element.dataset.libraries = 'map';
        element.crossOrigin = 'anonymous';
        document.head.appendChild(element);
      })}
      token={token}
      initialRegion={initialRegion}
      showsMapTypeControl={false}
    />
  );
};
CustomLoadFunction.storyName = 'Custom `load` Function';
