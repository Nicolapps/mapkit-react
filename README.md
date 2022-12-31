# mapkit-react
Use Apple Maps in your React apps!

## Demo
You can see the library in action on [**the Storybook examples**](https://nicolapps.github.io/mapkit-react/).

You can run the examples locally by cloning the project and running the following command:

```sh
STORYBOOK_MAPKIT_JS_TOKEN="…" npm run storybook
```

Replace `…` by your MapKit JS token (you can learn how to generate one on the [MapKit JS documentation](https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js)).

## Usage
First, add the library to your project like this:

```sh
npm install mapkit-react
```

You can then use the library in your project like this:

```tsx
import React from 'react';
import { Map, Marker } from 'mapkit-react';

function MyComponent() {
  return (
    <Map token="…">
      <Marker latitude={46.52} longitude={6.57} />
    </Map>
  );
}
```

You can see all the supported parameters in Storybook (see above).

## Features
A complete list of MapKit JS features supported by this library is available on the [Supported MapKit JS features](support.md) page.

## Contributing
If you have a question or an idea, you can create an issue. Pull requests are welcome! If you want to contribute, don’t hesitate to look into the unassigned issues.

## Authors
- **Nicolas Ettlin** ([@Nicolapps](https://github.com/Nicolapps))

## License
mapkit-react is released under the MIT license, see the [LICENSE](https://github.com/Nicolapps/mapkit-react/blob/main/LICENSE) file for details.
