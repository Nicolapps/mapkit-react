import {
  ColorScheme, MapType, Distances, LoadPriority, CoordinateRegion,
} from '../util/parameters';

/**
 * The details of an event caused by taps on the map.
 */
export interface MapInteractionEvent {
  /**
   * A DOM point with the coordinates (x, y) of the event on the page.
   */
  readonly pointOnPage: { x: number, y: number };

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
  toCoordinates(): { latitude: number, longitude: number };
}

export default interface MapProps {
  /**
   * The token provided by MapKit JS.
   */
  token: string;

  /**
   * The map’s color scheme when displaying standard or muted standard map types.
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
}
