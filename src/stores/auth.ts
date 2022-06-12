import { defineStore } from 'pinia'

interface AuthState {
  user: object | null
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),
  getters: {
    loggedIn: (state): boolean => state.user !== null,
  },
  actions: {
    setUser(user: object | null, token: string | null) {
      this.user = user
      this.token = token
    },
  },
})
