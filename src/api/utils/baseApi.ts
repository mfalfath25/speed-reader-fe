import axios from 'axios'

export const baseAPI = axios.create({
  baseURL: 'https://sr-backend.cyclic.app/api/v1',
  // baseURL: 'http://localhost:8080/api/v1',
  withCredentials: true,
})
