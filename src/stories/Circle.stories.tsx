import React, { useMemo } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import './stories.css';
import Map from '../components/Map';
import { CoordinateRegion } from '../util/parameters';
import Circle from '../components/Circle';

// @ts-ignore
const token = import.meta.env.STORYBOOK_MAPKIT_JS_TOKEN!;

export default {
  title: 'Components/Circle',
  component: Circle,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onSelect: fn(),
    onDeselect: fn(),
  },
} as Meta<typeof Circle>;

type CircleProps = React.ComponentProps<typeof Circle>;

const Template: StoryFn<CircleProps> = (args) => {
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
    <Map
      token={token}
      initialRegion={initialRegion}
      minCameraDistance={300}
      includedPOICategories={[]}
    >
      <Circle {...args} />
    </Map>
  );
};

export const Default = Template.bind({});
Default.args = { coordinate: { latitude: 46.52, longitude: 6.57 }, radius: 100000 };
