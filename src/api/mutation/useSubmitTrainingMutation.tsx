import { baseAPI } from '../utils'
import { useMutation } from '@tanstack/react-query'
import { useUserStore } from '../../stores'
import { Training } from '../../types/model'

export const useSubmitTrainingMutation = () => {
  const { userData } = useUserStore()
  const mutation = useMutation((data: Training) =>
    baseAPI.post(`/training/add/${userData.userId}`, data)
  )
  return mutation
}
