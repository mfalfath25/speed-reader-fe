import { baseAPI } from '../utils/axios'
import { useMutation } from '@tanstack/react-query'
import { FormLoginValues } from '../../types/model'

export const useLoginMutation = () => {
  const mutation = useMutation((data: FormLoginValues) => baseAPI.post('/auth/login', data))

  return mutation
}
