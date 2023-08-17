import axios from 'axios'

export const apiAxios = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    'app-id': '64de6c7fb29f05c6cbce7d23'
  }
})

apiAxios.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  return config
}, (error) => {
  return Promise.reject(error)
})
