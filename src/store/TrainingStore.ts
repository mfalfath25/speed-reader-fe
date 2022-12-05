import { FormValues } from '../types/model'
import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Training } from '../types/model'
import { devtools, persist } from 'zustand/middleware'
import { getTotalChunks, removeExtraWhitespaces } from '../logic/utils'

interface TrainingStore {
  animationStatus: boolean
  trainingText: Training[]
  animatedText: string

  addtrainingText: (data: FormValues) => void
  removetrainingText: (id: string) => void
  resetText: () => void
  toggleAnimationStatus: () => void
  updateAnimatedText: (text: string) => void
}

export const useTrainingStore = create<TrainingStore>()(
  devtools(
    persist(
      (set) => ({
        animationStatus: false,
        trainingText: [],
        addtrainingText: (data: FormValues) => {
          set((state) => ({
            trainingText: [
              ...state.trainingText,
              {
                id: uuidv4(),
                textValue: data.textValue,
                chunkValue: parseInt(data.chunkValue as unknown as string) || 3,
                wordsPerMinute: parseInt(data.wordsPerMinute as unknown as string) || 250,
                textLevel: data.textLevel,
                textChoice: data.textChoice,
                wordCount: getTotalChunks(removeExtraWhitespaces(data.textValue)),
              },
            ],
          }))
        },
        removetrainingText: (id: string) => {
          set((state) => ({
            trainingText: state.trainingText.filter((item) => item.id !== id),
          }))
        },
        resetText: () => set({ trainingText: [] }),
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
