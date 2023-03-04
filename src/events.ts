import { Coordinate } from './util/parameters';

/**
 * The details of an event caused by taps on the map.
 */
export interface MapInteractionEvent {
  /**
   * A DOM point with the coordinates (x, y) of the event on the page.
   */
  readonly pointOnPage: { x: number, y: number };

  /**
   * An array of DOM event objects listing the pertinent low-level events that
   * led to the recognized gesture. You can inspect these and tailor the code to
   * react according to the additional low-level events, such as modifier keys
   * for the events.
   */
  readonly domEvents: Event[];

  /**
   * Gets the map coordinates of the event’s location.
   */
  toCoordinates(): Coordinate;
}
