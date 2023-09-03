import React from 'react';
import { StoryFn } from '@storybook/react';
import Map from '../components/Map';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export default _default;
declare type MapProps = React.ComponentProps<typeof Map>;
export declare const MapReference: StoryFn<MapProps>;
export declare const OnLoadEvent: {
    (): JSX.Element;
    storyName: string;
    parameters: any;
};
