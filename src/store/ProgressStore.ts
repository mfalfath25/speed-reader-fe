import { getTotalTraining } from './../logic/calculations'
import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { devtools, persist } from 'zustand/middleware'
import { Progress } from '../types/model'
import { getTotalReadTime } from '../logic'

interface ProgressStore {
  progressData: Progress
  updateProgressData: (data: Progress) => void
}

export const useUserStore = create<ProgressStore>()(
  devtools(
    persist(
      (set) => ({
        progressData: {
          progress: [],
          averageWpm: 0,
          averageAccuracy: 0,
          totalReadTime: 0,
          totalTrainingDone: 0,
        },
        updateProgressData: (data) => {
          set((state) => ({
            progressData: {
              progress: [...state.progressData.progress],
              averageWpm:
                data.progress.reduce((acc, curr) => acc + curr.wpm, 0) / data.progress.length,
              averageAccuracy:
                data.progress.reduce((acc, curr) => acc + curr.accuracy, 0) / data.progress.length,
              totalReadTime: getTotalReadTime(data.progress),
              totalTraining: getTotalTraining(data.progress),
            },
          }))
        },
      }),
      {
        name: 'progress-storage',
      }
    )
  )
)
