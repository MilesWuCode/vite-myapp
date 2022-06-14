<script setup lang="ts">
import { reactive } from 'vue'
import { useHead } from '@vueuse/head'
import axios from '~/plugins/axios'

useHead({
  title: 'Profile',
  meta: [{ name: 'description', content: 'Profile' }],
})

const user = reactive({
  name: '',
  email: '',
})

axios
  .get('/api/me')
  .then(({ data }) => {
    user.name = data?.data?.name
    user.email = data?.data?.email
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('finally')
  })
</script>

<template>
  <div>
    <h1>Profile</h1>
  </div>
  {{user}}

  <!-- form -->
  <!-- <Form novalidate @submit="onSubmit" v-slot="{ isSubmitting }">
      <div class="space-y-2">
        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <Field
            name="email"
            as="input"
            type="email"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
            rules="required|email"
            autocomplete="on"
          />
          <label class="label">
            <ErrorMessage as="span" name="email" class="text-red-600 label-text-alt" />
          </label>
        </div>

        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <Field
            name="password"
            as="input"
            type="password"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
            rules="required"
            autocomplete="on"
          />
          <label class="label">
            <ErrorMessage as="span" name="password" class="text-red-600 label-text-alt" />
          </label>
        </div>

        <div class="space-x-2">
          <button
            type="submit"
            :disabled="isSubmitting"
            :class="{ loading: isSubmitting }"
            class="btn btn-primary"
          >
            Submit
          </button>
          <button type="reset" class="btn" :disabled="isSubmitting">Reset</button>
        </div>
      </div>
    </Form> -->
</template>

<route lang="yaml">
meta:
  layout: default
  auth: member
</route>
