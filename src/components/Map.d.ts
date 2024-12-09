import React from '../../node_modules/react';
import MapProps from './MapProps';
declare const Map: React.ForwardRefExoticComponent<MapProps & {
    children?: React.ReactNode;
} & React.RefAttributes<mapkit.Map | null>>;
export default Map;
