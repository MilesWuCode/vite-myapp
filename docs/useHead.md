- install

```sh
yarn add @vueuse/head
```

- example

```vue
<script setup lang="ts">
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Site Title',
    meta: [{ name: 'description', content: 'Site Description' }],
  })
</script>
```
