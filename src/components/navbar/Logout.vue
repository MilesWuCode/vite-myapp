<script setup lang="ts">
import { auth } from '~/plugins/firebase/auth'
import { signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import { useLogout } from '~/plugins/auth'

const logout = useLogout()
const toast = useToast()

const onClick = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      toast.info('goodbye')

      logout()
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <button class="hover:link" @click="onClick">Logout</button>
</template>
