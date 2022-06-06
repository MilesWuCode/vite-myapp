<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Profile',
  meta: [
    { name: 'description', content: 'Profile' },
  ],
})
</script>

<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: everyone
</route>
