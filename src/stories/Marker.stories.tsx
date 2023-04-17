import React, { useId, useMemo, useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Map from '../components/Map';
import Marker from '../components/Marker';
import { CoordinateRegion, FeatureVisibility } from '../util/parameters';

const token = process.env.STORYBOOK_MAPKIT_JS_TOKEN!;

const enumArgType = (e: object) => ({
  options: Object.values(e).filter((x) => typeof x === 'string'),
  mapping: e,
});
export default {
  title: 'Components/Marker',
  component: Marker,
  args: {},
  argTypes: {
    subtitleVisibility: enumArgType(FeatureVisibility),
    titleVisibility: enumArgType(FeatureVisibility),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Marker>;

type MarkerProps = React.ComponentProps<typeof Marker>;

const Template: Story<MarkerProps> = (args) => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55,
  }), []);
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

  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015,
  }), []);

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
        {
          coordinates.map(({ latitude, longitude }, index) => (
            <Marker
              latitude={latitude}
              longitude={longitude}
              title={`Marker #${index + 1}`}
              selected={selected === index + 1}
              onSelect={() => setSelected(index + 1)}
              onDeselect={() => setSelected(null)}
              clusteringIdentifier={clusteringIdentifier}
            />
          ))
        }
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
