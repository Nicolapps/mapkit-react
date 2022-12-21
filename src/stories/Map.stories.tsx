import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Map from '../components/Map';

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
