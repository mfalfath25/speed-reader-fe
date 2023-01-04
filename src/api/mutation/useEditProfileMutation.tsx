import { baseAPI } from '../utils/axios'
import { useMutation } from '@tanstack/react-query'
import { FormEditProfileValues } from '../../types/model'
import { useUserStore } from '../../stores'

export const useEditProfileMutation = () => {
  const { userData } = useUserStore()
  const mutation = useMutation((data: FormEditProfileValues) =>
    baseAPI.put(`/auth/users/${userData.userId}`, data)
  )

  return mutation
}
