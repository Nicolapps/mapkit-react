import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Map from '../components/Map';

export default {
  component: Map,
  args: {
    token: process.env.STORYBOOK_MAPKIT_JS_TOKEN,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Map>;

type MapProps = React.ComponentProps<typeof Map>;

function Template(args: MapProps) {
  return <Map {...args} />;
}

export const Empty = Template.bind({});
