<script setup lang="ts">
import { reactive } from 'vue'
import type { Menu } from '~/types'

const menu = reactive<Menu[]>([
  { name: 'Index', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
  { name: 'Fogot Password', path: '/fogot-password' },
])
</script>

<template>
  <ul class="menu">
    <li v-for="item of menu" :key="item.name">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
</template>
