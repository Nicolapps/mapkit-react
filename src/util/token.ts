/**
 * A MapKit JS authorization token, or a function (sync or async) that returns one.
 *
 * MapKit JS may call the provider throughout a session (not only at init)
 * when it needs a new token. Prefer a short-lived JWT minted by your server;
 * never put your MapKit private key in client-side code.
 *
 * @see {@link https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/authorizationcallback}
 */
export type MapKitToken = string | (() => string | Promise<string>);

/**
 * Resolves a {@link MapKitToken} to a JWT string.
 */
export function resolveMapKitToken(token: MapKitToken): Promise<string> {
  return Promise.resolve(typeof token === 'function' ? token() : token);
}
