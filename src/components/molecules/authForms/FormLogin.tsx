import React from 'react'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../api/mutation'
import { useUserStore } from '../../../stores/UserStore'
import { FormLoginValues } from '../../../types/model'
import { Button } from '../../atoms'
import { ToastAlert } from '../../atoms'
import { useSettingStore } from '../../../stores'

export const FormLogin = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useUserStore()
  const { settingData, setSettingData } = useSettingStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginValues>()

  const { mutate, isLoading } = useLoginMutation()

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    // console.log('Login form values: ', data)
    mutate(data, {
      onSuccess: (data) => {
        setUserData({
          ...userData,
          userId: data?.data.userId,
          username: data?.data.username,
          email: data?.data.email,
          token: data?.data.token,
        })
        setSettingData({
          ...settingData,
          fixationCount: data?.data.setting.fixationCount,
          isFontSerif: data?.data.setting.isFontSerif,
          fontColor: data?.data.setting.fontColor,
        })

        setTimeout(() => {
          ToastAlert('Login berhasil', 'success')
          navigate('/', { replace: true })
        }, 1000)
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          ToastAlert(err?.response?.data.message, 'error')
        } else {
          ToastAlert('Login gagal', 'error')
        }
      },
    })
  }

  return (
    <>
      <form className="w-full sm:w-[300px] mx-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Email</label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              {...register('email', { required: true })}
            />
            <div className="flex justify-end">
              {errors.email && <span className="text-red-400">Email Incorrect</span>}
            </div>
          </div>
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Password</label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              {...register('password', {
                required: true,
              })}
            />
            <div className="flex justify-end">
              {errors.password && <span className="text-red-400">Password Incorrect</span>}
            </div>
          </div>

          <Button text="Sign In" type="submit" weight="primary" disabled={isLoading} />
        </div>
      </form>
    </>
  )
}
