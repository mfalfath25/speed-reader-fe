import { baseAPI } from '../utils/axios'
import { useMutation } from '@tanstack/react-query'
import { FormLoginValues } from '../../types/model'

export const useLoginMutation = () => {
  const mutation = useMutation((data: any) => baseAPI.post('/auth/login', data), {
    onSuccess: (data) => {
      console.log('from mutation file: ', data)
    },
  })

  return mutation
}
