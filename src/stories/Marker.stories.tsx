import React, { useId, useMemo, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import './stories.css';
import Map from '../components/Map';
import Marker from '../components/Marker';
import { CoordinateRegion, FeatureVisibility } from '../util/parameters';
import AnnotationCluster from '../components/AnnotationCluster';

// @ts-ignore
const token = import.meta.env.STORYBOOK_MAPKIT_JS_TOKEN!;

const enumArgType = (e: object) => ({
  options: Object.values(e).filter((x) => typeof x === 'string'),
  mapping: e,
});
export default {
  title: 'Components/Marker',
  component: Marker,
  args: {
    onSelect: fn(),
    onDeselect: fn(),
    onDragStart: fn(),
    onDragEnd: fn(),
    onDragging: fn(),
  },
  argTypes: {
    subtitleVisibility: enumArgType(FeatureVisibility),
    titleVisibility: enumArgType(FeatureVisibility),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Marker>;

type MarkerProps = React.ComponentProps<typeof Marker>;

const Template: StoryFn<MarkerProps> = (args) => {
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 48,
      centerLongitude: 14,
      latitudeDelta: 22,
      longitudeDelta: 55,
    }),
    [],
  );
  return (
    <Map token={token} initialRegion={initialRegion}>
      <Marker {...args} />
    </Map>
  );
};

export const Default = Template.bind({});
Default.args = { latitude: 46.52, longitude: 6.57 };

export const TwoWayBindingSelected = () => {
  const [selected, setSelected] = useState(false);

  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 0.007,
      longitudeDelta: 0.015,
    }),
    [],
  );

  const checkboxId = useId();

  return (
    <>
      <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
        <Marker
          latitude={46.20738751546706}
          longitude={6.155891756231}
          title="Jet d’eau"
          subtitle="Iconic landmark of Geneva"
          selected={selected}
          onSelect={() => setSelected(true)}
          onDeselect={() => setSelected(false)}
        />
      </Map>

      <div className="map-overlay">
        <div className="map-overlay-box">
          <label htmlFor={checkboxId}>
            <input
              id={checkboxId}
              type="checkbox"
              checked={selected}
              onChange={(e) => setSelected(e.target.checked)}
            />
            Selected
          </label>
        </div>
      </div>
    </>
  );
};
TwoWayBindingSelected.storyName = 'Two-Way Binding for `selected`';

export const MoveableMarker = () => {
  const [latitude, setLatitude] = useState(46.20738751546706);
  const [longitude, setLongitude] = useState(6.155891756231);

  const idLatitude = useId();
  const idLongitude = useId();

  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }),
    [],
  );

  return (
    <>
      <Map token={token} initialRegion={initialRegion}>
        <Marker
          latitude={latitude}
          longitude={longitude}
          title="Tap and hold to move"
          draggable
          enabled
          onDragEnd={(coordinate) => {
            setLatitude(coordinate.latitude);
            setLongitude(coordinate.longitude);
          }}
        />
      </Map>

      <div className="map-overlay map-overlay-top">
        <div className="map-overlay-box map-overlay-inputs">
          <label className="form-group" htmlFor={idLatitude}>
            Latitude
            <input
              id={idLatitude}
              type="text"
              className="input"
              value={latitude}
              onChange={(e) => setLatitude(Number(e.target.value))}
            />
          </label>
          <label className="form-group" htmlFor={idLongitude}>
            Longitude
            <input
              id={idLatitude}
              type="text"
              className="input"
              value={longitude}
              onChange={(e) => setLongitude(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export const MarkerClusteringOld = () => {
  const clusteringIdentifier = 'id';
  const [selected, setSelected] = useState<number | null>(null);

  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }),
    [],
  );

  const coordinates = [
    { latitude: 46.20738751546706, longitude: 6.155891756231 },
    { latitude: 46.25738751546706, longitude: 6.185891756231 },
    { latitude: 46.28738751546706, longitude: 6.2091756231 },
  ];

  return (
    <>
      <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
        {coordinates.map(({ latitude, longitude }, index) => (
          <Marker
            latitude={latitude}
            longitude={longitude}
            title={`Marker #${index + 1}`}
            selected={selected === index + 1}
            onSelect={() => setSelected(index + 1)}
            onDeselect={() => setSelected(null)}
            clusteringIdentifier={clusteringIdentifier}
            collisionMode="Circle"
            displayPriority={750}
          />
        ))}
      </Map>

      <div className="map-overlay">
        <div className="map-overlay-box">
          <p>{selected ? `Selected marker #${selected}` : 'Not selected'}</p>
        </div>
      </div>
    </>
  );
};

