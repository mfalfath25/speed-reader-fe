import React from 'react'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../../api/mutation'
import { FormRegisterValues } from '../../../types/model'
import { Button, ToastAlert } from '../../atoms'

export const FormRegister = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormRegisterValues>()

  const { mutate, isLoading } = useRegisterMutation()

  const onSubmit: SubmitHandler<FormRegisterValues> = (data) => {
    // console.log('Register form values: ', data)
    mutate(data, {
      onSuccess: (data) => {
        if (data instanceof AxiosError) {
          ToastAlert(data?.response?.data.message, 'error')
        } else {
          setTimeout(() => {
            ToastAlert(data.data.message, 'success')
            reset()
            navigate('/login', { replace: true })
          }, 500)
        }
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          if (!err?.response) {
            ToastAlert(err?.message, 'error')
          } else {
            ToastAlert('Register gagal', 'error')
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
            <label className="label px-0 pt-0 font-bold">Username</label>
            <input
              type="text"
              placeholder="username"
              className="input-bordered input w-full"
              {...register('username', { required: true })}
            />
            <div className="flex justify-end">
              {errors.username && (
                <span className="text-red-400">Username kosong</span>
              )}
            </div>
          </div>
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input-bordered input w-full"
              {...register('email', { required: true })}
            />
            <div className="flex justify-end">
              {errors.username && (
                <span className="text-red-400">Email kosong</span>
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
                <span className="text-red-400">Password kosong</span>
              )}
            </div>
          </div>

          <Button
            text="Confirm"
            type="submit"
            weight="primary"
            disabled={isLoading}
          />
        </div>
      </form>
    </>
  )
}
