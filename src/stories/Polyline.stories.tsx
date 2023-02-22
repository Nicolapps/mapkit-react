import React, { useMemo } from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import Map from '../components/Map';
import Polyline from '../components/Polyline';
import { ColorScheme, CoordinateRegion } from '..';

const token = process.env.STORYBOOK_MAPKIT_JS_TOKEN!;

export default {
  title: 'Components/Polyline',
  component: Polyline,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Polyline>;

type PolylineProps = React.ComponentProps<typeof Polyline>;

const Template: Story<PolylineProps> = (args) => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.52,
    centerLongitude: 6.57,
    latitudeDelta: 0.07,
    longitudeDelta: 0.03,
  }), []);
  return (
    <Map token={token} initialRegion={initialRegion} colorScheme={ColorScheme.Dark}>
      <Polyline {...args} />
    </Map>
  );
};

export const Default = Template.bind({});
Default.args = {
  lineWidth: 5,
  lineDash: [15, 5],
  lineCap: 'butt',

  strokeColor: '#ffcc02',

  points: [
    { longitude: 6.51871, latitude: 46.51821 },
    { longitude: 6.52363, latitude: 46.51768 },
    { longitude: 6.52502, latitude: 46.51755 },
    { longitude: 6.52518, latitude: 46.51749 },
    { longitude: 6.52996, latitude: 46.51664 },
    { longitude: 6.53456, latitude: 46.51569 },
    { longitude: 6.53542, latitude: 46.51545 },
    { longitude: 6.53697, latitude: 46.51509 },
    { longitude: 6.53955, latitude: 46.51428 },
    { longitude: 6.53972, latitude: 46.51427 },
    { longitude: 6.54241, latitude: 46.51354 },
    { longitude: 6.54498, latitude: 46.5133 },
    { longitude: 6.5457, latitude: 46.51331 },
    { longitude: 6.54876, latitude: 46.51371 },
    { longitude: 6.55429, latitude: 46.51383 },
    { longitude: 6.5576, latitude: 46.51401 },
    { longitude: 6.56135, latitude: 46.5155 },
    { longitude: 6.56553, latitude: 46.51701 },
    { longitude: 6.56617, latitude: 46.51706 },
    { longitude: 6.56987, latitude: 46.51739 },
    { longitude: 6.57218, latitude: 46.518 },
    { longitude: 6.57291, latitude: 46.51824 },
    { longitude: 6.5776, latitude: 46.51958 },
    { longitude: 6.58353, latitude: 46.52068 },
    { longitude: 6.58515, latitude: 46.52113 },
    { longitude: 6.59009, latitude: 46.52296 },
    { longitude: 6.59488, latitude: 46.52273 },
    { longitude: 6.59814, latitude: 46.52078 },
    { longitude: 6.60067, latitude: 46.51869 },
    { longitude: 6.60255, latitude: 46.51781 },
    { longitude: 6.60289, latitude: 46.51752 },
    { longitude: 6.60262, latitude: 46.51694 },
    { longitude: 6.60341, latitude: 46.51644 },
    { longitude: 6.60626, latitude: 46.51603 },
    { longitude: 6.61103, latitude: 46.51458 },
    { longitude: 6.61136, latitude: 46.51435 },
    { longitude: 6.61177, latitude: 46.51408 },
    { longitude: 6.61312, latitude: 46.51317 },
    { longitude: 6.61685, latitude: 46.51182 },
    { longitude: 6.61708, latitude: 46.51165 },
    { longitude: 6.62164, latitude: 46.50887 },
    { longitude: 6.62643, latitude: 46.50693 },
  ],
};
