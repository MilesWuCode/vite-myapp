import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// import { useCookies } from '@vueuse/integrations/useCookies'
// import { useAuthStore } from '~/stores/auth'
// import { useAuth } from '~/modules/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  // scrollBehavior(to, from, savedPosition) {
  //   return savedPosition || new Promise((resolve) => {
  //     setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
  //   })
  // },
})

// router.beforeEach(async (to, from, next) => {
//   const cookies = useCookies(['locale'])
//   const authStore = useAuthStore()
//   const auth = useAuth()

//   // 沒有登入
//   if (!authStore.loggedIn) {
//     // 抓取用戶資料存到store
//     await auth.fetchUser()
//   }

//   // 除了訪客專用
//   if (to.meta.auth !== 'guest-only') {
//     // 記錄網址到cookie
//     cookies.set('auth_redirect', to.fullPath)
//   }

//   if (authStore.loggedIn && to.meta.auth === 'guest-only') {
//     // 已登入停留原頁或首頁
//     next(from.fullPath || '/')
//   } else if (!authStore.loggedIn && to.meta.auth === 'member-only') {
//     // 未登入回到登入頁
//     next({ name: 'login' })
//   } else {
//     // 最後
//     next()
//   }
// })

export default router
