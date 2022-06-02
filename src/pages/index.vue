<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Index',
  meta: [
    { name: 'description', content: 'Index' },
  ],
})
</script>

<template>
  <div>
    <h1>Index</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: everyone
</route>
