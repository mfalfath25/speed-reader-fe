import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Settings } from './../types/model'

export interface SettingStoreProps {
  settingData: Settings
  setSettingData: (data: Settings) => void
  clearSettingData?: () => void
}

export const useSettingStore = create<SettingStoreProps>()(
  devtools(
    persist(
      (set) => ({
        settingData: {
          isFontSerif: true,
          fixationCount: 0,
          fontColor: '#000000',
        },
        setSettingData: (data) =>
          set((state) => ({
            settingData: {
              ...state.settingData,
              isFontSerif: data.isFontSerif,
              fixationCount: data.fixationCount,
              fontColor: data.fontColor,
            },
          })),
        clearSettingData: () =>
          set((state) => ({
            settingData: {
              ...state.settingData,
              isFontSerif: true,
              fixationCount: 0,
              fontColor: '#000000',
            },
          })),
      }),
      {
        name: 'setting-store',
        getStorage: () => localStorage,
      }
    )
  )
)
