import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'
import axios from '~/plugins/axios'

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

const apiSingIn = async (user: User) => {
  const authStore = useAuthStore()

  if (import.meta.env.VITE_API_URL) {
    const idToken = await user.getIdToken()

    try {
      // domain:same,csrf:on
      await axios.get(`/sanctum/csrf-cookie`)

      const { data } = await axios.post(`/api/firebase/auth/singin`, {
        idToken
      })

      authStore.setUser({
        uid: data.user.uid,
        name: data.user.name,
        email: data.user.email,
        image: data.user.avatar,
      }, data.token)

      return data.user
    } catch (err) {
      return null
    }
  } else {
    // * user.providerData[0]:UserInfo
    console.log(user)

    authStore.setUser({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    })

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

    await axios.get(`/sanctum/csrf-cookie`)

    await axios.post(`/api/auth/logout`, {}, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
      }
    })
  }
}
