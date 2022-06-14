import './main.css'

// nprogress
import 'nprogress/nprogress.css'

import { createApp } from 'vue'

// head
import { createHead } from '@vueuse/head'

// store
import { createPinia } from 'pinia'

// router
import router from '~/router'

// toast
import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
}

// vee-validate
import init from '~/plugins/vee-validate/vee-validate'
init()

// app
import App from './App.vue'

createApp(App)
  .use(createHead())
  .use(createPinia())
  .use(Toast, options)
  .use(router)
  .mount('#app')
