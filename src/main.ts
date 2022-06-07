import './main.css'
import { createApp } from 'vue'

// head
import { createHead } from '@vueuse/head'

// router
import router from '~/router'

// toast
import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
}

// app
import App from './App.vue'

createApp(App)
  .use(createHead())
  .use(Toast, options)
  .use(router)
  .mount('#app')
