<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useToast } from 'vue-toastification'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { auth } from '~/plugins/firebase/auth'
import { updatePassword } from 'firebase/auth'

useHead({
  title: 'Change Password',
  meta: [{ name: 'description', content: 'Change Password' }],
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
  const user = auth.currentUser

  if (!user) {
    toast.info('Please refresh your page')

    return
  }

  updatePassword(user, values.password)
    .then(() => {
      toast.success('success')

      actions.resetForm()
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      //
      console.log(errorCode, errorMessage)

      actions.setErrors({ password: errorCode })
    })
}
</script>

<template>
  <div class="w-full max-w-sm p-4 mx-auto">
    <!-- title -->
    <h1 class="text-xl">Change Password</h1>

    <!-- form -->
    <Form novalidate @submit="onSubmit" v-slot="{ isSubmitting }">
      <div class="space-y-2">
        <div class="w-full max-w-xs form-control">
          <label class="label">
            <span class="label-text">Change Password</span>
          </label>
          <Field
            label="密碼"
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
    </Form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: member
</route>
