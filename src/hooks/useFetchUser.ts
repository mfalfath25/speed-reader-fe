import { useEffect } from 'react'
import { useSettingStore, useUserStore } from '../stores'
import { useUserQuery } from '../api/query'

export const useFetchUser = () => {
  const { userData, setUserData } = useUserStore()
  const { settingData, setSettingData } = useSettingStore()
  const { data, isLoading, isSuccess, isError } = useUserQuery()

  useEffect(() => {
    if (isSuccess && data) {
      setUserData({
        ...userData,
        trainings: data?.data.data.trainings || [],
      })
      setSettingData({
        ...settingData,
        isFontSerif: data?.data.data.setting.isFontSerif || false,
        fixationCount: data?.data.data.setting.fixationCount || 0,
        fontColor: data?.data.data.setting.fontColor || '#000000',
      })
    }
  }, [data, isSuccess])

  return { userData, isLoading, isSuccess, isError }
}
