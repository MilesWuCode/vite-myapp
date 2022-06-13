<script setup lang="ts">
import { reactive } from 'vue'
import type { Menu as MenuType } from '~/types'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useAuthStore } from '~/stores/auth'

const menu = reactive<MenuType[]>([
  { name: 'Profile', path: '/profile' },
  { name: 'Change Password', path: '/change-password' },
])

const authStore = useAuthStore()
</script>

<template>
  <Menu as="div" class="dropdown dropdown-end">
    <MenuButton class="btn btn-ghost btn-circle avatar placeholder">
      <div v-if="authStore.user?.image" class="w-10 rounded-full">
        <img :src="authStore.user?.image" />
      </div>
      <div v-else class="w-10 bg-green-500 rounded-full">
        <span class="text-lg text-white">?</span>
      </div>
    </MenuButton>
    <MenuItems
      as="ul"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
    >
      <MenuItem as="li" v-for="item of menu" :key="item.name">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
