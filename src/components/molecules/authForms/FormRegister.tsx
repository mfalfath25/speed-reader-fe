import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormRegisterValues>()

  const onSubmit: SubmitHandler<FormRegisterValues> = (data) => {
    ToastAlert('Registrasi berhasil', 'promise')
    navigate('/login')
    console.log('Register form values: ', data)
  }

  return (
    <>
      <form className="w-full sm:w-[300px] mx-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Username</label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full"
              {...register('username', { required: true })}
            />
            <div className="flex justify-end">
              {errors.username && <span className="text-red-400">Username Incorrect</span>}
            </div>
          </div>
          <div className="w-auto">
            <label className="label px-0 pt-0 font-bold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register('email', { required: true })}
            />
            <div className="flex justify-end">
              {errors.username && <span className="text-red-400">Email Incorrect</span>}
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

          <Button text="Confirm" type="submit" weight="primary" />
        </div>
      </form>
    </>
  )
}
