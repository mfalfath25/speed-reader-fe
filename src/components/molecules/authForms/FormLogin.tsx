import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../store/UserStore'
import { FormLoginValues } from '../../../types/model'
import { Button } from '../../atoms'

export const FormLogin = () => {
  const navigate = useNavigate()
  const { userData, setUserData } = useUserStore()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormLoginValues>()

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    localStorage.setItem('user', JSON.stringify(data.username))
    setUserData({ ...userData, username: data.username, email: data.username + '@gmail.com' })
    navigate('/')
    console.log('Login form values: ', data)
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
