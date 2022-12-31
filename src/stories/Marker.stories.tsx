import React, { useMemo } from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Map from '../components/Map';
import Marker from '../components/Marker';
import { CoordinateRegion, FeatureVisibility } from '../util/parameters';

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
    <Map token={process.env.STORYBOOK_MAPKIT_JS_TOKEN!} initialRegion={initialRegion}>
      <Marker {...args} />
    </Map>
  );
};

export const Default = Template.bind({});
Default.args = { latitude: 46.52, longitude: 6.57 };
