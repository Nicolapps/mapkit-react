import React, {
  createContext, Fragment, useContext, useEffect, useId, useState, useRef,
  useLayoutEffect,
} from 'react';
import { createPortal } from 'react-dom';
import AnnotationClusterProps from './AnnotationClusterProps';
import MapContext from '../context/MapContext';

export const AnnotationClusterIdentifierContext = createContext<string | null>(null);
export const ClusterAnnotationContext = createContext<mapkit.Annotation | undefined>(undefined);

interface ClusterAnnotationData {
  contentElement: HTMLDivElement;
  annotation: mapkit.Annotation;
  coordinate: mapkit.Coordinate;
  memberAnnotations: mapkit.Annotation[];
  // Fingerprint based on member coordinates for stable identification
  fingerprint: string;
  // Track a unique ID for React keys
  id: string;
}

// Generate a unique ID for each cluster annotation
let clusterIdCounter = 0;
function generateClusterId(): string {
  clusterIdCounter += 1;
  return `cluster-${clusterIdCounter}`;
}

// Create a fingerprint for a member annotation based on its stable properties
function getAnnotationFingerprint(annotation: mapkit.Annotation): string {
  // Use coordinate with reasonable precision (8 decimal places is ~1mm)
  return `${annotation.coordinate.latitude.toFixed(8)},${annotation.coordinate.longitude.toFixed(8)}`;
}

// Create a fingerprint for a cluster based on its members' coordinates
function getClusterFingerprint(members: mapkit.Annotation[]): string {
  return members
    .map(getAnnotationFingerprint)
    .sort()
    .join('|');
}

// Check if two arrays contain the same annotation references
function haveSameMembers(a: mapkit.Annotation[], b: mapkit.Annotation[]): boolean {
  if (a.length !== b.length) return false;
  const setA = new Set(a);
  return b.every((item) => setA.has(item));
}

