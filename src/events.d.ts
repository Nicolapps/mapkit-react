import { Coordinate } from './util/parameters';
/**
 * The details of an event caused by taps on the map.
 */
export interface MapInteractionEvent {
    /**
     * A DOM point with the coordinates (x, y) of the event on the page.
     */
    readonly pointOnPage: {
        x: number;
        y: number;
    };
    /**
     * An array of DOM event objects listing the pertinent low-level events that
     * led to the recognized gesture. You can inspect these and tailor the code to
     * react according to the additional low-level events, such as modifier keys
     * for the events.
     */
    readonly domEvents: Event[];
    /**
     * Gets the map coordinates of the event’s location.
     */
    toCoordinates(): Coordinate;
}
/**
 * Event sent when `showsUserLocation` is true and the map acquires the user’s
 * location, or after an automatic update.
 */
export interface UserLocationChangeEvent {
    /**
     * The current location of the user.
     */
    coordinate: Coordinate;
    /**
     * The time corresponding to the location acquisition.
     */
    timestamp: Date;
    /**
     * A value indicating the current floor number of the user (either a number
     * or undefined), or null if the browser doesn’t expose ths property.
     */
    floorLevel: number | undefined | null;
}
/**
 * A code indicating why location acquisition failed.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/handling_map_events#2993302}
 */
export declare enum UserLocationError {
    /**
     * The user refuses permission to obtain location information.
     */
    PERMISSION_DENIED = 1,
    /**
     * The geolocation API returns an error.
     */
    POSITION_UNAVAILABLE = 2,
    /**
     * The operation times out without acquiring the location.
     */
    TIMEOUT = 3,
    /**
     * The system hasn’t initialized MapKit JS.
     */
    MAPKIT_NOT_INITIALIZED = 4
}
/**
 * The details of the event emitted when MapKit JS is unable to acquire
 * the user's location.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/handling_map_events#2993302}
 */
export interface UserLocationErrorEvent {
    /**
     * A code indicating why location acquisition failed.
     */
    code: UserLocationError;
    /**
     * A a human-readable string for the developer.
     * This message isn’t for display to the user.
     */
    message: String;
}
