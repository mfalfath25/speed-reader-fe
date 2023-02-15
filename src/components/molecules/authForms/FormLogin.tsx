import React, { useEffect } from 'react'

// types
import { FormLoginValues } from '../../../types/model'
import { AxiosError } from 'axios'

// components
import { Button } from '../../atoms'
import { ToastAlert } from '../../atoms'

// hooks
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLoginMutation } from '../../../api/mutation'
import { useUserStore } from '../../../stores/UserStore'
import { useSettingStore } from '../../../stores'

export const FormLogin = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useUserStore()
  const { setSettingData } = useSettingStore()

  const { mutate, isLoading } = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginValues>()

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        if (res?.status === 200) {
          setUserData({
            ...userData,
            userId: res?.data.userId,
            username: res?.data.username,
            email: res?.data.email,
            token: res?.data.token,
            trainings: res?.data.trainings,
          })

          setSettingData({
            ...setSettingData,
            isFontSerif: res?.data.setting.isFontSerif,
            fixationCount: res?.data.setting.fixationCount,
            fontColor: res?.data.setting.fontColor,
          })

          setTimeout(() => {
            ToastAlert('Login berhasil', 'success')
            navigate('/', { replace: true })
          }, 500)
        }
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          if (!err?.response) {
            ToastAlert(err?.message, 'error')
          } else {
            ToastAlert('Login gagal', 'error')
          }
        }
      },
    })
  }

  return (
    <>
      <form
        className="mx-auto w-full space-y-4 sm:w-[300px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Email</label>
            <input
              type="email"
              placeholder="email"
              className="input-bordered input w-full"
              {...register('email', { required: true })}
            />
            <div className="flex justify-end">
              {errors.email && (
                <span className="text-red-400">Email Incorrect</span>
              )}
            </div>
          </div>
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Password</label>
            <input
              type="password"
              placeholder="password"
              className="input-bordered input w-full"
              {...register('password', {
                required: true,
              })}
            />
            <div className="flex justify-end">
              {errors.password && (
                <span className="text-red-400">Password Incorrect</span>
              )}
            </div>
          </div>

          <Button
            text="Sign In"
            type="submit"
            weight="primary"
            disabled={isLoading}
          />
        </div>
      </form>
    </>
  )
}
