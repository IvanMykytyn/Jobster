import axios from 'axios'
import { getUserFromLocalStorage } from './localStorage'

const url = 'https://jobify-prod.herokuapp.com/api/v1/toolkit'

const customFetch = axios.create({
  baseURL: url,
})

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage()
    if (user) {
      config.headers.common['Authorization'] = `Bearer ${user.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default customFetch
