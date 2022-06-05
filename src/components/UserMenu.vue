<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Menu } from '~/types'

const dropdown = ref<HTMLElement>()

const menu = reactive<Menu[]>([
  { name: 'Profile', path: '/profile' },
  { name: 'Change Password', path: '/change-password' },
])

const closeDropdown = () => {
  dropdown.value?.blur()
}
</script>

<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img src="https://api.lorem.space/image/face?hash=33791" />
      </div>
    </label>
    <ul ref="dropdown" tabindex="0"
      class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li v-for="item of menu" :key="item.name">
        <router-link :to="item.path" @click="closeDropdown">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
