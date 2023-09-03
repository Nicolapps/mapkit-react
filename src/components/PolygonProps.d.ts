import { Coordinate } from '../util/parameters';
export default interface PolygonProps {
    /**
     * One or more arrays of coordinates that define the polygon overlay shape.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/polygonoverlay/2974011-points}
     */
    points: Coordinate[] | Coordinate[][];
    /**
     * A Boolean value that determines whether the polygon is visible.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2974002-visible}
     */
    visible?: boolean;
    /**
     * A Boolean value that determines whether the polygon responds to user interaction.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2973997-enabled}
     */
    enabled?: boolean;
    /**
     * A Boolean value that determines whether the map displays the polygon in a selected state.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/overlay/2974000-selected}
     */
    selected?: boolean;
    /**
     * Event fired when the polygon is selected.
     */
    onSelect?: () => void;
    /**
     * Event fired when the polygon is deselected.
     */
    onDeselect?: () => void;
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
    /**
     * The fill color of a shape.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974021-fillcolor}
     */
    fillColor?: string | null;
    /**
     * The opacity of the fill color.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974022-fillopacity}
     */
    fillOpacity?: number;
    /**
     * A rule for determining whether a point is inside or outside a polygon.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/style/2974023-fillrule}
     */
    fillRule?: 'nonzero' | 'evenodd';
}
