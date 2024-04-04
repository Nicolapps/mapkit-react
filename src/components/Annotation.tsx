import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import MapContext from '../context/MapContext';
import AnnotationProps from './AnnotationProps';
import forwardMapkitEvent from '../util/forwardMapkitEvent';
import CalloutContainer from './CalloutContainer';

export default function Annotation({
  latitude,
  longitude,

  title = '',
  subtitle = '',
  accessibilityLabel = null,

  size = undefined,

  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  anchorOffsetX = 0,
  anchorOffsetY = 0,

  selected = false,

  onSelect = undefined,
  onDeselect = undefined,
  onDragStart = undefined,
  onDragEnd = undefined,
  onDragging = undefined,

  animates = true,
  appearanceAnimation = '',
  visible = true,

  clusteringIdentifier = null,
  displayPriority = undefined,
  collisionMode = undefined,

  calloutElement = undefined,
  calloutContent = undefined,
  calloutLeftAccessory = undefined,
  calloutRightAccessory = undefined,

  calloutEnabled = undefined,
  calloutOffsetX = 0,
  calloutOffsetY = 0,

  draggable = false,
  enabled = true,

  children,
}: AnnotationProps) {
  const [annotation, setAnnotation] = useState<mapkit.Annotation | null>(null);
  const contentEl = useMemo<HTMLDivElement>(() => document.createElement('div'), []);
  const map = useContext(MapContext);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    const a = new mapkit.Annotation(
      new mapkit.Coordinate(latitude, longitude),
      () => contentEl,
    );
    map.addAnnotation(a);
    setAnnotation(a);

    return () => {
      map.removeAnnotation(a);
    };
  }, [map, latitude, longitude]);

  // Padding
  useEffect(() => {
    if (!annotation) return;
    annotation.padding = new mapkit.Padding(paddingTop, paddingRight, paddingBottom, paddingLeft);
  }, [annotation, paddingTop, paddingRight, paddingBottom, paddingLeft]);

  // AnchorOffset
  useEffect(() => {
    if (!annotation) return;
    annotation.anchorOffset = new DOMPoint(anchorOffsetX, anchorOffsetY);
  }, [annotation, anchorOffsetX, anchorOffsetY]);

  // CalloutOffset
  useEffect(() => {
    if (!annotation) return;
    annotation.calloutOffset = new DOMPoint(calloutOffsetX, calloutOffsetY);
  }, [annotation, calloutOffsetX, calloutOffsetY]);

  const calloutLeftAccessoryRef = useRef<HTMLDivElement>(null);
  const calloutRightAccessoryRef = useRef<HTMLDivElement>(null);
  const calloutContentRef = useRef<HTMLDivElement>(null);
  const calloutElementRef = useRef<HTMLDivElement>(null);

  // Callout
  useEffect(() => {
    if (!annotation) return;

    const callOutObj: mapkit.AnnotationCalloutDelegate = {};
    if (calloutElement && calloutElementRef.current !== null) {
      callOutObj.calloutElementForAnnotation = () => calloutElementRef.current;
    }
    if (
      calloutLeftAccessory
      && calloutLeftAccessoryRef.current !== null
    ) {
      callOutObj.calloutLeftAccessoryForAnnotation = () => calloutLeftAccessoryRef
        .current;
    }
    if (
      calloutRightAccessory
      && calloutRightAccessoryRef.current !== null
    ) {
      callOutObj.calloutRightAccessoryForAnnotation = () => calloutRightAccessoryRef
        .current;
    }
    if (calloutContent && calloutContentRef.current !== null) {
      callOutObj.calloutContentForAnnotation = () => calloutContentRef.current;
    }
    if (Object.keys(callOutObj).length > 0) {
      annotation.callout = callOutObj;
    } else {
      // @ts-expect-error
      delete annotation.callout;
    }
  }, [
    annotation,
    calloutElement,
    calloutLeftAccessory,
    calloutRightAccessory,
    calloutContent,
    calloutElementRef.current,
    calloutLeftAccessoryRef.current,
    calloutRightAccessoryRef.current,
    calloutContentRef.current,
  ]);

  // Collision Mode
  useEffect(() => {
    if (!annotation) return;

    if (collisionMode === 'Circle') {
      annotation.collisionMode = mapkit.Annotation.CollisionMode.Circle;
    } else if (collisionMode === 'Rectangle') {
      annotation.collisionMode = mapkit.Annotation.CollisionMode.Rectangle;
    } else {
      // @ts-ignore
      delete annotation.collisionMode;
    }
  }, [annotation, collisionMode]);

  // Simple values properties
  const properties = {
    title,
    subtitle,
    accessibilityLabel,

    size,

    selected,
    animates,
    appearanceAnimation,
    draggable,
    enabled,
    visible,

    clusteringIdentifier,
    displayPriority,

    calloutEnabled,
  };
  Object.entries(properties).forEach(([propertyName, prop]) => {
    useEffect(() => {
      if (!annotation) return;
      // @ts-ignore
      if (prop === undefined) { delete annotation[propertyName]; return; }
      // @ts-ignore
      annotation[propertyName] = prop;
    }, [annotation, prop]);
  });

  // Events
  const handlerWithoutParameters = () => { };
  const events = [
    { name: 'select', handler: onSelect },
    { name: 'deselect', handler: onDeselect },
    { name: 'drag-start', handler: onDragStart },
  ] as const;
  events.forEach(({ name, handler }) => {
    forwardMapkitEvent(annotation, name, handler, handlerWithoutParameters);
  });

  const dragEndParameters = () => ({
    latitude: annotation!.coordinate.latitude,
    longitude: annotation!.coordinate.longitude,
  });
  const draggingParameters = (e: { coordinate: mapkit.Coordinate }) => ({
    latitude: e.coordinate.latitude,
    longitude: e.coordinate.longitude,
  });
  forwardMapkitEvent(annotation, 'drag-end', onDragEnd, dragEndParameters);
  forwardMapkitEvent(annotation, 'dragging', onDragging, draggingParameters);

  if (calloutEnabled) {
    return (
      <>
        {calloutContent !== undefined && createPortal(
          <CalloutContainer
            ref={calloutContentRef}
            type="content"
          >
            {calloutContent}
          </CalloutContainer>,
          document.body,
        )}
        {calloutLeftAccessory !== undefined && createPortal(
          <CalloutContainer
            ref={calloutLeftAccessoryRef}
            type="left"
          >
            {calloutLeftAccessory}
          </CalloutContainer>,
          document.body,
        )}
        {calloutRightAccessory !== undefined && createPortal(
          <CalloutContainer
            ref={calloutRightAccessoryRef}
            type="right"
          >
            {calloutRightAccessory}
          </CalloutContainer>,
          document.body,
        )}
        {calloutElement !== undefined && createPortal(
          <CalloutContainer
            ref={calloutElementRef}
            type="container"
          >
            {calloutElement}
          </CalloutContainer>,
          document.body,
        )}
        {createPortal(children, contentEl)}
      </>
    );
  }
  return createPortal(children, contentEl);
}
