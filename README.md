# mapkit-react
Use Apple Maps in your React apps!

This library wraps [MapKit JS](https://developer.apple.com/documentation/mapkitjs) in React components. Its declarative, straightforward, and React-idiomatic API allows you to quickly add maps to your project, from prototype to production.

## Demo
Check out [**the Storybook examples**](https://nicolapps.github.io/mapkit-react/) to see the available components, experiment with their parameters, and read some code samples.

You can run the examples locally by cloning the project and running the following command:

```sh
STORYBOOK_MAPKIT_JS_TOKEN="…" npm run storybook
```

Replace `…` by your MapKit JS token (you can learn how to generate one on the [MapKit JS documentation](https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js)).

You can also see the library used in production on [CMUEats](https://cmueats.com/map) and [CMU Map](https://cmumap.com).

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

You can also pass a function that returns a token (sync or async). MapKit JS may call this throughout a session when it needs a new token — for example when a short-lived JWT expires. Prefer minting tokens on your server; never put your MapKit private key in client-side code.

```tsx
function MyComponent() {
  return (
    <Map
      token={async () => {
        const res = await fetch('/api/mapkit-token');
        if (!res.ok) throw new Error('Failed to fetch MapKit token');
        return res.text();
      }}
    >
      <Marker latitude={46.52} longitude={6.57} />
    </Map>
  );
}
```

MapKit JS is initialized once per page, so all `<Map>` instances share the same authorization context — use a single token source for the whole app.

You can see all the supported parameters in Storybook (see above).

## Features
A complete list of MapKit JS features supported by this library is available on the [Supported MapKit JS features](support.md) page.

## Contributing
If you have a question or an idea, you can create an issue. Pull requests are welcome! If you want to contribute, don’t hesitate to look into the unassigned issues.

If you want to expand the provided API or make breaking changes, please open an issue first to discuss it.

The project uses [ESLint](https://eslint.org/) and [EditorConfig](https://editorconfig.org/) to ensure code quality and consistency. Checks are run automatically when a commit is pushed to the repository, but it is convenient to install the relevant plugins in your editor to see the errors and warnings in real time.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://nicolas.ettlin.dev/"><img src="https://avatars.githubusercontent.com/u/7029582?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nicolas Ettlin</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=Nicolapps" title="Code">💻</a> <a href="https://github.com/Nicolapps/mapkit-react/commits?author=Nicolapps" title="Documentation">📖</a> <a href="https://nicolapps.github.io/mapkit-react/" title="Examples">💡</a> <a href="https://github.com/Nicolapps/mapkit-react/pulls?q=is%3Apr+reviewed-by%3ANicolapps" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.drk.wtf/"><img src="https://avatars.githubusercontent.com/u/22249?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Derek Reynolds</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=derekr" title="Code">💻</a> <a href="https://github.com/Nicolapps/mapkit-react/commits?author=derekr" title="Documentation">📖</a> <a href="https://nicolapps.github.io/mapkit-react/?path=/story/components-annotation--default" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/VladyslavParashchenko"><img src="https://avatars.githubusercontent.com/u/18124826?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vladyslav Parashchenko</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=VladyslavParashchenko" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Adrastopoulos"><img src="https://avatars.githubusercontent.com/u/76796897?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Hall</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=Adrastopoulos" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nikischin"><img src="https://avatars.githubusercontent.com/u/49103409?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Nikischin</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=nikischin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KlotzJesse"><img src="https://avatars.githubusercontent.com/u/9445140?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jesse Klotz</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=KlotzJesse" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Yuxiang-Huang"><img src="https://avatars.githubusercontent.com/u/78173038?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yuxiang Huang</b></sub></a><br /><a href="https://github.com/Nicolapps/mapkit-react/commits?author=Yuxiang-Huang" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License
mapkit-react is released under the MIT license, see the [LICENSE](https://github.com/Nicolapps/mapkit-react/blob/main/LICENSE) file for details.
