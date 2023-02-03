import { useSettingStore, useTrainingStore, useUserStore } from "../stores"

export const useStoreCleanup = () => {
  const { clearUserData } = useUserStore()
  const { clearTrainingData } = useTrainingStore()
  const { clearSettingData } = useSettingStore()

  const clearAllData = () => {
    clearUserData()
    clearTrainingData()
    clearSettingData()
  }

  return { clearAllData }
}