// Helper component to measure content size and update callout offset
function ClusterContentMeasurer({ annotation, children }: { annotation: mapkit.Annotation, children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const initialCalloutOffset = useRef<DOMPoint | null>(null);
  
  useLayoutEffect(() => {
    // Capture the initial callout offset set by the child Annotation component
    initialCalloutOffset.current = annotation.calloutOffset;
  }, []);
  
  useLayoutEffect(() => {
    if (!ref.current) return;
    const updateOffset = () => {
       const height = ref.current?.offsetHeight || 0;
       // Always apply vertical centering, but preserve any user-set horizontal offset
       const xOffset = initialCalloutOffset.current?.x ?? 0;
       annotation.calloutOffset = new DOMPoint(xOffset, height / 2);
    };
    
    // Initial
    updateOffset();
    
    // Observer for size changes
    const observer = new ResizeObserver(updateOffset);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [annotation]);
  
  return <div ref={ref} style={{ pointerEvents: 'auto', display: 'inline-block' }}>{children}</div>;
}

export default function AnnotationCluster({
  children,
  annotationForCluster,
}: AnnotationClusterProps) {
  const clusterIdenfier = useId();
  const map = useContext(MapContext);

  // Use ref for the existing function to avoid stale closure issues
  // Note: MapKit types declare this as returning void, but it actually returns an Annotation
  const existingClusterFuncRef = useRef<
    ((clusterAnnotation: mapkit.Annotation) => mapkit.Annotation | void) | undefined
  >(undefined);
  const hasStoredExistingFunc = useRef(false);

  const [clusterAnnotations, setClusterAnnotations] = useState<ClusterAnnotationData[]>([]);
  
  // Keep a ref in sync with state for use in the callback
  const clusterAnnotationsRef = useRef<ClusterAnnotationData[]>([]);
  useEffect(() => {
    clusterAnnotationsRef.current = clusterAnnotations;
  }, [clusterAnnotations]);

  // Store the annotationForCluster prop in a ref so the callback always has the latest
  const annotationForClusterRef = useRef(annotationForCluster);
  useEffect(() => {
    annotationForClusterRef.current = annotationForCluster;
  }, [annotationForCluster]);

  // Coordinates
  useEffect(() => {
    if (map === null) return undefined;

    // Store the existing function only once
    if (!hasStoredExistingFunc.current) {
      existingClusterFuncRef.current = map.annotationForCluster;
      hasStoredExistingFunc.current = true;
    }

    map.annotationForCluster = (clusterAnnotationData) => {
      if (clusterAnnotationData.clusteringIdentifier === clusterIdenfier) {
        if (annotationForClusterRef.current) {
          // Create a fingerprint based on member coordinates (stable across calls)
          const fingerprint = getClusterFingerprint(clusterAnnotationData.memberAnnotations);

          // Find existing cluster by fingerprint
          const existingEntry = clusterAnnotationsRef.current.find(
            (entry) => entry.fingerprint === fingerprint,
          );

          if (existingEntry) {
            // Update coordinate if it changed
            const coordChanged = existingEntry.coordinate.latitude
                !== clusterAnnotationData.coordinate.latitude
              || existingEntry.coordinate.longitude
                !== clusterAnnotationData.coordinate.longitude;

            if (coordChanged) {
              // IMPORTANT: Always update the annotation's coordinate to match what MapKit expects
              existingEntry.annotation.coordinate = new mapkit.Coordinate(
                clusterAnnotationData.coordinate.latitude,
                clusterAnnotationData.coordinate.longitude,
              );
            }

            // Check if members changed (reference check)
            const membersChanged = !haveSameMembers(
              existingEntry.memberAnnotations,
              clusterAnnotationData.memberAnnotations,
            );

            // Update state if anything changed to ensure React renders correctly
            if (coordChanged || membersChanged) {
              setClusterAnnotations((prev) => prev.map((entry) => {
                if (entry === existingEntry) {
                  return {
                    ...entry,
                    coordinate: clusterAnnotationData.coordinate,
                    memberAnnotations: clusterAnnotationData.memberAnnotations,
                  };
                }
                return entry;
              }));
            }

            return existingEntry.annotation;
          }

          // Create a new cluster annotation
          const contentElement = document.createElement('div');
          
          // Fix offset issues by centering content around a 0x0 container
          contentElement.style.width = '0px';
          contentElement.style.height = '0px';
          contentElement.style.overflow = 'visible';
          contentElement.style.display = 'flex';
          contentElement.style.justifyContent = 'center';
          contentElement.style.alignItems = 'center';
          
          // Ensure pointer events work
          contentElement.style.pointerEvents = 'auto';
          
          const a = new mapkit.Annotation(
            new mapkit.Coordinate(
              clusterAnnotationData.coordinate.latitude,
              clusterAnnotationData.coordinate.longitude,
            ),
            () => contentElement,
            {
              title: clusterAnnotationData.title,
              subtitle: clusterAnnotationData.subtitle,
              calloutEnabled: true,
            },
          );

          const newEntry: ClusterAnnotationData = {
            contentElement,
            annotation: a,
            coordinate: clusterAnnotationData.coordinate,
            memberAnnotations: clusterAnnotationData.memberAnnotations,
            fingerprint,
            id: generateClusterId(),
          };

          // Update the ref immediately so subsequent calls in the same cycle can find it
          clusterAnnotationsRef.current = [...clusterAnnotationsRef.current, newEntry];
          setClusterAnnotations((prev) => [...prev, newEntry]);

          return a;
        }

        return clusterAnnotationData;
      }

      // Delegate to the previous function if it exists
      return existingClusterFuncRef.current
        ? existingClusterFuncRef.current(clusterAnnotationData)
        : clusterAnnotationData;
    };

    return () => {
      // Cleanup: remove cluster annotations that are no longer valid
      setClusterAnnotations([]);
      clusterAnnotationsRef.current = [];

      if (!hasStoredExistingFunc.current || existingClusterFuncRef.current === undefined) {
        // @ts-ignore
        delete map.annotationForCluster;
      } else {
        // @ts-ignore
        map.annotationForCluster = existingClusterFuncRef.current;
      }
    };
  }, [map, clusterIdenfier]);

  return (
    <>
      {annotationForCluster && clusterAnnotations.map(({
        contentElement, annotation, coordinate, memberAnnotations, id,
      }) => (
        <Fragment key={id}>
          {createPortal(
            <ClusterAnnotationContext.Provider value={annotation}>
              <ClusterContentMeasurer annotation={annotation}>
                {annotationForCluster(
                  memberAnnotations,
                  coordinate,
                )}
              </ClusterContentMeasurer>
            </ClusterAnnotationContext.Provider>,
            contentElement,
          )}
        </Fragment>
      ))}
      <AnnotationClusterIdentifierContext.Provider value={clusterIdenfier}>
        {children}
      </AnnotationClusterIdentifierContext.Provider>
    </>
  );
}
