import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Training } from '../../../types/model'
import { Button } from '../../atoms'
import { useTrainingStore } from '../../../stores'

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
    const processedText = data?.text.textValue.trimStart().trimEnd()

    addTrainingData(
      (data = {
        ...data,
        text: {
          ...data.text,
          textValue: processedText,
        },
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
        <div className="w-full">
          <div className="flex flex-row gap-x-1 sm:flex-col">
            <label className="label px-0 pt-0 font-bold">
              Input Teks Bebas
            </label>
            <label className="label px-0 pt-0 font-normal">(Text Input)</label>
          </div>
          <textarea
            className="textarea textarea-bordered h-[300px] w-full"
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
              <div className="flex flex-row gap-x-1 sm:flex-col">
                <label className="label px-0 pt-0 font-bold">
                  Jumlah Highlight Kata
                </label>
                <label className="label px-0 pt-0 font-normal">
                  (Word Chunks Count)
                </label>
              </div>
              <input
                type="number"
                placeholder="(1-5)"
                className="input input-bordered w-full"
                min="1"
                max="5"
                {...register('chunksCount', { valueAsNumber: true })}
              />
              <label className="label-text-alt">(default: 3 kata)</label>
            </div>
            <div className="w-auto">
              <div className="flex flex-row gap-x-1 sm:flex-col">
                <label className="label px-0 pt-0 font-bold">
                  Target Kata per Menit
                </label>
                <label className="label px-0 pt-0 font-normal">
                  (WPM Target)
                </label>
              </div>
              <input
                type="number"
                placeholder="(100-1000)"
                className="input input-bordered w-full"
                min="100"
                max="1000"
                {...register('wpm', { valueAsNumber: true })}
              />
              <label className="label-text-alt">(default: 250 WPM)</label>
            </div>
          </div>

          <div className="mt-2 flex flex-col justify-center gap-4 sm:mx-auto sm:w-[200px]">
            <Button text="Set Options" type="submit" style="primary" />
            <Button text="Reset" onClick={() => clearText()} />
          </div>
        </div>
      </form>
    </>
  )
}
