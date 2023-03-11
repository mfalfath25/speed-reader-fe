import { useEffect } from 'react'
import { useSettingStore, useUserStore } from '../stores'
import { useUserQuery } from '../api/query'

export const useFetchUser = () => {
  const { userData, setUserData } = useUserStore()
  const { settingData, setSettingData } = useSettingStore()
  const { data, isLoading, isSuccess, isError } = useUserQuery()

  useEffect(() => {
    if (isSuccess && data) {
      const { data: fetchedData } = data?.data

      setUserData({
        ...userData,
        trainings: fetchedData.trainings,
      })

      setSettingData({
        ...settingData,
        isFontSerif: fetchedData.setting.isFontSerif,
        fixationCount: fetchedData.setting.fixationCount,
        fontColor: fetchedData.setting.fontColor,
      })
    }
  }, [data, isSuccess])

  return { userData, isLoading, isSuccess, isError }
}
