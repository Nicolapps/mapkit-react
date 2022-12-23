import {
  ColorScheme, MapType, Distances, LoadPriority,
} from '../util/parameters';

/**
 * A rectangular geographic region that centers around a latitude and longitude coordinate.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/coordinateregion/2973861-mapkit_coordinateregion}
 */
export interface CoordinateRegion {
  /**
   * The latitude of the center point in degrees.
   */
  centerLatitude: number;

  /**
   * The longitude of the center point in degrees.
   */
  centerLongitude: number;

  /**
   * The amount of north-to-south distance (in degrees) to display for the map
   * region. Unlike longitudinal distances, which vary based on the latitude,
   * one degree of latitude is always approximately 111 km (69 mi.).
   */
  latitudeDelta: number;

  /**
   * The amount of east-to-west distance (in degrees) to display for the map
   * region. The number of kilometers (or miles) that a longitude range spans
   * varies based on the latitude. For example, one degree of longitude spans
   * a distance of approximately 111 km (69 miles mi.) at the equator,
   * approximately 88 km (or 55mi.) at 37º north latitude (the latitude of
   * San Francisco), and shrinks to 0 km (0 mi.) at the poles.
   */
  longitudeDelta: number;
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
   * Called when MapKit JS is initialized and the map forward ref can be used.
   */
  onReady?: () => void;
}
