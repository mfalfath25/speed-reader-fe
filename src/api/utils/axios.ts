import axios from 'axios'

export const baseAPI = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true,
})

// export const AxiosInterceptor = (token?: string) => {
//   baseAPI.interceptors.request.use(
//     (config) => {
//       // Do something before request is sent
//       if (!config.headers) {
//         config.headers = {
//           'Content-Type': 'application/json',
//         }
//       }
//       config.headers.Authorization = token ? `${token}` : ''
//       return config
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error)
//     }
//   )
// }
