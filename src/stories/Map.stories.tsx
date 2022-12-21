import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Map from '../components/Map';
import { ColorScheme, MapType } from '../util/parameters';

const token = process.env.STORYBOOK_MAPKIT_JS_TOKEN!;
export default {
  title: 'Components/Map',
  component: Map,
  args: { token },
  parameters: {
    layout: 'fullscreen',
  },
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
