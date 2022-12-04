/**
 * Color schemes of the map.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/colorschemes}
 */
export enum ColorScheme { Light, Dark }

/**
 * Converts a mapkit-react color scheme value to a MapKit JS color scheme value.
 * Must be called after MapKit JS is loaded.
 * @param colorScheme The mapkit-react color scheme value
 * @returns The MapKit JS color scheme value
 */
export function toMapKitColorScheme(colorScheme: ColorScheme): string {
  switch (colorScheme) {
    case ColorScheme.Dark:
      return mapkit.Map.ColorSchemes.Dark;
    case ColorScheme.Light:
      return mapkit.Map.ColorSchemes.Light;
    default:
      throw new RangeError('Invalid color scheme');
  }
}

/**
 * Types of map to display.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes}
 */
export enum MapType {
  /**
   * A street map that shows the position of all roads and some road names.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/standard}
   */
  Standard,

  /**
   * A street map where your data is emphasized over the underlying map details.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/mutedstandard}
   */
  MutedStandard,

  /**
   * A satellite image of the area with road and road name information
   * layered on top.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/hybrid}
   */
  Hybrid,

  /**
   * A satellite image of the area.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/satellite}
   */
  Satellite,
}

/**
 * Converts a mapkit-react map type value to a MapKit JS map type value.
 * Must be called after MapKit JS is loaded.
 * @param mapType The mapkit-react map type value
 * @returns The MapKit JS map type value
 */
export function toMapKitMapType(mapType: MapType): string {
  switch (mapType) {
    case MapType.Standard:
      return mapkit.Map.MapTypes.Standard;
    case MapType.MutedStandard:
      return mapkit.Map.MapTypes.MutedStandard;
    case MapType.Hybrid:
      return mapkit.Map.MapTypes.Hybrid;
    case MapType.Satellite:
      return mapkit.Map.MapTypes.Satellite;
    default:
      throw new RangeError('Invalid map type');
  }
}

/**
 * System of measurement that displays on the map.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/distances}
 */
export enum Distances {
  /**
   * The measurement system is adaptive, and determined based on the map's language.
   */
  Adaptive,
  Metric,
  Imperial,
}

/**
 * Converts a mapkit-react map distances to a MapKit JS map distances.
 * Must be called after MapKit JS is loaded.
 * @param distances The mapkit-react map distances
 * @returns The MapKit JS map distances
 */
export function toMapKitDistances(distances: Distances): string {
  switch (distances) {
    case Distances.Adaptive:
      return mapkit.Map.Distances.Adaptive;
    case Distances.Metric:
      return mapkit.Map.Distances.Metric;
    case Distances.Imperial:
      return mapkit.Map.Distances.Imperial;
    default:
      throw new RangeError('Invalid distances value');
  }
}

/**
 * A value MapKit JS uses for prioritizing the visibility of specific map features
 * before the underlaying map tiles.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/4096368-loadpriority}
 */
export enum LoadPriority {
  /**
   * Prioritizes loading of the map land cover and borders, without POIs or labels.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/loadpriorities/landcover}
   */
  LandCover,

  /**
   * Prioritizes loading of the full standard map, with rendered POIs.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/loadpriorities/pointsofinterest}
   */
  PointsOfInterest,

  /**
   * Signifies no preferences over what to prioritize when loading the map.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/map/loadpriorities/none}
   */
  None,
}

/**
 * Converts a mapkit-react load priority to a MapKit JS load priority.
 * Must be called after MapKit JS is loaded.
 * @param mapPriority The mapkit-react load priority
 * @returns The MapKit JS load priority
 */
export function toMapKitLoadPriority(loadPriority: LoadPriority): string | null {
  switch (loadPriority) {
    case LoadPriority.LandCover:
      // @ts-ignore
      return mapkit.Map.LoadPriorities.LandCover;
    case LoadPriority.PointsOfInterest:
      // @ts-ignore
      return mapkit.Map.LoadPriorities.PointsOfInterest;
    case LoadPriority.None:
      // @ts-ignore
      return mapkit.Map.LoadPriorities.None;
    default:
      throw new RangeError('Invalid load priority');
  }
}
