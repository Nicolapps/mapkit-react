import React from 'react';
import { StoryFn } from '@storybook/react';
import Map from '../components/Map';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export default _default;
declare type MapProps = React.ComponentProps<typeof Map>;
export declare const Empty: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export declare const FixedSize: StoryFn<MapProps>;
export declare const CustomizedAppearance: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export declare const RegionLock: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export declare const LiveStateUpdate: {
    (): JSX.Element;
    parameters: any;
};
export declare const MapInteractionEvents: {
    (): JSX.Element;
    parameters: any;
};
export declare const PointOfInterestFilters: {
    (): JSX.Element;
    storyName: string;
    parameters: any;
};
export declare const RegionChangeEvent: {
    (): JSX.Element;
    parameters: any;
};
export declare const CustomLoadFunction: {
    (): JSX.Element;
    storyName: string;
    parameters: any;
};
