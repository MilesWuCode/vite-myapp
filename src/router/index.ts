import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { authState } from '~/plugins/auth'
import { useAuthStore } from '~/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (to && to.hash) {
      return {
        el: to.hash,
      }
    }

    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
    })
  },
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (from.name === undefined) {
    await authState.then(user => {
      if (user) {
        console.log(user)

        authStore.setUser(user as object)
      }
    })
  }

  if (to.meta.auth === 'guest' && authStore.loggedIn) {
    next(from.fullPath || '/')
  } else if (to.meta.auth === 'member' && !authStore.loggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
