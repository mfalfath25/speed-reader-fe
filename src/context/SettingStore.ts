import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SettingStore {
  isFontSerif: boolean
  fontColor: string
  fixationCount: number

  toggleFontSerif: () => void
  updateFontColor: (color: string) => void
  updateFixationCount: (count: number) => void
}

export const useSettingStore = create<SettingStore>()(
  devtools(
    persist(
      (set) => ({
        isFontSerif: true,
        toggleFontSerif: () => set((state) => ({ isFontSerif: !state.isFontSerif })),
        fontColor: '#000000',
        updateFontColor: (color) => set({ fontColor: color }),
        fixationCount: 3,
        updateFixationCount: (count) => set({ fixationCount: count }),
      }),
      {
        name: 'setting-store',
        getStorage: () => localStorage,
      }
    )
  )
)
