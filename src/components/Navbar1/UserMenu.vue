<script setup lang="ts">
import { reactive } from "vue";
import type { Menu as MenuType } from "~/types";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const menu = reactive<MenuType[]>([
  { name: "Profile", path: "/profile" },
  { name: "Change Password", path: "/change-password" },
]);
</script>

<template>
  <Menu as="div" class="dropdown dropdown-end">
    <MenuButton class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img src="https://api.lorem.space/image/face?hash=33791" />
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
