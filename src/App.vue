<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { apiSingOut } from '~/plugins/auth'

const route = useRoute()
const router = useRouter()

useHead({
  title: 'Site Title',
  meta: [{ name: 'description', content: 'Site Description' }],
})

onAuthStateChanged(auth, async (user: User | null): Promise<void> => {
  console.log('app')

  if (user) {
    if (route.name === 'login') {
      router.push(route.redirectedFrom?.fullPath || window.history.state.back || '/')

      return
    }

    if (router.currentRoute.value.meta.auth === 'guest') {
      router.push('/')

      return
    }
  } else {
    await apiSingOut()

    if (router.currentRoute.value.meta.auth === 'member') {
      router.push('/')

      return
    }
  }
})
</script>

<template>
  <router-view />
</template>
