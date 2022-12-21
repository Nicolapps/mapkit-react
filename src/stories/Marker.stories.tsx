import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Map from '../components/Map';
import Marker from '../components/Marker';

export default {
  title: 'Components/Marker',
  component: Marker,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Marker>;

type MarkerProps = React.ComponentProps<typeof Marker>;

const Template = (args: MarkerProps) => (
  <Map token={process.env.STORYBOOK_MAPKIT_JS_TOKEN!}>
    <Marker {...args} />
  </Map>
);

export const Default = Template.bind({
  latitude: 46.52,
  longitude: 6.57,
});
