import { useLoginMutation } from './../api/mutation/useLoginMutation'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { FormLoginValues, Trainee } from '../types/model'

interface UserStore {
  userData: Trainee
  setUserData: (data: Trainee) => void
  // fetchUserData: (formData: FormLoginValues) => void
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
          token: '',
        },
        setUserData: (data) => {
          set((state) => ({
            userData: {
              ...state.userData,
              userId: data.userId,
              username: data.username,
              email: data.email,
              token: data.token,
            },
          }))
        },
        // fetchUserData: (formData) => {
        //   const { mutate } = useLoginMutation()
        //   mutate(formData, {
        //     onSuccess: (data) => {
        //       set((state) => ({
        //         userData: {
        //           ...state.userData,
        //           userId: data.data.userId,
        //           username: data.data.username,
        //           email: data.data.email,
        //           token: data.data.token,
        //         },
        //       }))
        //     },
        //   })
        // },
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
              token: '',
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
