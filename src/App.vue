<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { apiSingOut } from '~/plugins/auth'
import { resolveObjectURL } from 'buffer'

const route = useRoute()
const router = useRouter()

useHead({
  title: 'Site Title',
  meta: [{ name: 'description', content: 'Site Description' }],
})

onAuthStateChanged(
  auth,
  async (user: User | null): Promise<void> => {
    if (user) {
      // 若在登入頁，回上一頁
      if (route.name === 'login') {
        // 上一頁
        const resolve = router.resolve(
          route.redirectedFrom?.fullPath || window.history.state.back || '/'
        )

        // 若是訪客頁
        router.push(resolve.meta.auth === 'guest' ? '/' : resolve.href)

        return
      }

      // 若在訪客頁，登入後去首頁
      if (router.currentRoute.value.meta.auth === 'guest') {
        router.push('/')

        return
      }
    } else {
      await apiSingOut()

      // 登出後，若是會員頁，回首頁
      if (router.currentRoute.value.meta.auth === 'member') {
        router.push('/')

        return
      }
    }
  }
)
</script>

<template>
  <router-view />
</template>
