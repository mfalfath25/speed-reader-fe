import React from 'react'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../../stores/UserStore'
import { FormEditProfileValues } from '../../../types/model'
import { Button, ToastAlert } from '../../atoms'
import { useEditProfileMutation } from '../../../api/mutation'

export const EditProfile = () => {
  const navigate = useNavigate()
  const { userData, editUserData } = useUserStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEditProfileValues>()

  const { mutate, isLoading } = useEditProfileMutation()

  const onSubmit: SubmitHandler<FormEditProfileValues> = (data) => {
    // console.log('Edit profile form values: ', data)
    mutate(data, {
      onSuccess: (data) => {
        editUserData(data.data.data.username)
        ToastAlert(data.data.message, 'success')

        setTimeout(() => {
          navigate(-1)
        }, 1000)
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          ToastAlert(err?.response?.data.message, 'error')
        } else {
          ToastAlert('Edit profile gagal', 'error')
        }
      },
    })
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
              {...register('username', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z0-9.,$;]+$/,
                  message: 'Username tidak valid',
                },
              })}
            />
            <div className="flex justify-end">
              {errors.username && <span className="text-red-400">{errors.username.message}</span>}
            </div>
          </div>

          <div className="w-full sm:w-1/3">
            <Button text="Save" type="submit" weight="primary" width="full" disabled={isLoading} />
          </div>
        </form>
      </div>
    </>
  )
}
