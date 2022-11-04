import React, { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAnimationStore } from '../../context/AnimationStore'
import { FormValues } from '../../types/model'

export const TrainingForm = () => {
  // global state
  const navigate = useNavigate()
  const { animationStatus, addRawText, removeRawText, resetText, toggleAnimationStatus } =
    useAnimationStore()

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!data) return alert('please input some text')
    addRawText(data)
    // console.log(data)
  }

  const clearText = () => {
    resetText()
    reset()
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset, animationStatus])

  return (
    <>
      <button className="toggle-status btn btn-primary" onClick={() => toggleAnimationStatus()}>
        Change status
      </button>
      {!animationStatus && (
        <form
          className="w-full xl:w-[800px] 2xl:w-2/3 mx-auto space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full h-full">
            <label className="label py-0">
              <span className="label-text">Custom text input</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-[300px]"
              placeholder="Type your text here..."
              defaultValue=""
              {...register('textValue', { required: true })}
            ></textarea>
            <div className="flex justify-end">
              {errors.textValue && <span className="text-red-400">Text empty</span>}
            </div>
          </div>

          <div className="flex flex-col justify-end md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="block">
              <label className="label py-0">
                <span className="label-text">Word Chunks</span>
                <span className="label-text-alt md:hidden">(default: 3 chunks)</span>
              </label>
              <input
                type="number"
                placeholder="(1-5)"
                className="input input-bordered w-full"
                min="1"
                max="5"
                {...register('chunkValue')}
              />
              <label className="label hidden md:block p-0">
                <span className="label-text-alt">(default: 3 chunks)</span>
              </label>
            </div>
            <div className="block">
              <label className="label py-0">
                <span className="label-text">Word per minute (WPM)</span>
                <span className="label-text-alt md:hidden">(default: 250 WPM)</span>
              </label>
              <input
                type="number"
                placeholder="(100-1000)"
                className="input input-bordered w-full"
                min="100"
                max="1000"
                {...register('wordsPerMinute')}
              />
              <label className="label hidden md:block p-0">
                <span className="label-text-alt">(default: 250 WPM)</span>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 justify-end">
            <button type="submit" className="btn btn-primary">
              Apply settings
            </button>
            <button type="reset" onClick={() => clearText()} className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
      )}
    </>
  )
}
