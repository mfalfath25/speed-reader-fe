import { baseAPI } from './baseApi'

export const requestWrapper = async ({ ...options }, token: any) => {
  baseAPI.defaults.headers.common.Authorization = token || 'no-token'

  const onSuccess = (response: any) => {
    return response.data
  }

  const onError = (error: any) => {
    return Promise.reject(error.response || error.message)
  }

  try {
    const response = await baseAPI(options)
    return onSuccess(response)
  } catch (error) {
    return onError(error)
  }
}
