import { useEffect } from 'react'
import { useSettingStore } from '../stores/SettingStore'
import { useUserStore } from '../stores'
import { useUserQuery } from '../api/query'

export const fetchUserData = () => {
  const { userData, setUserData } = useUserStore()
  const { settingData, setSettingData } = useSettingStore()
  const { data, isFetched, isError } = useUserQuery()

  useEffect(() => {
    if (isFetched && data?.data !== undefined) {
      setUserData({
        ...userData,
        trainings: data?.data.data.trainings,
      })
      setSettingData({
        isFontSerif: data?.data.data.setting.isFontSerif,
        fixationCount: data?.data.data.setting.fixationCount,
        fontColor: data?.data.data.setting.fontColor,
      })
    } else if (isError) {
      setUserData({
        ...userData,
        trainings: [],
      })
    }
  }, [])

  return { data, isFetched, isError }
}
