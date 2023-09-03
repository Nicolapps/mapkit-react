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
     * React children to render inside the annotation.
     */
    children?: React.ReactNode;
}
