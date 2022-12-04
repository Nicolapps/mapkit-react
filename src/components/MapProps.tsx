import {
  ColorScheme, MapType, Distances, LoadPriority,
} from '../util/parameters';

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
}
