import React, {
  useState, useEffect, useRef, useImperativeHandle,
} from 'react';
import MapContext from '../context/MapContext';
import load from '../util/loader';
import {
  ColorScheme, Distances, FeatureVisibility, LoadPriority, MapType,
  fromMapKitMapType,
  toMapKitColorScheme, toMapKitCoordinateRegion, toMapKitDistances,
  toMapKitLoadPriority, toMapKitMapType, toMapKitPOICategory,
  toMapKitFeatureVisibility, fromMapKitRegion,
} from '../util/parameters';
import MapProps from './MapProps';
import forwardMapkitEvent from '../util/forwardMapkitEvent';

const Map = React.forwardRef<mapkit.Map | null, React.PropsWithChildren<MapProps>>(({
  children = undefined,

  load: customLoad,
  token,

  colorScheme = ColorScheme.Light,
  mapType = MapType.Standard,
  distances = Distances.Adaptive,
  loadPriority = LoadPriority.LandCover,

  isRotationEnabled = true,
  isScrollEnabled = true,
  isZoomEnabled = true,
  showsCompass = FeatureVisibility.Adaptive,
  showsScale = FeatureVisibility.Hidden,
  showsMapTypeControl = true,
  showsZoomControl = true,
  showsUserLocationControl = false,
  showsPointsOfInterest = true,
  showsUserLocation = false,
  tracksUserLocation = false,
  allowWheelToZoom = false,

  includedPOICategories = undefined,
  excludedPOICategories = undefined,

  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,

  initialRegion = undefined,
  cameraBoundary = undefined,
  cameraDistance = undefined,
  minCameraDistance = 0,
  maxCameraDistance = Infinity,

  center = undefined,
  region = undefined,
  rotation = undefined,
  visibleMapRect = undefined,
  regionUpdateAnimates = true,

  onLoad = undefined,

  onRegionChangeStart = undefined,
  onRegionChangeEnd = undefined,
  onMapTypeChange = undefined,

  onSingleTap = undefined,
  onDoubleTap = undefined,
  onLongPress = undefined,

  onUserLocationChange = undefined,
  onUserLocationError = undefined,

  onClick = undefined,
  onMouseMove = undefined,
  onMouseDown = undefined,
  onMouseUp = undefined,
}, mapRef) => {
  const [map, setMap] = useState<mapkit.Map | null>(null);
  const element = useRef<HTMLDivElement>(null);
  const exists = useRef<boolean>(false);

  // Load the map
  useEffect(() => {
    const loadMap = typeof customLoad === 'function' ? customLoad : load;
    loadMap(token).then(() => {
      if (exists.current) return;
      const options = {};
      if (initialRegion) { // FIXME: legacy fallback
        // @ts-ignore
        options.region = toMapKitCoordinateRegion(initialRegion);
      } else if (region) {
        // @ts-ignore
        options.region = toMapKitCoordinateRegion(region);
      }
      if (visibleMapRect) {
        if (!visibleMapRect.x || !visibleMapRect.y || !visibleMapRect.width
          || !visibleMapRect.height) {
          throw new Error('Visible map rects has to include x, y, width and height');
        }
        // @ts-ignore
        options.visibleMapRect = new mapkit.MapRect(
          visibleMapRect.x,
          visibleMapRect.y,
          visibleMapRect.width,
          visibleMapRect.height,
        );
      }
      if (center) {
        // @ts-ignore
        options.center = center;
      }
      if (rotation) {
        // @ts-ignore
        options.rotation = rotation;
      }
      setMap(new mapkit.Map(element.current!, options));
      exists.current = true;
    });

    return () => {
      if (map) {
        map.destroy();
        exists.current = false;
      }
    };
  }, []);

  // Fire the `onLoad` event
  useEffect(() => {
    if (map !== null) {
      onLoad?.();
    }
  }, [map]);

  // Expose the map using a forward ref
  useImperativeHandle(mapRef, () => map!, [map]);

  // Enum properties
  useEffect(() => {
    if (!map) return;
    map.colorScheme = toMapKitColorScheme(colorScheme);
  }, [map, colorScheme]);
  useEffect(() => {
    if (!map) return;
    map.mapType = toMapKitMapType(mapType);
  }, [map, mapType]);
  useEffect(() => {
    if (!map) return;
    map.distances = toMapKitDistances(distances);
  }, [map, distances]);
  useEffect(() => {
    if (!map) return;
    // @ts-ignore
    map.loadPriority = toMapKitLoadPriority(loadPriority);
  }, [map, loadPriority]);

  // Simple values properties
  const booleanProperties = {
    isRotationEnabled,
    isScrollEnabled,
    isZoomEnabled,
    showsMapTypeControl,
    showsZoomControl,
    showsUserLocationControl,
    showsPointsOfInterest,
    showsUserLocation,
    tracksUserLocation,
  };
  Object.entries(booleanProperties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!map) return;
      // @ts-ignore
      map[propertyName] = prop;
    }, [map, prop]);
  });

  // Feature visibility properties
  const featureVisibilityProperties = {
    showsCompass,
    showsScale,
  };
  Object.entries(featureVisibilityProperties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!map) return;
      // @ts-ignore
      map[propertyName] = toMapKitFeatureVisibility(prop);
    }, [map, prop]);
  });

  // Experimental feature
  useEffect(() => {
    if (!map) return;
    try {
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      map._allowWheelToZoom = allowWheelToZoom;
    } catch { /* ignore errors */ }
  }, [map, allowWheelToZoom]);

  // Padding
  useEffect(() => {
    if (!map) return;
    map.padding = new mapkit.Padding(paddingTop, paddingRight, paddingBottom, paddingLeft);
  }, [map, paddingTop, paddingRight, paddingBottom, paddingLeft]);

  // Camera boundary
  useEffect(() => {
    if (!map) return;
    // @ts-ignore
    map.cameraBoundary = cameraBoundary ? toMapKitCoordinateRegion(cameraBoundary) : null;
  }, [map, cameraBoundary]);

  // Camera zoom range
  useEffect(() => {
    if (!map) return;

    map.cameraZoomRange = new mapkit.CameraZoomRange(minCameraDistance, maxCameraDistance);
  }, [map, minCameraDistance, maxCameraDistance]);

  // Camera Distance
  useEffect(() => {
    if (!map) return;
    if (!cameraDistance) return;

    map.setCameraDistanceAnimated(cameraDistance, regionUpdateAnimates);
  }, [cameraDistance]);

  // Map Rotation
  useEffect(() => {
    if (!map) return;
    if (!rotation) return;

    map.setRotationAnimated(rotation, regionUpdateAnimates);
  }, [rotation]);

  // Center Coordinates
  useEffect(() => {
    if (!map) return;
    if (!center) return;

    map.setCenterAnimated(
      new mapkit.Coordinate(center.latitude, center.longitude),
      regionUpdateAnimates,
    );
  }, [center]);

  // Region Coordinates
  useEffect(() => {
    if (!map) return;
    if (!region) return;

    map.setRegionAnimated(toMapKitCoordinateRegion(region), regionUpdateAnimates);
  }, [region]);

  // Region Coordinates
  useEffect(() => {
    if (!map) return;
    if (!visibleMapRect) return;
    if (!visibleMapRect.x || !visibleMapRect.y || !visibleMapRect.width || !visibleMapRect.height) {
      throw new Error('Visible map rects has to include x, y, width and height');
    }
    map.setVisibleMapRectAnimated(new mapkit.MapRect(
      visibleMapRect.x,
      visibleMapRect.y,
      visibleMapRect.width,
      visibleMapRect.height,
    ), regionUpdateAnimates);
  }, [visibleMapRect]);

  // Point of interest filter
  useEffect(() => {
    if (!map) return;

    if (includedPOICategories && excludedPOICategories) {
      throw new Error('Can’t specify both includedPOICategories and excludedPOICategories.');
    } else if (includedPOICategories) {
      map.pointOfInterestFilter = mapkit.PointOfInterestFilter.including(
        includedPOICategories.map(toMapKitPOICategory),
      );
    } else if (excludedPOICategories) {
      map.pointOfInterestFilter = mapkit.PointOfInterestFilter.excluding(
        excludedPOICategories.map(toMapKitPOICategory),
      );
    } else {
      // @ts-ignore
      map.pointOfInterestFilter = null;
    }
  }, [map, includedPOICategories, excludedPOICategories]);

  // MapKit JS events
  const regionHandler = () => fromMapKitRegion(map!.region);
  forwardMapkitEvent(map, 'region-change-start', onRegionChangeStart, regionHandler);
  forwardMapkitEvent(map, 'region-change-end', onRegionChangeEnd, regionHandler);
  forwardMapkitEvent(map, 'map-type-change', onMapTypeChange, () => fromMapKitMapType(map!.mapType));

  type MapKitMapInteractionEvent = {
    domEvents: Event[],
    pointOnPage: DOMPoint,
  };
  const interactionEvent = ({ domEvents, pointOnPage }: MapKitMapInteractionEvent) => ({
    domEvents,
    pointOnPage,
    toCoordinates: () => map!.convertPointOnPageToCoordinate(pointOnPage),
  });
  forwardMapkitEvent(map, 'single-tap', onSingleTap, interactionEvent);
  forwardMapkitEvent(map, 'double-tap', onDoubleTap, interactionEvent);
  forwardMapkitEvent(map, 'long-press', onLongPress, interactionEvent);

  type MapKitUserLocationChangeEvent = {
    coordinate: mapkit.Coordinate,
    timestamp: Date,
    floorLevel: number | undefined | null,
  };
  forwardMapkitEvent(map, 'user-location-change', onUserLocationChange, ({ coordinate: { latitude, longitude }, timestamp, floorLevel }: MapKitUserLocationChangeEvent) => ({
    coordinate: { latitude, longitude },
    timestamp,
    floorLevel,
  }));
  type MapKitUserLocationErrorEvent = {
    code: 1 | 2 | 3 | 4,
    message: string,
  };
  forwardMapkitEvent(map, 'user-location-error', onUserLocationError, ({ code, message }: MapKitUserLocationErrorEvent) => ({ code, message }));

  // Native JavaScript events
  const domEvents = [
    { name: 'click', handler: onClick },
    { name: 'mousemove', handler: onMouseMove },
    { name: 'mousedown', handler: onMouseDown },
    { name: 'mouseup', handler: onMouseUp },
  ] as const;
  domEvents.forEach(({ name, handler }) => {
    useEffect(() => {
      if (!map || !handler) return undefined;

      const listener = (e: MouseEvent) => {
        handler({
          domEvents: [e],
          pointOnPage: { x: e.pageX, y: e.pageY },
          toCoordinates() {
            const { latitude, longitude }: mapkit.Coordinate = map
              .convertPointOnPageToCoordinate(new DOMPoint(e.pageX, e.pageY));
            return { latitude, longitude };
          },
        });
      };

      element.current?.addEventListener(name, listener);
      return () => element.current?.removeEventListener(name, listener);
    }, [map, handler]);
  });

  return (
    <React.StrictMode>
      <div style={{ width: '100%', height: '100%' }} ref={element}>
        <MapContext.Provider value={map}>
          {children}
        </MapContext.Provider>
      </div>
    </React.StrictMode>
  );
});
export default Map;
