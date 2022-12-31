import { FeatureVisibility } from '../util/parameters';

export default interface MarkerProps {
  /**
   * The latitude in degrees.
   */
  latitude: number;

  /**
   * The longitude in degrees.
   */
  longitude: number;

  /**
   * The text to display in the annotation’s callout.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/annotation/2973835-title}
   */
  title?: string;

  /**
   * The text to display as a subtitle on the second line of an annotation’s callout.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/annotation/2973834-subtitle}
   */
  subtitle?: string;

  /**
   * Accessibility text for the annotation.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/annotation/2973814-accessibilitylabel}
   */
  accessibilityLabel?: string | null;

  /**
   * A value that determines the behavior of the subtitle’s visibility.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/3009407-subtitlevisibility}
   */
  subtitleVisibility?: FeatureVisibility;

  /**
   * A value that determines the behavior of the title’s visibility.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/3009408-titlevisibility}
   */
  titleVisibility?: FeatureVisibility;

  /**
   * The background color of the balloon.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973987-color}
   */
  color?: string;

  /**
   * The fill color of the glyph.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973988-glyphcolor}
   */
  glyphColor?: string;

  /**
   * The text to display in the marker balloon.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2978331-glyphtext}
   */
  glyphText?: string;

  /**
   * The image to display in the marker balloon.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973989-glyphimage}
   */
  glyphImage?: object | null;

  /**
   * The image to display in the balloon when the user selects the marker.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973991-selectedglyphimage}
   */
  selectedGlyphImage?: object | undefined;

  /**
   * A Boolean value that determines whether the map displays the annotation in a selected state.
   */
  selected?: boolean;

  /**
   * Event fired when the marker is selected.
   */
  onSelect?: () => void;

  /**
   * Event fired when the marker is deselected.
   */
  onDeselect?: () => void;
}
