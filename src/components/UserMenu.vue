<script setup lang="ts">
import { ref } from 'vue'

const dropdown = ref<HTMLElement>()

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
      <li><a @click="closeDropdown">Profile</a></li>
      <li><a @click="closeDropdown">Settings</a></li>
      <li><a @click="closeDropdown">Logout</a></li>
    </ul>
  </div>
</template>
