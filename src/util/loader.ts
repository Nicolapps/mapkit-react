let loadingPromise: Promise<void> | null = null;

/**
 * Loads the MapKit JS API with the given token.
 *
 * If the library is already loaded or loading, this function will not attempt
 * to load it a second time.
 *
 * @param token The MapKit JS token
 * @returns A promise resolving when the library is loaded.
 */
export default function load(token: string): Promise<void> {
  if (loadingPromise !== null) {
    return loadingPromise;
  }

  loadingPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.addEventListener('load', () => {
      mapkit.init({
        authorizationCallback: (done) => done(token),
      });

      resolve();
    }, { once: true });
    script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  });
  return loadingPromise;
}
