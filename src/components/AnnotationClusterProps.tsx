export default interface AnnotationClusterProps {
  annotationForCluster: (
    memberAnnotations: mapkit.Annotation[]
  ) => Partial<mapkit.Annotation> & { children?: React.ReactNode };
  children: React.ReactNode;
  clusterIdenfiier: string;
}
