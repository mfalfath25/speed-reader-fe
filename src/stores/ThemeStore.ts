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
        theme: 'winter',
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'winter' ? 'night' : 'winter',
          })),
      }),
      {
        name: 'theme-store',
        getStorage: () => localStorage,
      }
    )
  )
)
