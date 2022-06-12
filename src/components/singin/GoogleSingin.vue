<script setup lang="ts">
import { auth } from '~/plugins/firebase/auth'
import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
  OAuthCredential,
} from 'firebase/auth'

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

// 彈窗登入
const signInPopup = () => {
  signInWithPopup(auth, provider)
    .then(
      async (result: UserCredential): Promise<void> => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(
          result
        )
        // The signed-in user info.
        const user = result.user as User
        // ...
        console.log(user, credential)
      }
    )
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
      console.log(errorCode, errorMessage, email, credential)
    })
}
</script>

<template>
  <button type="button" class="w-full btn" @click="signInPopup">Google</button>
</template>