MarkerClusteringOld.storyName = 'Clustering three markers into one (old)';

export const MarkerClustering = () => {
  const clusteringIdentifier = 'id';
  const [selected, setSelected] = useState<number | null>(null);

  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 1,
    longitudeDelta: 1,
  }), []);

  const coordinates = [
    { latitude: 46.20738751546706, longitude: 6.155891756231 },
    { latitude: 46.25738751546706, longitude: 6.185891756231 },
    { latitude: 46.28738751546706, longitude: 6.2091756231 },
  ];

  return (
    <>
      <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
        <AnnotationCluster
          clusterIdenfier={clusteringIdentifier}
        >

          {
          coordinates.map(({ latitude, longitude }, index) => (
            <Marker
              latitude={latitude}
              longitude={longitude}
              title={`Marker #${index + 1}`}
              selected={selected === index + 1}
              onSelect={() => setSelected(index + 1)}
              onDeselect={() => setSelected(null)}
              collisionMode="Circle"
              displayPriority={750}
              key={index}
            />
          ))
        }
        </AnnotationCluster>
      </Map>

      <div className="map-overlay">
        <div className="map-overlay-box">
          <p>{selected ? `Selected marker #${selected}` : 'Not selected'}</p>
        </div>
      </div>
    </>
  );
};

MarkerClustering.storyName = 'Clustering three markers into one';

function CustomCalloutElement({
  title,
  subtitle,
  url,
}: {
  title: string;
  subtitle: string;
  url: string;
}) {
  return (
    <div className="landmark">
      <h1>{title ?? ''}</h1>
      <section>
        <p>{subtitle ?? ''}</p>
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            Website
          </a>
        </p>
      </section>
    </div>
  );
}

export const CustomMarkerCallout = () => {
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 0.007,
      longitudeDelta: 0.015,
    }),
    [],
  );

  return (
    <Map token={token} initialRegion={initialRegion}>
      <Marker
        latitude={46.20738751546706}
        longitude={6.155891756231}
        title="Jet d’eau"
        subtitle="Iconic landmark of Geneva"
        calloutElement={(
          <CustomCalloutElement
            title="Jet d’eau"
            subtitle="Iconic landmark of Geneva"
            url="https://en.wikipedia.org/wiki/Jet_d%27Eau"
          />
        )}
        calloutEnabled
        calloutOffsetX={-148}
        calloutOffsetY={-78}
      />
    </Map>
  );
};
CustomMarkerCallout.storyName = 'Marker with custom callout element';

function CustomCalloutContent({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="custom-annotation-content">
      <h2>{title ?? ''}</h2>
      <p>{subtitle ?? ''}</p>
    </div>
  );
}

function CustomCalloutLeftAccessory({ src }: { src: string }) {
  return (
    <div className="custom-annotation-image">
      <img src={src} alt="" />
    </div>
  );
}

function CustomCalloutRightAccessory({ url }: { url: string }) {
  return (
    <div className="custom-annotation-info">
      <a href={url} target="_blank" rel="noreferrer" aria-label="Learn more">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          stroke="#333"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" />
          <line x1="10" y1="9" x2="10" y2="15" />
          <circle cx="10" cy="5" r="0.1" />
        </svg>
      </a>
    </div>
  );
}

export const CustomMarkerCalloutContent = () => {
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 0.007,
      longitudeDelta: 0.015,
    }),
    [],
  );

  return (
    <Map token={token} initialRegion={initialRegion}>
      <Marker
        latitude={46.20738751546706}
        longitude={6.155891756231}
        title="Jet d’eau"
        subtitle="Iconic landmark of Geneva"
        calloutContent={(
          <CustomCalloutContent
            title="Jet d’eau"
            subtitle="Iconic landmark of Geneva"
          />
        )}
        calloutLeftAccessory={
          <CustomCalloutLeftAccessory src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Le_jet_d-eau_de_Genève.jpg/480px-Le_jet_d-eau_de_Genève.jpg" />
        }
        calloutRightAccessory={
          <CustomCalloutRightAccessory url="https://en.wikipedia.org/wiki/Jet_d%27Eau" />
        }
        calloutEnabled
      />
    </Map>
  );
};
CustomMarkerCalloutContent.storyName = 'Marker with custom callout content';
