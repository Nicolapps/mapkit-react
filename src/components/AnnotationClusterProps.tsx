export default interface AnnotationClusterProps {
  annotationForCluster?: (
    memberAnnotations: mapkit.Annotation[],
    coordinate: mapkit.Coordinate,
  ) => React.ReactNode;
  children: React.ReactNode;
  clusterIdenfier: string;
}
