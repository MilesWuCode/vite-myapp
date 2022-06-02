import './index.css'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from '~/router'

import App from './App.vue'

createApp(App)
  .use(createHead())
  .use(router)
  .mount('#app')
