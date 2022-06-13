import axios from 'axios'
import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'

export const authState = new Promise((resolve) => {
  onAuthStateChanged(auth, async (user: User | null): Promise<void> => {
    if (user) {
      const data = await apiSingIn(user)

      resolve(data)
    } else {
      resolve(null)
    }
  })
})

const ax = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
})

const apiSingIn = async (user: User) => {
  const authStore = useAuthStore()

  if (import.meta.env.VITE_API_URL) {
    const idToken = await user.getIdToken()

    await ax.get(`/sanctum/csrf-cookie`)

    const { data } = await ax.post(`/api/firebase/auth/singin`, {
      idToken
    })

    authStore.setUser(data.user, data.token)

    return data.user
  } else {
    authStore.setUser(user)
    return user
  }


}

export const apiSingOut = async () => {
  const authStore = useAuthStore()

  authStore.setUser(null, null)

  if (import.meta.env.VITE_API_URL) {
    if (!authStore.token) {
      return
    }

    await ax.get(`/sanctum/csrf-cookie`)

    await ax.post(`/api/auth/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
      }
    })
  }
}
