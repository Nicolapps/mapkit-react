# Supported MapKit JS features

## `mapkit`

### Constructor parameters

| Feature                                 | Supported                                                                             |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| MapKitInitOptions.language              | ❌                                                                                    |
| MapKitInitOptions.authorizationCallback | ⚠️<br><small>You can only pass token as strings, callbacks are not supported.</small> |

### Properties

| Feature          | Supported |
| ---------------- | --------- |
| Librairies       | ❌        |
| loadedLibrairies | ❌        |
| maps             | ❌        |

### Methods

| Feature | Supported |
| ------- | --------- |
| load    | ❌        |

### Events

| Feature              | Supported |
| -------------------- | --------- |
| configuration-change | ❌        |
| error                | ❌        |

## `mapkit.Map`

### Constructor parameters

#### Visible portion of the map

| Feature                              | Supported          |
| ------------------------------------ | ------------------ |
| MapConstructorOptions.visibleMapRect | ❌                 |
| MapConstructorOptions.region         | ✅ (initialRegion) |
| MapConstructorOptions.center         | ❌                 |
| MapConstructorOptions.rotation       | ❌                 |
| MapConstructorOptions.tintColor      | ❌                 |

#### Appearance and controls

| Feature                                   | Supported |
| ----------------------------------------- | --------- |
| MapConstructorOptions.colorScheme         | ✅        |
| MapConstructorOptions.mapType             | ✅        |
| MapConstructorOptions.padding             | ✅        |
| MapConstructorOptions.showsMapTypeControl | ✅        |
| MapConstructorOptions.isRotationEnabled   | ✅        |
| MapConstructorOptions.showsCompass        | ✅        |
| MapConstructorOptions.isZoomEnabled       | ✅        |
| MapConstructorOptions.showsZoomControl    | ✅        |
| MapConstructorOptions.isScrollEnabled     | ✅        |
| MapConstructorOptions.showsScale          | ✅        |

#### Annotations

| Feature                                    | Supported                              |
| ------------------------------------------ | -------------------------------------- |
| MapConstructorOptions.annotationForCluster | ❌                                     |
| MapConstructorOptions.annotations          | ✅                                     |
| MapConstructorOptions.selectedAnnotation   | ✅ (use `selected` on the annotations) |

#### Overlays

| Feature                                     | Supported                           |
| ------------------------------------------- | ----------------------------------- |
| MapConstructorOptions.overlays              | ✅                                  |
| MapConstructorOptions.selectedOverlay       | ✅ (use `selected` on the overlays) |
| MapConstructorOptions.showsPointsOfInterest | ✅                                  |
| MapConstructorOptions.pointOfInterestFilter | ✅                                  |

#### User location

| Feature                                        | Supported |
| ---------------------------------------------- | --------- |
| MapConstructorOptions.showsUserLocation        | ✅        |
| MapConstructorOptions.tracksUserLocation       | ✅        |
| MapConstructorOptions.showsUserLocationControl | ✅        |

#### Loading priority

| Feature                            | Supported |
| ---------------------------------- | --------- |
| MapConstructorOptions.loadPriority | ✅        |

### Properties

#### Interaction properties

| Feature             | Supported |
| ------------------- | --------- |
| isRotationAvailable | ❌        |
| isRotationEnabled   | ✅        |
| isScrollEnabled     | ✅        |
| isZoomEnabled       | ✅        |

#### Visible portion of the map

| Feature         | Supported                                |
| --------------- | ---------------------------------------- |
| center          | ❌                                       |
| region          | ❌                                       |
| rotation        | ❌                                       |
| visibleMapRect  | ❌                                       |
| cameraBoundary  | ✅                                       |
| cameraDistance  | ❌                                       |
| cameraZoomRange | ✅ (minCameraDistance/maxCameraDistance) |

#### Controls

| Feature                  | Supported |
| ------------------------ | --------- |
| showsCompass             | ✅        |
| showsMapTypeControl      | ✅        |
| showsScale               | ✅        |
| showsUserLocationControl | ✅        |
| showsZoomControl         | ✅        |

#### Appearance

| Feature               | Supported |
| --------------------- | --------- |
| colorScheme           | ✅        |
| distances             | ✅        |
| mapType               | ✅        |
| padding               | ✅        |
| pointOfInterestFilter | ✅        |
| showsPointsOfInterest | ✅        |
| tintColor             | ❌        |

#### Annotations

| Feature            | Supported |
| ------------------ | --------- |
| annotations        | ✅        |
| selectedAnnotation | ❌        |

#### Overlays

| Feature         | Supported                           |
| --------------- | ----------------------------------- |
| overlays        | ✅                                  |
| selectedOverlay | ✅ (use `selected` on the overlays) |
| tileOverlays    | ❌                                  |

#### User location

