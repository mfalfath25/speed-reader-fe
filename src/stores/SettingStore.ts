import { SettingsValues } from './../types/model'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SettingStore {
  isFontSerif: boolean
  isJustified: boolean
  fixationCount: number
  fontColor: string
  settingData: SettingsValues

  toggleFontSerif: () => void
  toggleJustification: () => void
  updateFontColor: (color: string) => void
  updateFixationCount: (count: number) => void
  setSettingData: (data: SettingsValues) => void
  clearSettingData: () => void
}

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist(
      (set) => ({
        isFontSerif: true,
        toggleFontSerif: () => set((state) => ({ isFontSerif: !state.isFontSerif })),
        isJustified: false,
        toggleJustification: () => set((state) => ({ isJustified: !state.isJustified })),
        fixationCount: 0,
        updateFixationCount: (count) => set({ fixationCount: count }),
        fontColor: '#000000',
        updateFontColor: (color) => set({ fontColor: color }),
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
