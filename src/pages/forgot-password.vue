<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
  title: "Forgot Password",
  meta: [{ name: "description", content: "Forgot Password" }],
});
</script>

<template>
  <div>
    <h1>Forgot Password</h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: guest
</route>
