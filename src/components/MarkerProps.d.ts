import { ReactNode } from 'react';
import { Coordinate, FeatureVisibility } from '../util/parameters';
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
    selectedGlyphImage?: object | null;
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
     * A Boolean value that determines whether the map displays the marker in a selected state.
     */
    selected?: boolean;
    /**
     * A Boolean value that determines whether the map animates the marker.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973817-animates}
     */
    animates?: boolean;
    /**
     * A CSS animation that runs when the marker appears on the map.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973818-appearanceanimation}
     */
    appearanceAnimation?: string;
    /**
     * A Boolean value that determines whether the user can drag the marker.
     *
     * (Marker needs to be enabled in order to be draggable.)
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973817-animates}
     */
    draggable?: boolean;
    /**
     * A Boolean value that determines whether the annotation responds to user interaction.
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973828-enabled}
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
     * Event fired with the user initiates a drag for the annotation.
     */
    onDragStart?: () => void;
    /**
     * Event fired with the user ends a drag for the annotation.
     */
    onDragEnd?: (newPosition: Coordinate) => void;
    /**
     * Event fired when the user a drags the annotation.
     */
    onDragging?: (newPosition: Coordinate) => void;
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
    collisionMode?: 'Rectangle' | 'Circle' | null;
    /**
     * A numeric hint that the map uses to prioritize how it displays annotations.
     *
     * Is either any number from `0` to `1000`,
     * or a preset value: `"low"` (250), `"high"` (750), or `"required"` (1000).
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973825-displaypriority}
     */
    displayPriority?: number | 'low' | 'high' | 'required';
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
     * Returns an element to use as a custom accessory on the left side of the callout content area.
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991150-calloutleftaccessoryforannotatio}
     */
    calloutLeftAccessory?: ReactNode;
    /**
     * Returns an element to use as a custom accessory on the right side of the callout content area.
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991151-calloutrightaccessoryforannotati}
     */
    calloutRightAccessory?: ReactNode;
    /**
     * Returns custom content for the callout bubble.
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991148-calloutcontentforannotation}
     */
    calloutContent?: ReactNode;
    /**
     * Returns an element representing a custom callout.
     *
     * @see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991148-calloutcontentforannotation}
     */
    calloutElement?: ReactNode;
}
