<script setup lang="ts">
import { auth } from '~/plugins/firebase/auth'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuthStore } from '~/stores/auth'

const provider = new FacebookAuthProvider()
provider.addScope('email')

const authStore = useAuthStore()

// 彈窗登入
const signInPopup = () => {
  signInWithPopup(auth, provider)
    .then((result: any): void => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential: any = FacebookAuthProvider.credentialFromResult(result)
      // The signed-in user info.
      const user = result.user
      // ...
      console.log(user, credential)
      // store
      authStore.setUser(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error)
      // ...
      console.log(errorCode, errorMessage, email, credential)
    })
}
</script>

<template>
  <button type="button" class="w-full btn" @click="signInPopup">Facebook</button>
</template>
