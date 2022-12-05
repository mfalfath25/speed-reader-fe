import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Training } from '../types/model'
import { devtools, persist } from 'zustand/middleware'
import { getTotalChunks, removeExtraWhitespaces } from '../logic/utils'

interface TrainingStore {
  trainingText: Training[]
  animatedText: string
  animationStatus: boolean

  addTrainingText: (data: Training) => void // add new trainingText
  removeTrainingText: (id: string) => void // remove trainingText by id
  resetTrainingText: () => void // reset trainingText value
  toggleAnimationStatus: () => void // toggle animation status
  updateAnimatedText: (text: string) => void // update animated text value
  clearAnimatedText: () => void // clear animated text value
}

export const useTrainingStore = create<TrainingStore>()(
  devtools(
    persist(
      (set) => ({
        animationStatus: false,
        trainingText: [],
        addTrainingText: (data) => {
          set((state) => ({
            trainingText: [
              ...state.trainingText,
              {
                trainingId: uuidv4(),
                mode: data.mode,
                text: {
                  textId: uuidv4(),
                  textLevel: data.text.textLevel,
                  textChoice: data.text.textChoice,
                  textValue: data.text.textValue,
                  textWordCount: getTotalChunks(removeExtraWhitespaces(data.text.textValue)),
                  questions: [],
                },
                chunksCount: data.chunksCount,
                wpm: data.wpm,
                accuracy: 0,
                readTime: new Date(),
                readDate: new Date(),
              },
            ],
          }))
        },
        // addtrainingText: (data: Training) => {
        //   set((state) => ({
        //     trainingText: [
        //       ...state.trainingText,
        //       {
        //         id: uuidv4(),
        //         textValue: data.textValue,
        //         chunkValue: parseInt(data.chunkValue as unknown as string) || 3,
        //         wordsPerMinute: parseInt(data.wordsPerMinute as unknown as string) || 250,
        //         textLevel: data.textLevel,
        //         textChoice: data.textChoice,
        //         wordCount: getTotalChunks(removeExtraWhitespaces(data.textValue)),
        //       },
        //     ],
        //   }))
        // },
        removeTrainingText: (id: string) => {
          set((state) => ({
            trainingText: state.trainingText.filter((item) => item.trainingId !== id),
          }))
        },
        resetTrainingText: () => set({ trainingText: [] }),
        toggleAnimationStatus: () => set((state) => ({ animationStatus: !state.animationStatus })),
        animatedText: '',
        updateAnimatedText: (text) => set({ animatedText: text }),
        clearAnimatedText: () => set({ animatedText: '' }),
      }),
      {
        name: 'animation-store',
        getStorage: () => localStorage,
      }
    )
  )
)
