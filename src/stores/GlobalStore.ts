import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface GlobalStore {
  isLoading: boolean
  setIsLoading: (data: boolean) => void
}

export const useGlobalStore = create<GlobalStore>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        setIsLoading: (data) => {
          set((state) => ({
            isLoading: data,
          }))
        },
      }),
      {
        name: 'global-store',
      }
    )
  )
)
