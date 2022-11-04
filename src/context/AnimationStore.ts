import { FormValues } from './../types/model'
import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { CustomTraining } from '../types/model'
import { devtools, persist } from 'zustand/middleware'

interface AnimationStore {
  animationStatus: boolean
  rawText: CustomTraining[]
  animatedText: string

  addRawText: (data: FormValues) => void
  removeRawText: (id: string) => void
  resetText: () => void
  toggleAnimationStatus: () => void
  updateAnimatedText: (text: string) => void
}

export const useAnimationStore = create<AnimationStore>()(
  devtools(
    persist(
      (set) => ({
        animationStatus: false,
        rawText: [],
        addRawText: (data: FormValues) => {
          set((state) => ({
            rawText: [
              ...state.rawText,
              {
                id: uuidv4(),
                textValue: data.textValue,
                chunkValue: parseInt(data.chunkValue as unknown as string) || 3,
                wordsPerMinute: parseInt(data.wordsPerMinute as unknown as string) || 250,
              },
            ],
          }))
        },
        removeRawText: (id: string) => {
          set((state) => ({
            rawText: state.rawText.filter((item) => item.id !== id),
          }))
        },
        resetText: () => set({ rawText: [] }),
        toggleAnimationStatus: () => set((state) => ({ animationStatus: !state.animationStatus })),
        animatedText: '',
        updateAnimatedText: (text) => set({ animatedText: text }),
      }),
      {
        name: 'animation-store',
        getStorage: () => localStorage,
      }
    )
  )
)
