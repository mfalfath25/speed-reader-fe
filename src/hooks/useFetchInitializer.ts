import { useUserQuery } from '../api/query'
import { useUserStore, useSettingStore } from '../stores'

export const useFetchInitializer = () => {
  const { userData, setUserData } = useUserStore()
  const { setSettingData } = useSettingStore()
  const { data } = useUserQuery()

  const initializeUserData = () => {
    if (data) {
      setUserData({
        ...userData,
        trainings: data?.data.data.trainings || [],
      })
      setSettingData({
        isFontSerif: data?.data.data.setting.isFontSerif || true,
        fixationCount: data?.data.data.setting.fixationCount || 0,
        fontColor: data?.data.data.setting.fontColor || '#000000',
      })
    }
  }

  return { initializeUserData }
}
