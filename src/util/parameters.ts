/**
 * Color schemes of the map.
 */
export enum ColorScheme { Light, Dark }

/**
 * Converts a mapkit-react color scheme value to a MapKit JS color scheme value.
 * Must be called after MapKit JS is loaded.
 * @param colorScheme The mapkit-react color scheme value
 * @returns The MapKit JS color scheme value
 */
export function toMapKitColorScheme(colorScheme: ColorScheme) {
  switch (colorScheme) {
    case ColorScheme.Dark:
      return mapkit.Map.ColorSchemes.Dark;
    case ColorScheme.Light:
      return mapkit.Map.ColorSchemes.Light;
    default:
      throw new RangeError('Invalid color scheme');
  }
}
