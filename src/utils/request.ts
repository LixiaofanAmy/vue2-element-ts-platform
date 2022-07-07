import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const _axios = axios.create()

_axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.common['Authorization'] = token
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    // const status = error.toJSON().status
    // 根据 status 做全局错误处理
    return Promise.reject(error)
  }
)

export default _axios
