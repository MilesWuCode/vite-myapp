<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { auth } from '~/plugins/firebase/auth'
import { sendPasswordResetEmail } from 'firebase/auth'

useHead({
  title: 'Send Password Reset Email',
  meta: [{ name: 'description', content: 'Send Password Reset Email' }],
})

interface FormState {
  // any error messages
  errors: Record<string, string>
  // dirty meta flags
  dirty: Record<string, boolean>
  // touched meta flags
  touched: Record<string, boolean>
  // Form Values
  values: Record<string, any>
}

interface FormActions {
  setFieldValue: (field: string, value: any) => void
  setFieldError: (field: string, message: string | undefined) => void
  setErrors: (fields: Partial<Record<string, string | undefined>>) => void
  setValues: (fields: Partial<Record<string, any>>) => void
  setFieldTouched: (field: string, isTouched: boolean) => void
  setTouched: (fields: Partial<Record<string, boolean>>) => void
  resetForm: (state?: Partial<FormState>) => void
}

const onSubmit = (values: Record<string, any>, actions: FormActions) => {
  sendPasswordResetEmail(auth, values.email, {
    url: `${import.meta.env.VITE_BASE_URL}/login`,
  })
    .then(() => {})
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      // auth/user-not-found
      console.log(errorCode)

      // Firebase: Error (auth/wrong-password).
      console.log(errorMessage)

      actions.setErrors({ email: errorCode })
    })
}
</script>

<template>
  <div class="w-full max-w-sm p-4 mx-auto">
    <!-- title -->
    <h1 class="text-xl">Send Password Reset Email</h1>

    <!-- form -->
    <Form novalidate @submit="onSubmit" v-slot="{ isSubmitting }">
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
    </Form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: guest
</route>
