import { defineStore } from 'pinia'

interface User {
  uid: string
  name: string
  email: string | null
  image: string | null
}
interface AuthState {
  user: User | null
  token?: string | null
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
    setUser(user: object | null, token?: string | null) {
      this.user = user
      this.token = token
    },
  },
})
