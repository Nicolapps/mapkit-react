import { Coordinate } from '../util/parameters';
export default interface PolylineProps {
    /**
     * An array of coordinate points that define the polyline overlay’s shape.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/polylineoverlay/2974014-points}
     */
    points: Coordinate[];
    /**
     * A Boolean value that determines whether the polyline is visible.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2974002-visible}
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the polyline responds to user interaction.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2973997-enabled}
     */
    enabled?: boolean;
    /**
     * A Boolean value that determines whether the map displays the polyline in a selected state.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2974000-selected}
     */
    selected?: boolean;
    /**
     * Event fired when the polyline is selected.
     */
    onSelect?: () => void;
    /**
     * Event fired when the polyline is deselected.
     */
    onDeselect?: () => void;
    /**
     * The style to use when drawing line endings.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974024-linecap}
     */
    lineCap?: 'butt' | 'round' | 'square';
    /**
     * An array of line and gap lengths for creating a dashed line.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974025-linedash}
     */
    lineDash?: number[];
    /**
     * The number of CSS pixels to use as an offset when drawing a line’s dash pattern.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974026-linedashoffset}
     */
    lineDashOffset?: number;
    /**
     * The corner style to apply when joining line segments.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974027-linejoin}
     */
    lineJoin?: 'miter' | 'round' | 'bevel';
    /**
     * The width of a line’s stroke, in CSS pixels.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974028-linewidth}
     */
    lineWidth?: number;
    /**
     * The stroke color of a line.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974030-strokecolor}
     */
    strokeColor?: string;
    /**
     * The opacity of the stroke color.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974031-strokeopacity}
     */
    strokeOpacity?: number;
    /**
     * The unit distance along the line where a stroke begins.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/3586011-strokestart}
     */
    strokeStart?: number;
    /**
     * The unit distance along the line where a stroke ends.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/3586010-strokeend}
     */
    strokeEnd?: number;
}
