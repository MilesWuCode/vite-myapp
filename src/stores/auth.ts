import { defineStore } from 'pinia'

interface User {
  user: object|null
}

export const useAuthStore = defineStore('auth', {
  state: ():User => ({
    user: null,
  }),
  getters: {
    loggedIn: (state): boolean => state.user !== null,
  },
  actions: {
    setUser(user: object|null) {
      this.user = user

      // * tip
      // if(user) {
      //   router.push(route.redirectedFrom?.fullPath || window.history.state.back || '/')
      // }else{
      //   if (router.currentRoute.value.meta.auth === 'member') {
      //     router.push('/')
      //   }
      // }
    },
  },
})
