import { baseAPI } from '../utils'
import { useMutation } from '@tanstack/react-query'
import { FormSettingsValues } from '../../types/model'
import { useUserStore } from '../../stores'

export const useEditSettingMutation = () => {
  const { userData } = useUserStore()
  const mutation = useMutation((data: FormSettingsValues) =>
    baseAPI.put(`/setting/${userData.userId}`, data)
  )

  return mutation
}
