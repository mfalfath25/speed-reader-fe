import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { FormEditProfileValues } from '../../../types/model'
import { Button, ToastAlert } from '../../atoms'
import { useEditProfileMutation } from '../../../api/mutation'
import { useUserStore } from '../../../stores'

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
    mutate(data, {
      onSuccess: (data) => {
        editUserData(data.data.data)
        ToastAlert(data.data.message, 'success')

        setTimeout(() => {
          navigate(-1)
        }, 500)
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          if (!err?.response) {
            ToastAlert(err?.message, 'error')
          } else {
            ToastAlert('Edit profile gagal', 'error')
          }
        }
      },
    })
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <form
          className="mx-auto flex w-full flex-col items-center justify-center gap-4"
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
              {errors.username && (
                <span className="text-red-400">{errors.username.message}</span>
              )}
            </div>
          </div>

          <div className="w-full sm:w-1/3">
            <Button
              text="Save"
              type="submit"
              style="primary"
              width="full"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </>
  )
}
