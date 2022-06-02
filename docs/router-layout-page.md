- install

```sh
yarn add vue-router vite-plugin-pages vite-plugin-vue-layouts
mkdir ./src/layouts
mkdir ./src/pages
```

- vite.config.ts

```ts
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig({
  plugins: [
    // https://vuejs.org/guide/extras/reactivity-transform.html
    vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
      dirs: 'src/pages',
    }),
  ],
})
```

- src/App.vue

```vue
<template>
  <router-view />
</template>
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["vite-plugin-pages/client", "vite-plugin-vue-layouts/client"]
  }
}
```

- src/router/index.ts
- src/layouts/default.vue
- src/pages/[...all].vue
- src/pages/index.vue
