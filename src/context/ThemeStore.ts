import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ThemeStore {
  theme: string
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        theme: 'night',
        toggleTheme: () =>
          set((state) => ({ theme: state.theme === 'night' ? 'winter' : 'night' })),
      }),
      {
        name: 'theme-store',
        getStorage: () => localStorage,
      }
    )
  )
)
