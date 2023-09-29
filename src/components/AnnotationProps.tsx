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
    * Event fired when the user a drags the annotation.
    */
  onDragging?: (newPosition: Coordinate) => void;

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
   * React children to render inside the annotation.
   */
  children?: React.ReactNode;
}
