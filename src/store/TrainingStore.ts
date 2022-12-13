import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Training } from '../types/model'
import { devtools, persist } from 'zustand/middleware'
import { getTotalChunks, removeExtraWhitespaces } from '../logic/utils'

interface TrainingStore {
  trainingData: Training[]
  animatedText: string
  animationStatus: boolean

  addTrainingData: (data: Training) => void // add new TrainingData
  setTrainingText: (text: string) => void // set TrainingData text
  modifyTrainingData: (id: string, data: Training) => void // modify TrainingData by id
  removeTrainingData: (id: string) => void // remove TrainingData by id
  resetTrainingData: () => void // reset TrainingData value
  toggleAnimationStatus: () => void // toggle animation status
  updateAnimatedText: (text: string) => void // update animated text value
  clearAnimatedText: () => void // clear animated text value
}

export const useTrainingStore = create<TrainingStore>()(
  devtools(
    persist(
      (set) => ({
        animationStatus: false,
        trainingData: [],
        addTrainingData: (data) => {
          set((state) => ({
            trainingData: [
              ...state.trainingData,
              {
                trainingId: uuidv4(),
                traineeId: data.traineeId,
                mode: data.mode,
                text: {
                  textLevel: data.text.textLevel || '-',
                  textChoice: data.text.textChoice || '-',
                  textValue: data.text.textValue || '-',
                  textWordCount: getTotalChunks(removeExtraWhitespaces(data.text.textValue)),
                  questionPairId: data.text.questionPairId || 0,
                  questions: data.text.questions || undefined,
                },
                chunksCount: data.chunksCount || 0,
                wpm: data.wpm || 0,
                accuracy: data.accuracy || 0,
                readTime: data.readTime || 0,
                readDate: new Date(),
                answers: data.answers,
              },
            ],
          }))
        },
        setTrainingText: (text) => {
          set((state) => ({
            trainingData: state.trainingData.map((item) => ({
              ...item,
              text: {
                ...item.text,
                textValue: text,
                textWordCount: getTotalChunks(removeExtraWhitespaces(text)),
              },
            })),
          }))
        },
        modifyTrainingData: (id, data) => {
          set((state) => ({
            trainingData: state.trainingData.map((item) => {
              if (item.trainingId === id) {
                return {
                  ...item,
                  mode: data.mode,
                  text: {
                    textId: uuidv4(),
                    textLevel: data.text.textLevel || '-',
                    textChoice: data.text.textChoice || '-',
                    textValue: data.text.textValue || '-',
                    textWordCount: getTotalChunks(removeExtraWhitespaces(data.text.textValue)),
                    questionPairId: data.text.questionPairId || 0,
                    questions: data.text.questions || undefined,
                  },
                  chunksCount: data.chunksCount || 0,
                  wpm: data.wpm || 0,
                  accuracy: data.accuracy || 0,
                  readTime: data.readTime || 0,
                  readDate: new Date(),
                  answers: data.answers,
                }
              }
              return item
            }),
          }))
        },
        removeTrainingData: (id: string) => {
          set((state) => ({
            trainingData: state.trainingData.filter((item) => item.trainingId !== id),
          }))
        },
        resetTrainingData: () => set({ trainingData: [] }),
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
