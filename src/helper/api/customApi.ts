import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
})

axiosInstance.interceptors.request.use(
  async config => {
    return config
  },
  (error: AxiosError) => {
    console.warn(error)
  },
)

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error?.response?.status === 401) {
      console.log('unauthorized access')
    } else if (error?.response?.status === 403) {
      console.log('access to the requested resource is forbidden')
    }
    return Promise.reject(error)
  },
)

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<T>(url, config)
    },
    delete: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.delete<T>(url, config)
    },
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.put<T>(url, body, config)
    },
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.patch<T>(url, body, config)
    },
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.post<T>(url, body, config)
    },
  }
}

export const customApi = api(axiosInstance)
