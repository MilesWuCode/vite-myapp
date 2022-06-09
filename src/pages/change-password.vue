<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Change Password',
  meta: [
    { name: 'description', content: 'Change Password' },
  ],
})
</script>

<template>
  <div>
    <h1>Change Password</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: member
</route>
