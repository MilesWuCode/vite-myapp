<script setup lang="ts">
import Menu from '~/components/Menu.vue'
</script>

<template>
  <div class="drawer">
    <input id="drawer-togger" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="drawer-togger" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">Navbar Title</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li><a>Navbar Item 1</a></li>
            <li><a>Navbar Item 2</a></li>
          </ul>
        </div>
      </div>
      <!-- content -->
      <div class="flex h-full">
        <!-- menu -->
        <Menu class="hidden w-56 h-full lg:block" />
        <!-- page -->
        <router-view />
      </div>
    </div>
    <div class="drawer-side">
      <label for="drawer-togger" class="drawer-overlay"></label>
      <Menu class="p-4 overflow-y-auto w-80 bg-base-100" />
    </div>
  </div>
</template>
