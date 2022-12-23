import React, {
  useState, useEffect, useRef, useLayoutEffect, useImperativeHandle,
} from 'react';
import MapContext from '../context/MapContext';
import load from '../util/loader';
import {
  ColorScheme, Distances, LoadPriority, MapType,
  toMapKitColorScheme, toMapKitDistances, toMapKitLoadPriority, toMapKitMapType,
} from '../util/parameters';
import MapProps from './MapProps';

const Map = React.forwardRef<mapkit.Map | null, React.PropsWithChildren<MapProps>>(({
  children = undefined,

  token,

  colorScheme = ColorScheme.Light,
  mapType = MapType.Standard,
  distances = Distances.Adaptive,
  loadPriority = LoadPriority.LandCover,

  isRotationEnabled = true,
  isScrollEnabled = true,
  isZoomEnabled = true,
  showsMapTypeControl = true,
  showsZoomControl = true,
  showsUserLocationControl = false,
  showsPointsOfInterest = true,
  showsUserLocation = false,
  tracksUserLocation = false,

  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,

  cameraBoundary = undefined,
  minCameraDistance = 0,
  maxCameraDistance = Infinity,

  onReady = undefined,
}, mapRef) => {
  const [map, setMap] = useState<mapkit.Map | null>(null);
  const element = useRef<HTMLDivElement>(null);

  // Load the map
  useEffect(() => {
    load(token).then(() => {
      setMap(new mapkit.Map(element.current!));
    });

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  // Expose the map using a forward ref
  useImperativeHandle(mapRef, () => map!, [map]);

  // Fire the onReady event
  useLayoutEffect(() => {
    if (map !== null) {
      onReady?.();
    }
  }, [map]);

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

  // Padding
  useEffect(() => {
    if (!map) return;
    map.padding = new mapkit.Padding(paddingTop, paddingRight, paddingBottom, paddingLeft);
  }, [map, paddingTop, paddingRight, paddingBottom, paddingLeft]);

  // Camera boundary
  useEffect(() => {
    if (!map) return;
    // @ts-ignore
    map.cameraBoundary = cameraBoundary ? new mapkit.CoordinateRegion(
      new mapkit.Coordinate(cameraBoundary.centerLatitude, cameraBoundary.centerLongitude),
      new mapkit.CoordinateSpan(cameraBoundary.latitudeDelta, cameraBoundary.longitudeDelta),
    ) : null;
  }, [map, cameraBoundary]);

  // Camera zoom range
  useEffect(() => {
    if (!map) return;
    // @ts-ignore
    map.cameraZoomRange = new mapkit.CameraZoomRange(minCameraDistance, maxCameraDistance);
  }, [map, minCameraDistance, maxCameraDistance]);

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
