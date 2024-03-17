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

  calloutElementForAnnotation = undefined,
  calloutContentForAnnotation = undefined,
  calloutLeftAccessoryForAnnotation = undefined,
  calloutRightAccessoryForAnnotation = undefined,

  calloutEnabled = undefined,
  calloutOffsetX = 0,
  calloutOffsetY = 0,

  draggable = false,
  enabled = true,

  children,
}: AnnotationProps) {
  const calloutLeftAccessoryForAnnotationRef = useRef();
  const calloutRightAccessoryForAnnotationRef = useRef();
  const calloutContentForAnnotationRef = useRef();
  const calloutElementForAnnotationRef = useRef();

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

  // Callout
  useEffect(() => {
    if (!annotation) return;

    const callOutObj: Record<string, any> = {};
    if (calloutElementForAnnotation && calloutElementForAnnotationRef.current !== undefined) {
      callOutObj.calloutElementForAnnotation = () => calloutElementForAnnotationRef.current;
    }
    if (
      calloutLeftAccessoryForAnnotation
      && calloutLeftAccessoryForAnnotationRef.current !== undefined
    ) {
      callOutObj.calloutLeftAccessoryForAnnotation = () => calloutLeftAccessoryForAnnotationRef
        .current;
    }
    if (
      calloutRightAccessoryForAnnotation
      && calloutRightAccessoryForAnnotationRef.current !== undefined
    ) {
      callOutObj.calloutRightAccessoryForAnnotation = () => calloutRightAccessoryForAnnotationRef
        .current;
    }
    if (calloutContentForAnnotation && calloutContentForAnnotationRef.current !== undefined) {
      callOutObj.calloutContentForAnnotation = () => calloutContentForAnnotationRef.current;
    }
    if (Object.keys(callOutObj).length > 0) {
      annotation.callout = { ...callOutObj };
    } else {
      // @ts-ignore
      delete annotation.callout;
    }
  }, [
    annotation, calloutElementForAnnotation, calloutLeftAccessoryForAnnotation,
    calloutRightAccessoryForAnnotation, calloutContentForAnnotation,
    calloutElementForAnnotationRef.current, calloutLeftAccessoryForAnnotationRef.current,
    calloutRightAccessoryForAnnotationRef.current, calloutContentForAnnotationRef.current,
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
        {calloutContentForAnnotation !== undefined && createPortal(
          <CalloutContainer
            ref={calloutContentForAnnotationRef}
            type="content"
          >
            {calloutContentForAnnotation}
          </CalloutContainer>,
          document.body,
        )}
        {calloutLeftAccessoryForAnnotation !== undefined && createPortal(
          <CalloutContainer
            ref={calloutLeftAccessoryForAnnotationRef}
            type="left"
          >
            {calloutLeftAccessoryForAnnotation}
          </CalloutContainer>,
          document.body,
        )}
        {calloutRightAccessoryForAnnotation !== undefined && createPortal(
          <CalloutContainer
            ref={calloutRightAccessoryForAnnotationRef}
            type="right"
          >
            {calloutRightAccessoryForAnnotation}
          </CalloutContainer>,
          document.body,
        )}
        {calloutElementForAnnotation !== undefined && createPortal(
          <CalloutContainer
            ref={calloutElementForAnnotationRef}
            type="container"
          >
            {calloutElementForAnnotation}
          </CalloutContainer>,
          document.body,
        )}
        {createPortal(children, contentEl)}
      </>
    );
  }
  return createPortal(children, contentEl);
}
