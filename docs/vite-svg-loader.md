- install

```sh
yarn add vite-svg-loader
```

- vite.config.ts

```ts
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), svgLoader()],
})
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["vite-svg-loader"]
  }
}
```

- example

```js
import iconUrl from './my-icon.svg?url'
// '/assets/my-icon.2d8efhg.svg'

import iconRaw from './my-icon.svg?raw'
// '<?xml version="1.0"?>...'

import IconComponent from './my-icon.svg'
import IconComponent from './my-icon.svg?component'
// <IconComponent />
```
