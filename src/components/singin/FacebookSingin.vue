<script setup lang="ts">
import { auth } from '~/plugins/firebase/auth'
import {
  FacebookAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
  OAuthCredential,
} from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'

const provider = new FacebookAuthProvider()
provider.addScope('email')

const route = useRoute()
const router = useRouter()

// 彈窗登入
const signInPopup = () => {
  signInWithPopup(auth, provider)
    .then(
      async (result: UserCredential): Promise<void> => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: OAuthCredential | null = FacebookAuthProvider.credentialFromResult(
          result
        )
        // The signed-in user info.
        const user = result.user as User
        // ...
        console.log(user, credential)
        // login
        if (user) {
          // return previous page
          router.push(route.redirectedFrom?.fullPath || window.history.state.back || '/')
        }
      }
    )
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
