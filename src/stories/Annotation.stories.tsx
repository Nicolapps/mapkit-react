import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Map from '../components/Map';
import Annotation from '../components/Annotation';

export default {
  component: Annotation,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Annotation>;

type AnnotationProps = React.ComponentProps<typeof Annotation>;

function Template(args: AnnotationProps) {
  return (
    <Map token={process.env.STORYBOOK_MAPKIT_JS_TOKEN!}>
      <Annotation {...args} />
    </Map>
  );
}

export const Default = Template.bind({
  latitude: 46.52,
  longitude: 6.57,
});
