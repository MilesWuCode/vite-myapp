- install

```sh
yarn add vue-toastification@next
```

```ts
import Toast, { PluginOptions, POSITION } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
}

app.use(Toast, options)
```
