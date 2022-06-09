import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

export const authState = new Promise(resolve => {
  onAuthStateChanged(auth, (user): void => {
    // vuex or pinia

    resolve(user)
  })
})

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
