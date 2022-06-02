<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: '404 - Not Found',
  meta: [
    { name: 'description', content: '404 - Not Found' },
  ],
})
</script>

<template>
  <div>
    <h1>404 - Not Found</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: everyone
</route>
