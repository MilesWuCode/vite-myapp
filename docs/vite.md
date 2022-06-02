- create

```sh
yarn create vite vite-myapp --template vue-ts

yarn install

yarn dev
```

- vite.config.ts

```sh
yarn add @types/node
```

```ts
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  // ...
})
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  },
  "exclude": ["dist", "node_modules"]
}
```
