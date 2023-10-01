import { Coordinate } from '../util/parameters';

export default interface AnnotationProps {
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
   * Event fired when the annotation is selected.
   */
  onSelect?: () => void;

  /**
   * Event fired when the annotation is deselected.
   */
  onDeselect?: () => void;

  /**
   * Event fired when the user starts a drag for the annotation.
   */
  onDragStart?: () => void;

  /**
   * Event fired when the user ends a drag for the annotation.
   */
  onDragEnd?: (newPosition: Coordinate) => void;

  /**
   * A Boolean value that determines whether the map animates the annotation.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973817-animates}
   */
  animates?: boolean;

  /**
   * A CSS animation that runs when the annotation appears on the map.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973818-appearanceanimation}
   */
  appearanceAnimation?: string;

  /**
   * A Boolean value that determines whether the user can drag the annotation.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973826-draggable}
   */
  draggable?: boolean;

  /**
   * A Boolean value that determines whether the annotation responds to user interaction.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973828-enabled}
   */
  enabled?: boolean;

  /**
   * A Boolean value that determines whether the annotation is visible or hidden.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationconstructoroptions/2991172-visible}
   */
  visible?: boolean;

  /**
   * React children to render inside the annotation.
   */
  children?: React.ReactNode;

  /**
   * A shared identifier for all of the member annotations.
   * An annotation needs a clusteringIdentifier to be part of an annotation cluster.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotations/clustering_annotations}
   */
  clusteringIdentifier?: string | null
}
