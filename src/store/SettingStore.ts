import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SettingStore {
  isFontSerif: boolean
  isJustified: boolean
  fixationCount: number
  fontColor: string

  toggleFontSerif: () => void
  toggleJustification: () => void
  updateFontColor: (color: string) => void
  updateFixationCount: (count: number) => void
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
      }),
      {
        name: 'setting-store',
        getStorage: () => localStorage,
      }
    )
  )
)
