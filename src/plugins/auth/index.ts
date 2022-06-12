import axios from 'axios'
import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'

export const authState = new Promise((resolve) => {
  onAuthStateChanged(auth, async (user: User | null): Promise<void> => {
    const authStore = useAuthStore()

    if (user) {
      const idToken = await user.getIdToken()

      const data = await apiSingin(idToken)

      authStore.setUser(data)

      resolve(data)
    } else {
      authStore.setUser(null)

      resolve(null)
    }
  })
})

const apiSingin = async (idToken: string) => {
  const ax = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
  })

  await ax.get(`/sanctum/csrf-cookie`)

  const { data: { user, token } } = await ax.post(`/api/firebase/auth/singin`, {
    idToken
  })

  return user
}
