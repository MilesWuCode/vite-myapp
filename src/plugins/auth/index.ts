import axios from 'axios'
import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'

export const authState = new Promise((resolve) => {
  onAuthStateChanged(auth, async (user: User | null): Promise<void> => {
    if (user) {
      const idToken = await user.getIdToken()

      const data = await apiSingin(idToken)

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

const apiSingin = async (idToken: string) => {
  const authStore = useAuthStore()

  await ax.get(`/sanctum/csrf-cookie`)

  const { data: { user, token } } = await ax.post(`/api/firebase/auth/singin`, {
    idToken
  })

  authStore.setUser(user, token)

  return user
}

export const apiSingOut = async () => {
  const authStore = useAuthStore()

  if (!authStore.token) {
    return
  }

  await ax.get(`/sanctum/csrf-cookie`)

  await ax.post(`/api/auth/logout`, {}, {
    headers: {
      'Authorization': `Bearer ${authStore.token}`,
    }
  })

  authStore.setUser(null, null)
}
