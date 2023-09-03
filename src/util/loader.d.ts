/**
 * Loads the MapKit JS API with the given token.
 *
 * If the library is already loaded or loading, this function will not attempt
 * to load it a second time.
 *
 * @param token The MapKit JS token
 * @returns A promise resolving when the library is loaded.
 */
export default function load(token: string): Promise<void>;
