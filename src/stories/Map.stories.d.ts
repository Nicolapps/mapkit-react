import React from '../../node_modules/react';
import { StoryFn } from '@storybook/react';
import Map from '../components/Map';
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react/dist/types-a5624094").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export default _default;
type MapProps = React.ComponentProps<typeof Map>;
export declare const Empty: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export declare const FixedSize: StoryFn<MapProps>;
export declare const CustomizedAppearance: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export declare const RegionLock: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, import("..").MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export declare const LiveStateUpdate: {
    (): React.JSX.Element;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
    };
};
export declare const MapInteractionEvents: {
    (): React.JSX.Element;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
    };
};
export declare const PointOfInterestFilters: {
    (): React.JSX.Element;
    storyName: string;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
    };
};
export declare const RegionChangeEvent: {
    (): React.JSX.Element;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
    };
};
export declare const CustomLoadFunction: {
    (): React.JSX.Element;
    storyName: string;
    __docgenInfo: {
        description: string;
        methods: never[];
        displayName: string;
    };
};
