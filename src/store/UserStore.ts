import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { devtools, persist } from 'zustand/middleware'
import { Trainee } from '../types/model'

interface UserStore {
  userData: Trainee
  setUserData: (data: Trainee) => void
  editUsername: (data: string) => void
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
          tests: [],
        },
        setUserData: (data) => {
          set((state) => ({
            userData: {
              userId: data.userId,
              username: data.username,
              email: data.email,
              tests: data.tests,
            },
          }))
        },
        editUsername: (data) => {
          set((state) => ({
            userData: {
              ...state.userData,
              username: data,
            },
          }))
        },
        clearUserData: () => {
          set((state) => ({
            userData: {
              userId: '',
              username: '',
              email: '',
              tests: [],
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
