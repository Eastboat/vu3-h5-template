import axios from 'axios'
// import type { InternalAxiosRequestConfig } from 'axios'

// type RequestConfig = InternalAxiosRequestConfig & {
//   loading?: boolean
// }
const service = axios.create({
  baseURL: '/',
  timeout: 100000
})

// const isWhiteCode = [0, 10000047, 300202, 300204, 300205, 300206, 9]
// service.interceptors.request.use(
//   (config: RequestConfig) => {
//     console.log('🚀 ~ file: request.ts:10 ~ service.interceptors.request.use ~ config:', config)
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
service.interceptors.response.use(
  (response) => {
    console.log('🚀 ~ file: request.ts:14 ~ service.interceptors.response.use ~ config:', response)
    const { data, config } = response
    //   if (isWhiteCode.includes(data.code)) {
    //     return data
    //   }
    return Promise.resolve(data)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
