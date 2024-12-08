import React, { useMemo } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import Map from '../components/Map';
import Annotation from '../components/Annotation';
import { CoordinateRegion, FeatureVisibility } from '../util/parameters';

// @ts-ignore
const token = import.meta.env.STORYBOOK_MAPKIT_JS_TOKEN!;

// SVG from https://webkul.github.io/vivid
function CustomMarker() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="-4 0 36 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-125.000000, -643.000000)">
          <g transform="translate(37.000000, 169.000000)">
            <g transform="translate(78.000000, 468.000000)">
              <g transform="translate(10.000000, 6.000000)">
                <path
                  d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
                  id="Shape"
                  fill="#FF6E6E"
                />
                <circle
                  fill="#0C0058"
                  fillRule="nonzero"
                  cx="14"
                  cy="14"
                  r="7"
                />
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
  args: {
    onSelect: fn(),
    onDeselect: fn(),
    onDragStart: fn(),
    onDragEnd: fn(),
    onDragging: fn(),
  },
  argTypes: {
    subtitleVisibility: enumArgType(FeatureVisibility),
    titleVisibility: enumArgType(FeatureVisibility),
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Annotation>;

type MarkerProps = React.ComponentProps<typeof Annotation>;

const Template: StoryFn<MarkerProps> = (args) => {
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
    <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <div className="default-annotation-style">Click me</div>
      </Annotation>
    </Map>
  );
};

export const Default = Template.bind({});
Default.args = {
  latitude: 46.52,
  longitude: 6.57,
  size: { width: 100, height: 24 },
  title: 'Hello World',
};

const CustomMarkerAnnotationTemplate: StoryFn<MarkerProps> = (args) => {
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
    <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <CustomMarker />
      </Annotation>
    </Map>
  );
};

export const CustomMarkerAnnotation = CustomMarkerAnnotationTemplate.bind({});
CustomMarkerAnnotation.args = { latitude: 46.52, longitude: 6.57 };

CustomMarkerAnnotation.storyName = 'Custom Marker Annotation';

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
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 0.007,
      longitudeDelta: 0.015,
    }),
    [],
  );

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

function CustomCalloutElement({
  title,
  subtitle,
  url,
}: {
  title: string;
  subtitle: string;
  url: string;
}) {
  return (
    <div className="landmark">
      <h1>{title ?? ''}</h1>
      <section>
        <p>{subtitle ?? ''}</p>
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            Website
          </a>
        </p>
      </section>
    </div>
  );
}

export const CustomAnnotationCallout = () => {
  const initialRegion: CoordinateRegion = useMemo(
    () => ({
      centerLatitude: 46.20738751546706,
      centerLongitude: 6.155891756231,
      latitudeDelta: 0.007,
      longitudeDelta: 0.015,
    }),
    [],
  );

  return (
    <Map token={token} initialRegion={initialRegion}>
      <Annotation
        latitude={46.20738751546706}
        longitude={6.155891756231}
        title="Jet d’eau"
        subtitle="Iconic landmark of Geneva"
        calloutElement={(
          <CustomCalloutElement
            title="Jet d’eau"
            subtitle="Iconic landmark of Geneva"
            url="https://en.wikipedia.org/wiki/Jet_d%27Eau"
          />
        )}
        calloutEnabled
        calloutOffsetX={-148}
        calloutOffsetY={-82}
      >
        <CustomMarker />
      </Annotation>
    </Map>
  );
};
CustomAnnotationCallout.storyName = 'Annotation with custom callout element';