| Feature                | Supported |
| ---------------------- | --------- |
| showsUserLocation      | ✅        |
| tracksUserLocation     | ✅        |
| userLocationAnnotation | ❌        |

#### Access the element

| Feature | Supported |
| ------- | --------- |
| element | ❌        |

#### Selectable map features

| Feature               | Supported |
| --------------------- | --------- |
| selectableMapFeatures | ❌        |

#### Feature loading prioritization

| Feature      | Supported |
| ------------ | --------- |
| loadPriority | ✅        |

### Events

It is possible to indirectly listen to the events by using the reference to `mapkit.Map` exposed by the `Map` component.

#### Respond to map display events

| Feature             | Supported |
| ------------------- | --------- |
| region-change-start | ✅        |
| region-change-end   | ✅        |
| rotation-start      | ❌        |
| rotation-end        | ❌        |
| scroll-start        | ❌        |
| scroll-end          | ❌        |
| zoom-start          | ❌        |
| zoom-end            | ❌        |
| map-type-change     | ✅        |

#### Respond to user location events

| Feature              | Supported |
| -------------------- | --------- |
| user-location-change | ✅        |
| user-location-error  | ✅        |

#### Respond to map interaction events

| Feature    | Supported |
| ---------- | --------- |
| single-tap | ✅        |
| double-tap | ✅        |
| long-press | ✅        |

### Methods

To call methods on the `mapkit.Map` object, you can use the reference exposed by the `Map` component.

## `mapkit.Annotation`

### Constructor parameters

| Feature                                           | Supported |
| ------------------------------------------------- | --------- |
| AnnotationConstructorOptions.title                | ✅        |
| AnnotationConstructorOptions.subtitle             | ✅        |
| AnnotationConstructorOptions.accessibilityLabel   | ✅        |
| AnnotationConstructorOptions.data                 | ❌        |
| AnnotationConstructorOptions.draggable            | ✅        |
| AnnotationConstructorOptions.visible              | ✅        |
| AnnotationConstructorOptions.enabled              | ✅        |
| AnnotationConstructorOptions.selected             | ✅        |
| AnnotationConstructorOptions.calloutEnabled       | ✅        |
| AnnotationConstructorOptions.animates             | ✅        |
| AnnotationConstructorOptions.appearanceAnimation  | ✅        |
| AnnotationConstructorOptions.anchorOffset         | ✅        |
| AnnotationConstructorOptions.calloutOffset        | ✅        |
| AnnotationConstructorOptions.callout              | ✅        |
| AnnotationConstructorOptions.size                 | ✅        |
| AnnotationConstructorOptions.displayPriority      | ✅        |
| AnnotationConstructorOptions.collisionMode        | ✅        |
| AnnotationConstructorOptions.padding              | ✅        |
| AnnotationConstructorOptions.clusteringIdentifier | ✅        |

### Properties

#### Getting the map and element

| Feature | Supported |
| ------- | --------- |
| map     | ❌        |
| element | ❌        |

#### Data, titles, and accessibility label

| Feature            | Supported |
| ------------------ | --------- |
| data               | ✅        |
| title              | ✅        |
| subtitle           | ✅        |
| accessibilityLabel | ✅        |

#### Appearance

| Feature             | Supported |
| ------------------- | --------- |
| coordinate          | ✅        |
| anchorOffset        | ✅        |
| appearanceAnimation | ✅        |
| displayPriority     | ✅        |
| padding             | ✅        |
| size                | ✅        |
| visible             | ✅        |

#### Interaction behavior

| Feature   | Supported |
| --------- | --------- |
| animates  | ✅        |
| draggable | ✅        |
| selected  | ✅        |
| enabled   | ✅        |

#### Callouts

| Feature        | Supported |
| -------------- | --------- |
| callout        | ✅        |
| calloutEnabled | ✅        |
| calloutOffset  | ✅        |

#### Clustering

| Feature              | Supported |
| -------------------- | --------- |
| memberAnnotations    | ❌        |
| clusteringIdentifier | ✅        |
| collisionMode        | ✅        |

### Events

| Feature    | Supported |
| ---------- | --------- |
| select     | ✅        |
| deselect   | ✅        |
| drag-start | ✅        |
| dragging   | ✅        |
| drag-end   | ✅        |

## `mapkit.ImageAnnotation`

_❌ Not currently supported by mapkit-react._

## `mapkit.MarkerAnnotation`

### Constructor parameters

