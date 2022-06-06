<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
  title: "Login",
  meta: [{ name: "description", content: "Login" }],
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl">Login</h1>
    <form>
      <div class="space-y-2">
        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">What is your name?</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
          />
          <label class="label">
            <span class="label-text-alt">Alt label</span>
            <span class="label-text-alt">Alt label</span>
          </label>
        </div>

        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">What is your name?</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
          />
          <label class="label">
            <span class="label-text-alt">Alt label</span>
            <span class="label-text-alt">Alt label</span>
          </label>
        </div>

        <div class="space-x-2">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: everyone
</route>
