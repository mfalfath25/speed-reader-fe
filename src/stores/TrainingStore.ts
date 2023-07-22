import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Training } from '../types/model'
import { devtools, persist } from 'zustand/middleware'
import { getTotalChunks, removeExtraWhitespaces } from '../logic/utils'

interface TrainingStore {
  trainingData: Training[]
  addTrainingData: (data: Training) => void // add new TrainingData
  setTrainingData: (id: string, data: Training) => void // modify TrainingData by id
  clearTrainingData: () => void // reset TrainingData value
}

export const useTrainingStore = create<TrainingStore>()(
  devtools(
    persist(
      (set) => ({
        trainingData: [],
        addTrainingData: (data) => {
          set((state) => ({
            trainingData: [
              ...state.trainingData,
              {
                trainingId: uuidv4() || '-',
                mode: data.mode || '-',
                text: {
                  textLevel: data.text.textLevel || '-',
                  textChoice: data.text.textChoice || '-',
                  textValue: data.text.textValue || '-',
                  textWordCount:
                    getTotalChunks(
                      removeExtraWhitespaces(data.text.textValue)
                    ) || 0,
                  questionPairId: data.text.questionPairId || 0,
                  questions: data.text.questions || undefined,
                },
                chunksCount: data.chunksCount || 0,
                wpm: data.wpm || 0,
                accuracy: data.accuracy || 0,
                readTime: data.readTime || 0,
                readDate: new Date(),
                answers: data.answers || [],
                isSaved: false,
              },
            ],
          }))
        },
        setTrainingData: (id, data) => {
          set((state) => ({
            trainingData: state.trainingData.map((item) => {
              if (item.trainingId === id) {
                return {
                  ...item,
                  mode: data.mode,
                  text: {
                    textLevel: data.text.textLevel || '-',
                    textChoice: data.text.textChoice || '-',
                    textValue: data.text.textValue || '-',
                    textWordCount:
                      getTotalChunks(
                        removeExtraWhitespaces(data.text.textValue)
                      ) || 0,
                    questionPairId: data.text.questionPairId || 0,
                    questions: data.text.questions || undefined,
                  },
                  chunksCount: data.chunksCount || 0,
                  wpm: data.wpm || 0,
                  accuracy: data.accuracy || 0,
                  readTime: data.readTime || 0,
                  readDate: new Date(),
                  answers: data.answers || [],
                  isSaved: data.isSaved || false,
                }
              }
              return item
            }),
          }))
        },
        clearTrainingData: () => set({ trainingData: [] }),
      }),
      {
        name: 'training-store',
        getStorage: () => localStorage,
      }
    )
  )
)
