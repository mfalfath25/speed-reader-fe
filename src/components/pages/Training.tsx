import React, { useState, useEffect, useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { startTextAnimation } from '../../logic'
import { getTotalChunks, removeExtraWhitespaces } from '../../logic/utils'

interface FormValues {
  textValue: string
  chunkValue: number
  wordsPerMinute: number
}

export const Training = () => {
  const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const [blindWpm, setBlindWpm] = useState<number>(0)

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  const startSimulation = () => {
    const { textValue, chunkValue, wordsPerMinute } = getValues()
    startTextAnimation(
      textValue,
      wordsPerMinute || 100,
      chunkValue || 1,
      setTextAnimated,
      setIsDisabled
    )
  }

  const clearText = () => {
    setTextAnimated('')
    reset()
  }

  useEffect(() => {
    console.log('isDisabled is: ', isDisabled)
  }, [isDisabled])

  return (
    <div className="p-2 space-y-4">
      <form className="w-full lg:w-1/2 mx-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="textarea textarea-bordered w-full h-[200px]"
          placeholder="Type your text here..."
          defaultValue=""
          {...register('textValue', {
            onChange: (e) => {
              setTextAnimated('')
            },
          })}
        ></textarea>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="number"
            placeholder="Word chunk amount (1-5), default: 1 chunk"
            className="input input-bordered w-full"
            min="1"
            max="5"
            {...register('chunkValue')}
          />
          <input
            type="number"
            placeholder="Word per minute (100-1000), default: 100 WPM"
            className="input input-bordered w-full"
            min="100"
            max="1000"
            {...register('wordsPerMinute')}
          />
        </div>
        {errors.textValue && <span>Error occured</span>}
        <div className="flex space-x-4 justify-end">
          <button type="submit" className="btn btn-primary no-animation">
            Apply settings
          </button>
          <button
            type="reset"
            onClick={() => clearText()}
            className="btn btn-secondary no-animation"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="w-full lg:w-1/2 mx-auto relative outline outline-offset-0 outline-1 p-0 rounded-md">
        <span className="overlay-helper left-[25%] -z-1"></span>
        <span className="overlay-helper left-[50%] -z-1"></span>
        <span className="overlay-helper left-[75%] -z-1"></span>
        <pre className="relative whitespace-pre-line text-left text-base font-sans font-normal p-2">
          {watch('textValue')?.length > 0
            ? watch('textValue')
            : 'Your custom text will be shown here'}
        </pre>
        <pre
          className="absolute top-0 whitespace-pre-line text-left text-base font-sans font-normal p-2 text-cyan-500"
          // style={{ color: color?.hex }}
        >
          {watch('textValue')?.length > 0 ? textAnimated : ''}
        </pre>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 mx-auto space-y-4">
        <p>
          {watch('textValue')?.length > 0
            ? 'you are reading ' +
              getTotalChunks(removeExtraWhitespaces(watch('textValue'))) +
              ' words at ' +
              watch('wordsPerMinute') +
              ' wpm'
            : 'you are reading ' +
              getTotalChunks(removeExtraWhitespaces(watch('textValue'))) +
              ' words at ' +
              100 +
              ' wpm'}
        </p>
        <button
          id="btn-start"
          className={`btn btn-primary no-animation`}
          disabled={isDisabled}
          onClick={() => {
            startSimulation()
            setIsDisabled(true)
          }}
        >
          Start
        </button>

        {/* <Timer
              time={timer}
              setTime={setTimer}
              wpm={blindWpm}
              setWpm={setBlindWpm}
              totalChunk={getTotalChunks(removeExtraWhitespaces(watch('textValue')))}
            >
              <br />
            </Timer> */}
      </div>
    </div>
  )
}
