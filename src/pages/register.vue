<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useToast } from 'vue-toastification'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { auth } from '~/plugins/firebase/auth'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'

useHead({
  title: 'Register',
  meta: [{ name: 'description', content: 'Register' }],
})

const toast = useToast()

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
  // * demo
  // new Promise((resolve) => {
  //   setTimeout(() => resolve(console.log(values)), 3000)
  // })

  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user

      console.log(userCredential)

      updateProfile(user, {
        displayName: values.name,
      })

      sendEmailVerification(user)

      toast.success('success')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      // auth/email-already-in-use
      console.log(errorCode)

      // Firebase: Error (auth/email-already-in-use).
      console.log(errorMessage)

      actions.setErrors({ email: errorCode })
    })
}
</script>

<template>
  <div class="w-full max-w-sm p-4 mx-auto">
    <!-- title -->
    <h1 class="text-xl">Register</h1>

    <!-- form -->
    <Form novalidate @submit="onSubmit" v-slot="{ isSubmitting }">
      <div class="space-y-2">
        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <Field
            label="名字"
            name="name"
            as="input"
            type="name"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
            rules="required|max:20"
          />
          <label class="label">
            <ErrorMessage as="span" name="name" class="text-red-600 label-text-alt" />
          </label>
        </div>

        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <Field
            label="Email"
            name="email"
            as="input"
            type="email"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
            rules="required|email"
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
            label="密碼"
            name="password"
            as="input"
            type="password"
            placeholder="Type here"
            class="w-full max-w-xs input input-bordered"
            rules="required|min:8"
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
    </Form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: guest
</route>
