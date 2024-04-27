import { ReactNode } from 'react';
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
    size?: {
        width: number;
        height: number;
    };
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
