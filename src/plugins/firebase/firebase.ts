import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Auth / General Use
  appId: import.meta.env.VITE_FIREBASE_APP_ID, // General Use
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // General Use
  authDomain: `${import.meta.env.VITE_FIREBASE_APP_ID}.firebaseapp.com`, // Auth with popup/redirect
  // databaseURL: `https://${import.meta.env.VITE_FIREBASE_APP_ID}.firebaseio.com`, // Realtime Database
  // storageBucket: `${import.meta.env.VITE_FIREBASE_APP_ID}.appspot.com`, // Storage
  // messagingSenderId: `123456789`, // Cloud Messaging
  // measurementId: `G-12345` // Analytics
})