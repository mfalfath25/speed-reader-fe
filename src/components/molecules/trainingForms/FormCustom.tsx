import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Training } from '../../../types/model'
import { Button } from '../../atoms'

export const FormCustom = () => {
  // global state
  const navigate = useNavigate()
  const { addTrainingData, clearTrainingData } = useTrainingStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Training>()

  const onSubmit: SubmitHandler<Training> = (data) => {
    // console.log('Custom form values: ', data)
    addTrainingData(
      (data = {
        ...data,
        mode: 'Custom',
        chunksCount: data.chunksCount ? data.chunksCount : 3,
        wpm: data.wpm ? data.wpm : 250,
      })
    )
    navigate('/training/custom/simulate')
  }

  const clearText = () => {
    clearTrainingData()
    reset()
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <>
      <form
        className="mx-auto w-full space-y-4 xl:w-[800px] 2xl:w-2/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="h-full w-full">
          <label className="label px-0 font-bold">Custom text input</label>
          <textarea
            className="textarea-bordered textarea h-[300px] w-full"
            placeholder="Type your text here..."
            defaultValue=""
            {...register('text.textValue', { required: true })}
          ></textarea>
          <div className="flex justify-end">
            {errors.text?.textValue && (
              <span className="text-red-400">Teks kosong</span>
            )}
          </div>
        </div>

        <div className="grid grid-rows-1 gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="w-auto">
              <label className="label px-0 pt-0 font-bold">Word Chunks</label>
              <input
                type="number"
                placeholder="(1-5)"
                className="input-bordered input w-full"
                min="1"
                max="5"
                {...register('chunksCount', { valueAsNumber: true })}
              />
              <label className="label-text-alt">(default: 3 chunks)</label>
            </div>
            <div className="w-auto">
              <label className="label px-0 pt-0 font-bold">Target WPM</label>
              <input
                type="number"
                placeholder="(100-1000)"
                className="input-bordered input w-full"
                min="100"
                max="1000"
                {...register('wpm', { valueAsNumber: true })}
              />
              <label className="label-text-alt">(default: 250 WPM)</label>
            </div>
          </div>

          <div className="grid  gap-4">
            <Button text="Set Options" type="submit" weight="primary" />
            <Button text="Reset" outline onClick={() => clearText()} />
          </div>
        </div>
      </form>
    </>
  )
}
