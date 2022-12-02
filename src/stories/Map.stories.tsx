import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Map from '../components/Map';

export default {
  component: Map,
  args: {
    token: process.env.STORYBOOK_MAPKIT_JS_TOKEN,
  },
} as ComponentMeta<typeof Map>;

type MapProps = React.ComponentProps<typeof Map>;

// eslint-disable-next-line
const Template = (args: MapProps) => <Map {...args} />;

export const Empty = Template.bind({});
