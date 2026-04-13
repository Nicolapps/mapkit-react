import { Coordinate } from '../util/parameters';

export default interface CircleProps {
  /**
   * The coordinate of the circle overlay’s center.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/circleoverlay/coordinate}
   */
  coordinate: Coordinate;

  /**
   * The radius of the circle overlay, in meters.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/circleoverlay/radius}
   */
  radius: number;

  /**
   * A Boolean value that determines whether the circle is visible.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/visible}
   */
  visible?: boolean;

  /**
   * A Boolean value that determines whether the circle responds to user interaction.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/enabled}
   */
  enabled?: boolean;

  /**
   * A Boolean value that determines whether the map displays the circle in a selected state.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/selected}
   */
  selected?: boolean;

  /**
   * Event fired when the circle is selected.
   */
  onSelect?: () => void;

  /**
   * Event fired when the circle is deselected.
   */
  onDeselect?: () => void;

  /**
   * The stroke color of the line. Accepts any valid CSS color value.
   * The default is `rgb(0, 122, 255)`.
   * Set this to `null` to remove the line stroke.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/strokeColor}
   */
  strokeColor?: string | null;

  /**
   * The opacity of the stroke as a number between 0 and 1.
   * The default value is `1`.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/strokeOpacity}
   */
  strokeOpacity?: number;

  /**
   * The line width of the stroke for overlays, in CSS pixels.
   * The default value is `1`.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/lineWidth}
   */
  lineWidth?: number;

  /**
   * An array defining the line’s dash pattern, where numbers represent line and
   * gap lengths in CSS pixels. For example, `[10, 5]` means draw for 10 pixels
   * and leave a 5‑pixel gap repeatedly. Set to `[]` for solid lines (default).
   * MapKit JS duplicates the array if it has an odd number of elements.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/lineDash}
   */
  lineDash?: number[];

  /**
   * The number of CSS pixels to offset the start of the dash pattern.
   * Has no effect when `lineDash` is set to draw solid lines.
   * The default value is `0`.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/lineDashOffset}
   */
  lineDashOffset?: number;

  /**
   * The fill color used for the shape. Accepts any valid CSS color value.
   * The default is `rgb(0, 122, 255)`.
   * Set this to `null` for no fill.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/fillColor}
   */
  fillColor?: string | null;

  /**
   * The opacity to apply to the fill, as a number between 0 and 1.
   * The default value is `0.1`.
   * @see {@link https://developer.apple.com/documentation/mapkitjs/style/fillOpacity}
   */
  fillOpacity?: number;
}
