import React, { useMemo } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Map from '../components/Map';
import Annotation from '../components/Annotation';
import { CoordinateRegion, FeatureVisibility } from '../util/parameters';

const token = process.env.STORYBOOK_MAPKIT_JS_TOKEN!;

// SVG from https://webkul.github.io/vivid
function CustomMarker() {
  return (
    <svg width="24px" height="24px" viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-125.000000, -643.000000)">
          <g transform="translate(37.000000, 169.000000)">
            <g transform="translate(78.000000, 468.000000)">
              <g transform="translate(10.000000, 6.000000)">
                <path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#FF6E6E" />
                <circle fill="#0C0058" fillRule="nonzero" cx="14" cy="14" r="7" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const enumArgType = (e: object) => ({
  options: Object.values(e).filter((x) => typeof x === 'string'),
  mapping: e,
});
export default {
  title: 'Components/Annotation',
  component: Annotation,
  args: {},
  argTypes: {
    subtitleVisibility: enumArgType(FeatureVisibility),
    titleVisibility: enumArgType(FeatureVisibility),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Annotation>;

type MarkerProps = React.ComponentProps<typeof Annotation>;

const Template: Story<MarkerProps> = (args) => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55,
  }), []);
  return (
    <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <CustomMarker />
      </Annotation>
    </Map>
  );
};

export const Default = Template.bind({});
Default.args = { latitude: 46.52, longitude: 6.57 };

export const MoveableAnnotation = Template.bind({});
MoveableAnnotation.args = {
  latitude: 46.52,
  longitude: 6.57,
  title: 'Tap and hold to move',
  draggable: true,
  enabled: true,
};

MoveableAnnotation.storyName = 'Moveable Annotation';

export const AnimatedAnnotation = () => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015,
  }), []);

  return (
    <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
      <Annotation
        latitude={46.20738751546706}
        longitude={6.155891756231}
        title="Tap and hold to move"
        animates
        appearanceAnimation="gelatine 0.5s infinite"
      >
        <CustomMarker />
      </Annotation>
    </Map>
  );
};

AnimatedAnnotation.storyName = 'Animated Annotation';
