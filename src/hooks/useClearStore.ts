import { useSettingStore, useTrainingStore, useUserStore } from '../stores'

export const useClearStore = () => {
  const { clearUserData } = useUserStore()
  const { clearTrainingData } = useTrainingStore()
  const { clearSettingData } = useSettingStore()

  const clearStores = () => {
    clearUserData()
    clearTrainingData()
    clearSettingData()
  }

  return { clearStores }
}
