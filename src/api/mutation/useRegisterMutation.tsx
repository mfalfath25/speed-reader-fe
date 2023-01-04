import { baseAPI } from '../utils/axios'
import { useMutation } from '@tanstack/react-query'
import { FormRegisterValues } from '../../types/model'

export const useRegisterMutation = () => {
  const mutation = useMutation((data: FormRegisterValues) => baseAPI.post('/auth/register', data))

  return mutation
}
