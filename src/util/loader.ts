import { MapKitToken, resolveMapKitToken } from './token';

let loadingPromise: Promise<void> | null = null;

/**
 * Latest token provider. MapKit may re-invoke authorizationCallback during a
 * session, so this must stay up to date after the initial load.
 */
let currentToken: MapKitToken | null = null;

/**
 * Updates the token (or token provider) used by MapKit JS authorization.
 * Safe to call after MapKit has already been initialized.
 */
export function setMapKitToken(token: MapKitToken): void {
  currentToken = token;
}

/**
 * Loads the MapKit JS API with the given token or token provider.
 *
 * If the library is already loaded or loading, this function will not attempt
 * to load it a second time. The token provider is always updated so later
 * MapKit authorization requests use the latest value.
 *
 * @param token The MapKit JS token, or a function that returns one
 * @returns A promise resolving when the library is loaded.
 */
export default function load(token: MapKitToken): Promise<void> {
  setMapKitToken(token);

  if (loadingPromise !== null) {
    return loadingPromise;
  }

  loadingPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.addEventListener('load', () => {
      mapkit.init({
        authorizationCallback: (done) => {
          if (currentToken === null) {
            // eslint-disable-next-line no-console
            console.error('[mapkit-react] No MapKit token has been set');
            return;
          }
          resolveMapKitToken(currentToken)
            .then(done)
            .catch((error) => {
              // MapKit's done() has no error channel
              // eslint-disable-next-line no-console
              console.error('[mapkit-react] Failed to obtain MapKit token', error);
            });
        },
      });

      resolve();
    }, { once: true });
    script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  });
  return loadingPromise;
}
