import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'
import axios from 'axios'

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

export const useLogin = () => {
  const authStore = useAuthStore()

  return async (idToken: string, user?: User) => {
    const data = await apiSingin(idToken)

    authStore.setUser(data)
  }
}

export const useLogout = () => {
  const authStore = useAuthStore()
  const router = useRouter()

  return () => {
    authStore.setUser(null)

    if (router.currentRoute.value.meta.auth === 'member') {
      router.push('/')
    }
  }
}
