/**
 * Color schemes of the map.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/colorschemes}
 */
export declare enum ColorScheme {
    Light = 0,
    Dark = 1,
    Auto = 2
}
/**
 * Converts a mapkit-react color scheme value to a MapKit JS color scheme value.
 * Must be called after MapKit JS is loaded.
 * @param colorScheme The mapkit-react color scheme value (ColorScheme.Dark / ColorScheme.Light)
 * or ColorScheme.Auto for dynamic color based on the color preference of the user
 * @param isDarkMode The user’s color preference (used for ColorScheme.Auto)
 * @returns The MapKit JS color scheme value
 */
export declare function toMapKitColorScheme(colorScheme: ColorScheme, isDarkMode: boolean): string;
/**
 * Types of map to display.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes}
 */
export declare enum MapType {
    /**
     * A street map that shows the position of all roads and some road names.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/standard}
     */
    Standard = 0,
    /**
     * A street map where your data is emphasized over the underlying map details.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/mutedstandard}
     */
    MutedStandard = 1,
    /**
     * A satellite image of the area with road and road name information
     * layered on top.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/hybrid}
     */
    Hybrid = 2,
    /**
     * A satellite image of the area.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/maptypes/satellite}
     */
    Satellite = 3
}
/**
 * Converts a mapkit-react map type value to a MapKit JS map type value.
 * Must be called after MapKit JS is loaded.
 * @param mapType The mapkit-react map type value
 * @returns The MapKit JS map type value
 */
export declare function toMapKitMapType(mapType: MapType): string;
/**
 * Converts a MapKit JS region value to a mapkit-react region value.
 * @param region The MapKit JS region value
 * @returns The mapkit-react region value
 */
export declare function fromMapKitRegion(region: mapkit.CoordinateRegion): CoordinateRegion;
/**
 * Converts a MapKit JS map type value to a mapkit-react map type value.
 * Must be called after MapKit JS is loaded.
 * @param mapType The MapKit JS map type value
 * @returns The mapkit-react map type value
 */
export declare function fromMapKitMapType(mapType: string): MapType;
/**
 * System of measurement that displays on the map.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/map/distances}
 */
export declare enum Distances {
    /**
     * The measurement system is adaptive, and determined based on the map's language.
     */
    Adaptive = 0,
    Metric = 1,
    Imperial = 2
}
/**
 * Converts a mapkit-react map distances to a MapKit JS map distances.
 * Must be called after MapKit JS is loaded.
 * @param distances The mapkit-react map distances
 * @returns The MapKit JS map distances
 */
export declare function toMapKitDistances(distances: Distances): string;
/**
 * A value MapKit JS uses for prioritizing the visibility of specific map features
 * before the underlaying map tiles.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/mapconstructoroptions/4096368-loadpriority}
 */
export declare enum LoadPriority {
    /**
     * Prioritizes loading of the map land cover and borders, without POIs or labels.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/loadpriorities/landcover}
     */
    LandCover = 0,
    /**
     * Prioritizes loading of the full standard map, with rendered POIs.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/loadpriorities/pointsofinterest}
     */
    PointsOfInterest = 1,
    /**
     * Signifies no preferences over what to prioritize when loading the map.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/map/loadpriorities/none}
     */
    None = 2
}
/**
 * Converts a mapkit-react load priority to a MapKit JS load priority.
 * Must be called after MapKit JS is loaded.
 * @param mapPriority The mapkit-react load priority
 * @returns The MapKit JS load priority
 */
export declare function toMapKitLoadPriority(loadPriority: LoadPriority): string | null;
/**
 * A value MapKit JS uses for prioritizing the visibility of specific annotations.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/2991165-displaypriority}
 */
export declare enum DisplayPriority {
    Low = "low",
    High = "high",
    Required = "required"
}
/**
 * Converts a mapkit-react display priority to a MapKit JS display priority.
 * Must be called after MapKit JS is loaded.
 * @param displayPriority The mapkit-react display priority or a number 0 to 1000
 * @returns The MapKit JS display priority
 */
export declare function toMapKitDisplayPriority(displayPriority: DisplayPriority | number): number | null;
/**
 * Constants indicating the visibility of different adaptive map features.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility}
 */
export declare enum FeatureVisibility {
    /**
     * A constant indicating that the feature is always hidden.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility/hidden}
     */
    Hidden = 0,
    /**
     * A constant indicating that the feature is always visible.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility/visible}
     */
    Visible = 1,
    /**
     * A constant indicating that feature visibility adapts to the current map state.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/featurevisibility/adaptive}
     */
    Adaptive = 2
}
/**
 * Converts a mapkit-react visibility to a MapKit JS visibility.
 * Must be called after MapKit JS is loaded.
 * @param featureVisibility The mapkit-react visibility
 * @returns The MapKit JS visibility
 */
export declare function toMapKitFeatureVisibility(featureVisibility: FeatureVisibility): string;
/**
 * Point-of-interest categories.
 * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/pointofinterestcategory}
 */
export declare enum PointOfInterestCategory {
    Airport = 0,
    AmusementPark = 1,
    Aquarium = 2,
    ATM = 3,
    Bakery = 4,
    Bank = 5,
    Beach = 6,
    Brewery = 7,
    Cafe = 8,
    Campground = 9,
    CarRental = 10,
    EVCharger = 11,
    FireStation = 12,
    FitnessCenter = 13,
    FoodMarket = 14,
    GasStation = 15,
    Hospital = 16,
    Hotel = 17,
    Laundry = 18,
    Library = 19,
    Marina = 20,
    MovieTheater = 21,
    Museum = 22,
    NationalPark = 23,
    Nightlife = 24,
    Park = 25,
    Parking = 26,
    Pharmacy = 27,
    Police = 28,
    PostOffice = 29,
    PublicTransport = 30,
    Restaurant = 31,
    Restroom = 32,
    School = 33,
    Stadium = 34,
    Store = 35,
    Theater = 36,
    University = 37,
    Winery = 38,
    Zoo = 39
}
/**
 * Converts a mapkit-react POI category value to a MapKit JS POI category value.
 * Must be called after MapKit JS is loaded.
 * @param category The mapkit-react point of interest category value
 * @returns The MapKit JS point of interest category value
 */
export declare function toMapKitPOICategory(category: PointOfInterestCategory): mapkit.PointOfInterestCategory;
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
export declare function toMapKitCoordinateRegion(region: CoordinateRegion): mapkit.CoordinateRegion;
