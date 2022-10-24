import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AnimationStore {
  animatedText: string
  updateAnimatedText: (text: string) => void
}

export const useAnimationStore = create<AnimationStore>()(
  devtools(
    persist(
      (set) => ({
        animatedText: '',
        updateAnimatedText: (text: string) => set({ animatedText: text }),
      }),
      {
        name: 'animation-storage',
      }
    )
  )
)