| Feature                                                 | Supported |
| ------------------------------------------------------- | --------- |
| MarkerAnnotationConstructorOptions.titleVisibility      | ✅        |
| MarkerAnnotationConstructorOptions.subtitleVisibility   | ✅        |
| MarkerAnnotationConstructorOptions.color                | ✅        |
| MarkerAnnotationConstructorOptions.glyphColor           | ✅        |
| MarkerAnnotationConstructorOptions.glyphText            | ✅        |
| MarkerAnnotationConstructorOptions.glyphImage           | ✅        |
| MarkerAnnotationConstructorOptions.selectedGlyphImage   | ✅        |
| MarkerAnnotationConstructorOptions.title                | ✅        |
| MarkerAnnotationConstructorOptions.subtitle             | ✅        |
| MarkerAnnotationConstructorOptions.accessibilityLabel   | ✅        |
| MarkerAnnotationConstructorOptions.data                 | ❌        |
| MarkerAnnotationConstructorOptions.draggable            | ✅        |
| MarkerAnnotationConstructorOptions.visible              | ✅        |
| MarkerAnnotationConstructorOptions.enabled              | ✅        |
| MarkerAnnotationConstructorOptions.selected             | ✅        |
| MarkerAnnotationConstructorOptions.calloutEnabled       | ✅        |
| MarkerAnnotationConstructorOptions.animates             | ✅        |
| MarkerAnnotationConstructorOptions.appearanceAnimation  | ✅        |
| MarkerAnnotationConstructorOptions.anchorOffset         | ✅        |
| MarkerAnnotationConstructorOptions.calloutOffset        | ✅        |
| MarkerAnnotationConstructorOptions.callout              | ✅        |
| MarkerAnnotationConstructorOptions.size                 | ❌        |
| MarkerAnnotationConstructorOptions.displayPriority      | ✅        |
| MarkerAnnotationConstructorOptions.collisionMode        | ✅        |
| MarkerAnnotationConstructorOptions.padding              | ✅        |
| MarkerAnnotationConstructorOptions.clusteringIdentifier | ✅        |

### Properties

#### Visibility

| Feature            | Supported |
| ------------------ | --------- |
| subtitleVisibility | ✅        |
| titleVisibility    | ✅        |

#### Appearance

| Feature    | Supported |
| ---------- | --------- |
| color      | ✅        |
| glyphColor | ✅        |

#### Glyph image and text

| Feature            | Supported |
| ------------------ | --------- |
| glyphText          | ✅        |
| glyphImage         | ✅        |
| selectedGlyphImage | ✅        |

### Events

| Feature    | Supported |
| ---------- | --------- |
| select     | ✅        |
| deselect   | ✅        |
| drag-start | ✅        |
| dragging   | ✅        |
| drag-end   | ✅        |

## `mapkit.Geocoder`

_❌ Not currently supported by mapkit-react._

## `mapkit.Search`

_❌ Not currently supported by mapkit-react._

## `mapkit.PointOfInterestSearch`

_❌ Not currently supported by mapkit-react._

## `mapkit.MapFeatureAnnotation`

_❌ Not currently supported by mapkit-react._

## `mapkit.MapFeatureAnnotationGlyphImage`

_❌ Not currently supported by mapkit-react._

## `mapkit.Directions`

_❌ Not currently supported by mapkit-react._

## `mapkit.ItemCollection`

_❌ Not currently supported by mapkit-react._

## `mapkit.CircleOverlay`

_❌ Not currently supported by mapkit-react._

## `mapkit.PolylineOverlay`

### Properties

| Feature              | Supported |
| -------------------- | --------- |
| points               | ✅        |
| data                 | ❌        |
| visible              | ✅        |
| enabled              | ✅        |
| selected             | ✅        |
| style.lineCap        | ✅        |
| style.lineDash       | ✅        |
| style.lineDashOffset | ✅        |
| style.lineJoin       | ✅        |
| style.lineWidth      | ✅        |
| style.lineGradient   | ❌        |
| style.strokeColor    | ✅        |
| style.strokeOpacity  | ✅        |
| style.strokeStart    | ✅        |
| style.strokeEnd      | ✅        |
| map                  | ❌        |

### Events

| Feature  | Supported |
| -------- | --------- |
| select   | ✅        |
| deselect | ✅        |

## `mapkit.PolygonOverlay`

### Properties

| Feature              | Supported |
| -------------------- | --------- |
| points               | ✅        |
| data                 | ❌        |
| visible              | ✅        |
| enabled              | ✅        |
| selected             | ✅        |
| style.lineDash       | ✅        |
| style.lineDashOffset | ✅        |
| style.lineJoin       | ✅        |
| style.lineWidth      | ✅        |
| style.lineGradient   | ❌        |
| style.strokeColor    | ✅        |
| style.strokeOpacity  | ✅        |
| style.strokeStart    | ✅        |
| style.strokeEnd      | ✅        |
| style.fillColor      | ✅        |
| style.fillOpacity    | ✅        |
| style.fillRule       | ✅        |
| map                  | ❌        |

### Events

| Feature  | Supported |
| -------- | --------- |
| select   | ✅        |
| deselect | ✅        |

## `mapkit.TileOverlay`

_❌ Not currently supported by mapkit-react._
