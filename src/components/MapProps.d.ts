import { MapInteractionEvent, UserLocationChangeEvent, UserLocationErrorEvent } from '../events';
import { ColorScheme, MapType, Distances, LoadPriority, CoordinateRegion, PointOfInterestCategory, FeatureVisibility } from '../util/parameters';
export default interface MapProps {
    /**
     * Custom load method for MapKit JS.
     */
    load?: (token: string) => Promise<void>;
    /**
     * The token provided by MapKit JS.
     */
    token: string;
    /**
     * The map’s color scheme when displaying standard or muted standard map types.
     * Offers the options ColorScheme.Dark, ColorScheme.Light and ColorScheme.Auto.
     * Auto will select automatically the appropriate MapKit color scheme
     * based on the browser preference.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/3122649-colorscheme}
     */
    colorScheme?: ColorScheme;
    /**
     * The type of data that the map displays.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973919-maptype}
     */
    mapType?: MapType;
    /**
     * The system of measurement that displays on the map.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/3122650-distances}
     */
    distances?: Distances;
    /**
     * A value MapKit JS uses for prioritizing the visibility of specific map
     * features before the underlaying map tiles.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/4096373-loadpriority}
     */
    loadPriority?: LoadPriority;
    /**
     * A Boolean value that determines whether the user may rotate the map using
     * the compass control or a rotate gesture.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2991321-isrotationenabled}
     */
    isRotationEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user can cause the map to scroll
     * with a pointing device or with gestures on a touchscreen.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2978329-isscrollenabled}
     */
    isScrollEnabled?: boolean;
    /**
     * A Boolean value that determines whether the user may zoom in and out on the
     * map using pinch gestures or the zoom control.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2978330-iszoomenabled}
     */
    isZoomEnabled?: boolean;
    /**
     * A feature visibility setting that determines when the compass is visible.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2992819-showscompass}
     */
    showsCompass?: FeatureVisibility;
    /**
     * A feature visibility setting that determines when the map displays
     * the map’s scale indicator.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973941-showsscale}
     */
    showsScale?: FeatureVisibility;
    /**
     * A Boolean value that determines whether to display a control that lets
     * users choose the map type.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973939-showsmaptypecontrol}
     */
    showsMapTypeControl?: boolean;
    /**
     * A Boolean value that determines whether to display a control for zooming
     * in and zooming out on a map.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973944-showszoomcontrol}
     */
    showsZoomControl?: boolean;
    /**
     * A Boolean value that determines whether the user location control is visible.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973943-showsuserlocationcontrol}
     */
    showsUserLocationControl?: boolean;
    /**
     * A Boolean value that determines whether the map displays points of interest.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973940-showspointsofinterest}
     */
    showsPointsOfInterest?: boolean;
    /**
     * A Boolean value that determines whether to show the user's location on
     * the map.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973942-showsuserlocation}
     */
    showsUserLocation?: boolean;
    /**
     * A Boolean value that determines whether to center the map on the user's
     * location.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2973948-tracksuserlocation}
     */
    tracksUserLocation?: boolean;
    /**
     * Allows the user to zoom on the map by scrolling. Disabled by default.
     *
     * ⚠️ This feature relies on an undocumented MapKit JS feature. Support is not
     * guaranteed.
     */
    allowWheelToZoom?: boolean;
    /**
     * Include in the map only the given point of interest categories.
     *
     * Can't be used at the same time as excludedPOICategories.
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter/3585975-including}
     */
    includedPOICategories?: PointOfInterestCategory[];
    /**
     * Hide the given point of interest categories from the map.
     *
     * Can't be used at the same time as includedPOICategories.
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestfilter/3585971-excluding}
     */
    excludedPOICategories?: PointOfInterestCategory[];
    /**
     * The amount of padding, in CSS pixels, to inset the map from the top edge.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2977645-padding}
     */
    paddingTop?: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the right edge.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2977645-padding}
     */
    paddingRight?: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2977645-padding}
     */
    paddingBottom?: number;
    /**
     * The amount of padding, in CSS pixels, to inset the map from the left edge.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/2977645-padding}
     */
    paddingLeft?: number;
    /**
     * The initial area that the map is showing.
     * Updates to this property after the map creation will not be reflected.
     */
    initialRegion?: CoordinateRegion;
    /**
     * A constraint of the location of the center of the map.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/3257748-cameraboundary}
     */
    cameraBoundary?: CoordinateRegion;
    /**
     * The minimum allowed distance of the camera from the center of the map in meters.
     */
    minCameraDistance?: number;
    /**
     * The maximum allowed distance of the camera from the center of the map in meters.
     */
    maxCameraDistance?: number;
    /**
     * The map has loaded.
     */
    onLoad?: () => void;
    /**
     * The map’s visible region is about to change.
     */
    onRegionChangeStart?: (currentValue: CoordinateRegion) => void;
    /**
     * The map’s visible region finishes changing.
     */
    onRegionChangeEnd?: (newValue: CoordinateRegion) => void;
    /**
     * A program event or a user interaction causes the map’s type to change.
     */
    onMapTypeChange?: (newValue: MapType) => void;
    /**
     * A single tap occurs on the map outside an annotation or an overlay. If an
     * annotation or an overlay is in a selected state when a single tap occurs,
     * MapKit JS deselects the annotation or the overlay and dispatches a
     * single-tap event.
     */
    onSingleTap?: (event: MapInteractionEvent) => void;
    /**
     * A double tap occurs on the map without zooming the map.
     */
    onDoubleTap?: (event: MapInteractionEvent) => void;
    /**
     * A long press occurs on the map outside an annotation. A long press may be
     * the beginning of a panning or pinching gesture on the map. You can prevent
     * the gesture from starting by calling the preventDefault() method of the
     * event. Annotations need to be draggable to dispatch long-press events.
     */
    onLongPress?: (event: MapInteractionEvent) => void;
    /**
     * The browser's click event.
     */
    onClick?: (event: MapInteractionEvent) => void;
    /**
     * The browser's mouse move event.
     */
    onMouseMove?: (event: MapInteractionEvent) => void;
    /**
     * The browser's mouse down event.
     */
    onMouseDown?: (event: MapInteractionEvent) => void;
    /**
     * The browser's mouse up event.
     */
    onMouseUp?: (event: MapInteractionEvent) => void;
    /**
     * An event sent when `showsUserLocation` is true and the map acquires
     * the user’s location, or after an automatic update.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/handling_map_events#2993302}
     */
    onUserLocationChange?: (event: UserLocationChangeEvent) => void;
    /**
     * An event sent when MapKit JS coudln't acquire the user’s location.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/handling_map_events#2993302}
     */
    onUserLocationError?: (event: UserLocationErrorEvent) => void;
}
