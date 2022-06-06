<script setup lang="ts">
import { ref } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from "@headlessui/vue";
import Menu from "~/components/Menu.vue";
import UserMenu from "~/components/UserMenu.vue";

const isOpen = ref<boolean>(false);
</script>

<template>
  <div class="flex min-h-screen">
    <!-- sidebar -->
    <TransitionRoot :show="isOpen">
      <!-- dialog -->
      <Dialog as="div" @close="isOpen = false" class="fixed inset-0 z-50 md:hidden">
        <!-- sidebar-content -->
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-200 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-200 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative z-10 flex flex-col w-64 h-full border-r border-gray-200 md:hidden bg-gray-50"
          >
            <!-- logo -->
            <div class="px-6 py-4">Logo</div>

            <!-- menu -->
            <div class="flex-1 overflow-y-auto">
              <Menu v-model="isOpen" />
            </div>
          </div>
        </TransitionChild>

        <!-- sidebar-background -->
        <TransitionChild
          enter="transition-opacity ease-linear duration-200"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-200"
          leave-from="opacity-0"
          leave-to="opacity-100"
        >
          <DialogOverlay as="div" class="fixed inset-0 bg-black/30"></DialogOverlay>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <!-- left -->
    <div class="hidden w-64 bg-gray-50 md:block">
      <!-- logo -->
      <div class="px-6 py-4">
        <router-link to="/">Logo</router-link>
      </div>

      <!-- menu -->
      <div>
        <Menu />
      </div>
    </div>

    <!-- right -->
    <div class="flex-1">
      <!-- navbar -->
      <div class="navbar bg-base-100">
        <!-- navbar-left -->
        <div class="flex-1">
          <!-- sidebar-toggle -->
          <button class="btn btn-square btn-ghost md:hidden" @click="isOpen = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <!-- logo -->
          <router-link to="/" class="text-xl">Logo</router-link>
        </div>

        <!-- navbar-right -->
        <div class="flex-none">
          <UserMenu />
        </div>
      </div>

      <!-- content -->
      <router-view />
    </div>
  </div>
</template>
