import { SettingsValues } from './../types/model'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SettingStore {
  settingData: SettingsValues
  setSettingData: (data: SettingsValues) => void
  clearSettingData: () => void
}

export const useSettingStore = create<SettingStore>()(
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
