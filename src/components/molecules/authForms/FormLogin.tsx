import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../api/mutation'
import { useUserStore } from '../../../store/UserStore'
import { FormLoginValues } from '../../../types/model'
import { Button } from '../../atoms'
import { ToastAlert } from '../../atoms'

export const FormLogin = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useUserStore()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormLoginValues>()

  const { mutate, isLoading } = useLoginMutation()

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    console.log('Login form values: ', data)

    mutate(data, {
      onSuccess: (data) => {
        setTimeout(() => {
          setUserData({
            userId: data.data.userId,
            username: data.data.email,
            email: data.data.email + '@gmail.com',
            token: data.data.token,
          })
          ToastAlert('Login berhasil', 'success')
          navigate('/', { replace: true })
        }, 1000)
      },
      onError: (err) => {
        console.log(err)
        ToastAlert('Login gagal', 'error')
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

          <Button text="Sign In" type="submit" weight="primary" />
        </div>
      </form>
    </>
  )
}
