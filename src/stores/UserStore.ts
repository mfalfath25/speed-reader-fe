import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Trainee } from '../types/model'

interface UserStore {
  userData: Trainee
  setUserData: (data: Trainee) => void
  editUserData: (data: string) => void
  clearUserData: () => void
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        userData: {
          userId: '',
          username: '',
          email: '',
          token: '',
          trainings: [],
        },
        setUserData: (data) => {
          set((state) => ({
            userData: {
              ...state.userData,
              userId: data.userId,
              username: data.username,
              email: data.email,
              token: data.token,
              trainings: data.trainings,
            },
          }))
        },
        editUserData: (data) => {
          set((state) => ({
            userData: {
              ...state.userData,
              username: data,
            },
          }))
        },
        clearUserData: () => {
          set(() => ({
            userData: {
              userId: '',
              username: '',
              email: '',
              token: '',
              trainings: [],
            },
          }))
        },
      }),
      {
        name: 'user-store',
      }
    )
  )
)
