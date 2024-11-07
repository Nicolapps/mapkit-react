import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  useRef,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';
import MapContext from '../context/MapContext';
import AnnotationProps from './AnnotationProps';
import forwardMapkitEvent from '../util/forwardMapkitEvent';
import CalloutContainer from './CalloutContainer';
import { toMapKitDisplayPriority } from '../util/parameters';
import { AnnotationClusterIdentifierContext, ClusterAnnotationContext } from './AnnotationCluster';

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

  clusteringIdentifier: deprecatedClusterIdentifier = null,
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
  const clusterAnnotation = useContext(ClusterAnnotationContext);
  const clusteringIdentifier = useContext(AnnotationClusterIdentifierContext) ?? deprecatedClusterIdentifier;

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
  useLayoutEffect(() => {
    if (!annotation) return;

    const callOutObj: mapkit.AnnotationCalloutDelegate = {};
    if (calloutElement && calloutElementRef.current !== null) {
      // @ts-expect-error
      callOutObj.calloutElementForAnnotation = () => calloutElementRef.current;
    }
    if (
      calloutLeftAccessory
      && calloutLeftAccessoryRef.current !== null
    ) {
      // @ts-expect-error
      callOutObj.calloutLeftAccessoryForAnnotation = () => calloutLeftAccessoryRef
        .current;
    }
    if (
      calloutRightAccessory
      && calloutRightAccessoryRef.current !== null
    ) {
      // @ts-expect-error
      callOutObj.calloutRightAccessoryForAnnotation = () => calloutRightAccessoryRef
        .current;
    }
    if (calloutContent && calloutContentRef.current !== null) {
      // @ts-expect-error
      callOutObj.calloutContentForAnnotation = () => calloutContentRef.current;
    }
    if (Object.keys(callOutObj).length > 0) {
      annotation.callout = callOutObj;
    } else {
      // @ts-expect-error
      delete annotation.callout;
    }

    // eslint-disable-next-line consistent-return
    return () => {
      // @ts-expect-error
      delete annotation.callout;
    };
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

  // Display Priority
  useEffect(() => {
    if (!annotation) return;
    // @ts-ignore
    if (displayPriority === undefined) { delete annotation.displayPriority; return; }
    // @ts-ignore
    annotation.displayPriority = toMapKitDisplayPriority(displayPriority);
  }, [annotation, displayPriority]);

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

  // Coordinates - This needs to be the last useEffect,
  // as removing the annotation needs to be the last unmount action
  useLayoutEffect(() => {
    if (map === null) return undefined;

    const a = new mapkit.Annotation(
      new mapkit.Coordinate(latitude, longitude),
      () => contentEl,
    );

    if (clusterAnnotation !== undefined) {
      setAnnotation(clusterAnnotation);
    } else {
      map.addAnnotation(a);
      setAnnotation(a);
    }

    return () => {
      if (!clusterAnnotation) {
        map.removeAnnotation(a);
      }
    };
  }, [map, latitude, longitude]);

  return (
    <>
      {createPortal(
        <div style={{ display: 'none' }}>
          {(calloutContent !== undefined) && (
          <CalloutContainer
            ref={calloutContentRef}
            type="content"
          >
            {calloutContent}
          </CalloutContainer>
          )}
          {(calloutLeftAccessory !== undefined) && (
          <CalloutContainer
            ref={calloutLeftAccessoryRef}
            type="left"
          >
            {calloutLeftAccessory}
          </CalloutContainer>
          )}
          {(calloutRightAccessory !== undefined) && (
          <CalloutContainer
            ref={calloutRightAccessoryRef}
            type="right"
          >
            {calloutRightAccessory}
          </CalloutContainer>
          )}
          {(calloutElement !== undefined) && (
          <CalloutContainer
            ref={calloutElementRef}
            type="container"
          >
            {calloutElement}
          </CalloutContainer>
          )}
        </div>,
        document.body,
      )}
      {clusterAnnotation !== undefined ? children : createPortal(children, contentEl)}
    </>
  );
}
