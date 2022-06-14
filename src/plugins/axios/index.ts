import axios, { AxiosRequestConfig } from 'axios'
import { useAuthStore } from '~/stores/auth'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  // domain:same,csrf:on
  withCredentials: true,
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const authStore = useAuthStore()

  if (config.headers && authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }

  return config
}, error => {
  console.log('axios/request', error)

  Promise.reject(error)
})

export default instance
