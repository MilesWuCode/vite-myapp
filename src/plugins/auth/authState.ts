import { auth } from '~/plugins/firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

const authState = new Promise(resolve => {
  onAuthStateChanged(auth, (user): void => {
    // vuex or pinia

    resolve(user)
  })
})

export default authState
