<script setup lang="ts">
import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

// 觀查變化
onAuthStateChanged(auth, (user): void => {
  console.log('onAuthStateChanged')
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid
    // ...
    console.log('onAuthStateChanged', user)
  } else {
    // User is signed out
    // ...
    console.log('User is signed out')
  }
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
