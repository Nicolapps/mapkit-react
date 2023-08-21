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
   * The desired dimensions of the annotation, in CSS pixels.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973833-size}
   * @example `{width: 100, height: 100}`
   */
  size?: object;

  /**
   * The amount of padding, in CSS pixels, to inset the map from the top edge.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
   */
  paddingTop?: number;

  /**
   * The amount of padding, in CSS pixels, to inset the map from the right edge.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
   */
  paddingRight?: number;

  /**
   * The amount of padding, in CSS pixels, to inset the map from the bottom edge.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
   */
  paddingBottom?: number;

  /**
   * The amount of padding, in CSS pixels, to inset the map from the left edge.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}
   */
  paddingLeft?: number;

  /**
   * An X offset that changes the annotation’s default anchor point.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973816-anchoroffset}
   */
  anchorOffsetX?: number;

  /**
   * An Y offset that changes the annotation’s default anchor point.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973816-anchoroffset}
   */
  anchorOffsetY?: number;

  /**
   * A Boolean value that determines whether the map displays the annotation in a selected state.
   */
  selected?: boolean;

  /**
   * A Boolean value that determines whether the map animates the annotation.
   */
  animates?: boolean;

  /**
   * A CSS animation that runs when the annotation appears on the map.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973818-appearanceanimation}
   */
  appearanceAnimation?: string;

  /**
   * A Boolean value that determines whether the user can drag the annotation.
   */
  draggable?: boolean;

  /**
   * A Boolean value that determines whether the annotation responds to user interaction.
   */
  enabled?: boolean;

  /**
   * A Boolean value that determines whether the annotation is visible or hidden.
   */
  visible?: boolean;

  /**
   * Event fired when the marker is selected.
   */
  onSelect?: () => void;

  /**
   * Event fired when the marker is deselected.
   */
  onDeselect?: () => void;

  /**
 * Event fired with the annotation is drag start.
 */
  onDragStart?: () => void;

  /**
   * Event fired with the annotation is drag end.
   */
  onDragEnd?: () => void;

  /**
  * A shared identifier for all of the member annotations.
  * An annotation needs a clusteringIdentifier to be part of an annotation cluster.
  * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotations/clustering_annotations}
  */
  clusteringIdentifier?: string | null;

  /**
   * A mode that determines the shape of the collision frame.
   * Rectangle | Circle | None
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973822-collisionmode}
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/collisionmode}
   */
  collisionMode?: string | null;

  /**
   * A numeric hint that the map uses to prioritize how it displays annotations.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973825-displaypriority}
   */
  displayPriority?: number;

  /**
     * Data that you define that’s specific to an annotation.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973824-data}
     */
  data?: object;

  /**
   * An X offset that changes the annotation callout’s default placement.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973821-calloutoffset}
   */
  calloutOffsetX?: number;

  /**
   * An Y offset that changes the annotation callout’s default placement.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973821-calloutoffset}
   */
  calloutOffsetY?: number;

  /**
   * A Boolean value that determines whether the map shows an annotation’s callout.
   * If the title is empty, the framework can’t show the standard callout even if property is true.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973820-calloutenabled}
   */
  calloutEnabled?: boolean;

  /**
   * A delegate that enables you to customize the annotation’s callout.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973819-callout}
   */
  callout?: object;
}
