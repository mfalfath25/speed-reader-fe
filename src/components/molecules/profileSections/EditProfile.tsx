import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../stores/UserStore'
import { FormEditProfileValues } from '../../../types/model'
import { Button } from '../../atoms'

export const EditProfile = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormEditProfileValues>()

  const { userData, editUsername } = useUserStore()

  const onSubmit: SubmitHandler<FormEditProfileValues> = (data) => {
    editUsername(data.username)
    navigate('/profile', { replace: true })
    console.log(data)
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <form
          className="flex flex-col justify-center items-center mx-auto w-full gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full sm:w-1/3">
            <label className="label px-0 pt-0 font-bold">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
              defaultValue={userData.username}
              minLength={3}
              maxLength={20}
              {...register('username', { required: true })}
            />
            <div className="flex justify-end">
              {errors.username && <span className="text-red-400">Username cannot be empty</span>}
            </div>
          </div>

          <div className="w-full sm:w-1/3">
            <Button text="Save" type="submit" weight="primary" width="full" />
          </div>
        </form>
      </div>
    </>
  )
}
