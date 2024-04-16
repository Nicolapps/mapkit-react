/**
 * Color schemes of the map.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/colorschemes}
 */
export enum ColorScheme { Light, Dark, Auto }

/**
 * Converts a mapkit-react color scheme value to a MapKit JS color scheme value.
 * Must be called after MapKit JS is loaded.
 * @param colorScheme The mapkit-react color scheme value (ColorScheme.Dark / ColorScheme.Light)
 * or ColorScheme.Auto for dynamic color based on the color preference of the user
 * @param isDarkMode The user’s color preference (used for ColorScheme.Auto)
 * @returns The MapKit JS color scheme value
 */
export function toMapKitColorScheme(colorScheme: ColorScheme, isDarkMode: boolean): string {
  switch (colorScheme) {
    case ColorScheme.Dark:
      return mapkit.Map.ColorSchemes.Dark;
    case ColorScheme.Light:
      return mapkit.Map.ColorSchemes.Light;
    case ColorScheme.Auto:
      return isDarkMode
        ? mapkit.Map.ColorSchemes.Dark
        : mapkit.Map.ColorSchemes.Light;
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
 * Converts a MapKit JS region value to a mapkit-react region value.
 * @param region The MapKit JS region value
 * @returns The mapkit-react region value
 */
export function fromMapKitRegion(region: mapkit.CoordinateRegion): CoordinateRegion {
  return {
    centerLatitude: region.center.latitude,
    centerLongitude: region.center.longitude,
    latitudeDelta: region.span.latitudeDelta,
    longitudeDelta: region.span.longitudeDelta,
  };
}

/**
 * Converts a MapKit JS map type value to a mapkit-react map type value.
 * Must be called after MapKit JS is loaded.
 * @param mapType The MapKit JS map type value
 * @returns The mapkit-react map type value
 */
export function fromMapKitMapType(mapType: string): MapType {
  switch (mapType) {
    case mapkit.Map.MapTypes.Standard:
      return MapType.Standard;
    case mapkit.Map.MapTypes.MutedStandard:
      return MapType.MutedStandard;
    case mapkit.Map.MapTypes.Hybrid:
      return MapType.Hybrid;
    case mapkit.Map.MapTypes.Satellite:
      return MapType.Satellite;
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

/**
 * A value MapKit JS uses for prioritizing the visibility of specific annotations.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/2991165-displaypriority}
 */
export enum DisplayPriority {
  Low = 'low',
  High = 'high',
  Required = 'required',
}

/**
 * Converts a mapkit-react display priority to a MapKit JS display priority.
 * Must be called after MapKit JS is loaded.
 * @param displayPriority The mapkit-react display priority or a number 0 to 1000
 * @returns The MapKit JS display priority
 */
export function toMapKitDisplayPriority(displayPriority: DisplayPriority | number): number | null {
  if (typeof displayPriority === 'number') {
    if (displayPriority < 0 || displayPriority > 1000) {
      throw new RangeError('Display priority is out of range (0 to 1000)');
    } else {
      return displayPriority;
    }
  }

  switch (displayPriority) {
    case DisplayPriority.Low:
      // @ts-ignore
      return mapkit.Annotation.DisplayPriority.Low;
    case DisplayPriority.High:
      // @ts-ignore
      return mapkit.Annotation.DisplayPriority.High;
    case DisplayPriority.Required:
      // @ts-ignore
      return mapkit.Annotation.DisplayPriority.Required;
    default:
      throw new RangeError('Invalid display priority');
  }
}

/**
 * Constants indicating the visibility of different adaptive map features.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility}
 */
export enum FeatureVisibility {
  /**
   * A constant indicating that the feature is always hidden.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility/hidden}
   */
  Hidden,

  /**
   * A constant indicating that the feature is always visible.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility/visible}
   */
  Visible,

  /**
   * A constant indicating that feature visibility adapts to the current map state.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility/adaptive}
   */
  Adaptive,
}

/**
 * Converts a mapkit-react visibility to a MapKit JS visibility.
 * Must be called after MapKit JS is loaded.
 * @param featureVisibility The mapkit-react visibility
 * @returns The MapKit JS visibility
 */
export function toMapKitFeatureVisibility(featureVisibility: FeatureVisibility): string {
  switch (featureVisibility) {
    case FeatureVisibility.Adaptive:
      return mapkit.FeatureVisibility.Adaptive;
    case FeatureVisibility.Visible:
      return mapkit.FeatureVisibility.Visible;
    case FeatureVisibility.Hidden:
      return mapkit.FeatureVisibility.Hidden;
    default:
      throw new RangeError('Invalid feature visibility');
  }
}

/**
 * Point-of-interest categories.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory}
 */
export enum PointOfInterestCategory {
  Airport, AmusementPark, Aquarium, ATM, Bakery, Bank, Beach, Brewery, Cafe,
  Campground, CarRental, EVCharger, FireStation, FitnessCenter, FoodMarket,
  GasStation, Hospital, Hotel, Laundry, Library, Marina, MovieTheater, Museum,
  NationalPark, Nightlife, Park, Parking, Pharmacy, Police, PostOffice,
  PublicTransport, Restaurant, Restroom, School, Stadium, Store, Theater,
  University, Winery, Zoo,
}

/**
 * Converts a mapkit-react POI category value to a MapKit JS POI category value.
 * Must be called after MapKit JS is loaded.
 * @param category The mapkit-react point of interest category value
 * @returns The MapKit JS point of interest category value
 */
export function toMapKitPOICategory(category: PointOfInterestCategory):
mapkit.PointOfInterestCategory {
  switch (category) {
    case PointOfInterestCategory.Airport:
      return mapkit.PointOfInterestCategory.Airport;
    case PointOfInterestCategory.AmusementPark:
      return mapkit.PointOfInterestCategory.AmusementPark;
    case PointOfInterestCategory.Aquarium:
      return mapkit.PointOfInterestCategory.Aquarium;
    case PointOfInterestCategory.ATM:
      return mapkit.PointOfInterestCategory.ATM;
    case PointOfInterestCategory.Bakery:
      return mapkit.PointOfInterestCategory.Bakery;
    case PointOfInterestCategory.Bank:
      return mapkit.PointOfInterestCategory.Bank;
    case PointOfInterestCategory.Beach:
      return mapkit.PointOfInterestCategory.Beach;
    case PointOfInterestCategory.Brewery:
      return mapkit.PointOfInterestCategory.Brewery;
    case PointOfInterestCategory.Cafe:
      return mapkit.PointOfInterestCategory.Cafe;
    case PointOfInterestCategory.Campground:
      return mapkit.PointOfInterestCategory.Campground;
    case PointOfInterestCategory.CarRental:
      return mapkit.PointOfInterestCategory.CarRental;
    case PointOfInterestCategory.EVCharger:
      return mapkit.PointOfInterestCategory.EVCharger;
    case PointOfInterestCategory.FireStation:
      return mapkit.PointOfInterestCategory.FireStation;
    case PointOfInterestCategory.FitnessCenter:
      return mapkit.PointOfInterestCategory.FitnessCenter;
    case PointOfInterestCategory.FoodMarket:
      return mapkit.PointOfInterestCategory.FoodMarket;
    case PointOfInterestCategory.GasStation:
      return mapkit.PointOfInterestCategory.GasStation;
    case PointOfInterestCategory.Hospital:
      return mapkit.PointOfInterestCategory.Hospital;
    case PointOfInterestCategory.Hotel:
      return mapkit.PointOfInterestCategory.Hotel;
    case PointOfInterestCategory.Laundry:
      return mapkit.PointOfInterestCategory.Laundry;
    case PointOfInterestCategory.Library:
      return mapkit.PointOfInterestCategory.Library;
    case PointOfInterestCategory.Marina:
      return mapkit.PointOfInterestCategory.Marina;
    case PointOfInterestCategory.MovieTheater:
      return mapkit.PointOfInterestCategory.MovieTheater;
    case PointOfInterestCategory.Museum:
      return mapkit.PointOfInterestCategory.Museum;
    case PointOfInterestCategory.NationalPark:
      return mapkit.PointOfInterestCategory.NationalPark;
    case PointOfInterestCategory.Nightlife:
      return mapkit.PointOfInterestCategory.Nightlife;
    case PointOfInterestCategory.Park:
      return mapkit.PointOfInterestCategory.Park;
    case PointOfInterestCategory.Parking:
      return mapkit.PointOfInterestCategory.Parking;
    case PointOfInterestCategory.Pharmacy:
      return mapkit.PointOfInterestCategory.Pharmacy;
    case PointOfInterestCategory.Police:
      return mapkit.PointOfInterestCategory.Police;
    case PointOfInterestCategory.PostOffice:
      return mapkit.PointOfInterestCategory.PostOffice;
    case PointOfInterestCategory.PublicTransport:
      return mapkit.PointOfInterestCategory.PublicTransport;
    case PointOfInterestCategory.Restaurant:
      return mapkit.PointOfInterestCategory.Restaurant;
    case PointOfInterestCategory.Restroom:
      return mapkit.PointOfInterestCategory.Restroom;
    case PointOfInterestCategory.School:
      return mapkit.PointOfInterestCategory.School;
    case PointOfInterestCategory.Stadium:
      return mapkit.PointOfInterestCategory.Stadium;
    case PointOfInterestCategory.Store:
      return mapkit.PointOfInterestCategory.Store;
    case PointOfInterestCategory.Theater:
      return mapkit.PointOfInterestCategory.Theater;
    case PointOfInterestCategory.University:
      return mapkit.PointOfInterestCategory.University;
    case PointOfInterestCategory.Winery:
      return mapkit.PointOfInterestCategory.Winery;
    case PointOfInterestCategory.Zoo:
      return mapkit.PointOfInterestCategory.Zoo;
    default:
      throw new RangeError('Invalid point of interest category');
  }
}

/**
 * A point on the Earth’s surface.
 */
export interface Coordinate {
  /**
   * The latitude in degrees.
   */
  latitude: number;

  /**
   * The longitude in degrees.
   */
  longitude: number;
}

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

/**
 * Converts a mapkit-react coordinate region to a MapKit JS coordinate region.
 * Must be called after MapKit JS is loaded.
 * @param region The mapkit-react coordinate region
 * @returns The MapKit JS coordinate region
 */
export function toMapKitCoordinateRegion(region: CoordinateRegion) : mapkit.CoordinateRegion {
  return new mapkit.CoordinateRegion(
    new mapkit.Coordinate(region.centerLatitude, region.centerLongitude),
    new mapkit.CoordinateSpan(region.latitudeDelta, region.longitudeDelta),
  );
}
