import React from '../../node_modules/react';
import { StoryFn } from '@storybook/react';
import Map from '../components/Map';
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react/dist/types-a5624094").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export default _default;
type MapProps = React.ComponentProps<typeof Map>;
export declare const MapReference: StoryFn<MapProps>;
export declare const OnLoadEvent: {
    (): React.JSX.Element;
    storyName: string;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
    };
};
