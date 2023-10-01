/**
 * Forwards a given MapKit JS event to a mapkit-react event.
 * @param element The current map | marker | annotation instance
 * @param name The name of the MapKit JS event.
 * @param handler The event handler of the mapkit-react Map component
 * @param eventMap A function that transforms the parameter of the
 *                 MapKit JS event handler to a parameter for the
 *                 mapkit-react event handler.
 */
export default function forwardMapkitEvent<E>(element: mapkit.Map | mapkit.Annotation | mapkit.MarkerAnnotation | null, name: String, handler: ((mapkitReactEvent: E) => void) | undefined, eventMap: (mapkitEvent: any) => E): void;
