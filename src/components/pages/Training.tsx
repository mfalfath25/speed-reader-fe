import React, { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../store/TrainingStore'
import { startTextAnimation } from '../../logic'
import { checkPathnameDepth, getTotalChunks, removeExtraWhitespaces } from '../../logic/utils'
import { Button } from '../atoms'
import { BiCog } from 'react-icons/bi'
import { TrainingForms, TrainingResults, TrainingSimulations } from '../organisms'
import { setDriver } from 'localforage'
import { trainingMenu } from '../../static/staticData'

// interface FormValues {
//   textValue: string
//   chunkValue: number
//   wordsPerMinute: number
// }

const TrainingMenu = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-cols-1 gap-8 w-full">
        <div>
          <p className="flex justify-center items-center sm:text-2xl text-xl mb-4">
            Pilih mode latihan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trainingMenu.map((menu, index) => (
              <div key={index} className="w-auto h-full">
                <div className="card-body w-full h-full bg-base-300 shadow-xl outline outline-2 rounded-lg p-4 lg:p-8">
                  <h2 className="card-title text-base sm:text-xl">{menu.description}</h2>
                  <p>{menu.info}</p>
                  <div className="card-actions justify-end">
                    <Button
                      text={menu.optionName}
                      width="full"
                      weight="primary"
                      onClick={() => {
                        navigate(menu.navigateTo)
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="w-auto h-fits">
            <p className="flex justify-center items-center sm:text-2xl text-xl mb-4">
              Ubah tampilan simulasi
            </p>
            <div className="flex justify-center">
              <Button
                text="Visual Settings"
                width="full"
                onClick={() => {
                  navigate('/training/settings')
                }}
              >
                <BiCog size={24} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Training = () => {
  const location = useLocation()
  let depths = 0

  const renderPart = () => {
    switch (checkPathnameDepth(location.pathname)) {
      case 1:
        return <TrainingMenu />
      case 2:
        return <TrainingForms />
      case 3:
        if (location.pathname.includes('result')) {
          return <TrainingResults />
        } else {
          return <TrainingSimulations />
        }
    }
  }

  const { animationStatus, trainingText } = useTrainingStore()
  // console.log(animationStatus, trainingText)

  // const [textAnimated, setTextAnimated] = useState<string | null>(null)
  // const [isDisabled, setIsDisabled] = useState<boolean>(false)
  // const [timer, setTimer] = useState<number>(0)
  // const [blindWpm, setBlindWpm] = useState<number>(0)
  // const [fixationCount, setFixationCount] = useState<number>(0)

  // const {
  //   register,
  //   handleSubmit,
  //   getValues,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm<FormValues>()

  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   console.log(data)
  // }

  // const startSimulation = () => {
  //   const { textValue, chunkValue, wordsPerMinute } = getValues()
  //   startTextAnimation(
  //     textValue,
  //     wordsPerMinute || 250,
  //     chunkValue || 3,
  //     setTextAnimated,
  //     setIsDisabled
  //   )
  // }

  // const clearText = () => {
  //   setTextAnimated('')
  //   reset()
  // }

  // const renderFixationLine = (count: number) => {
  //   switch (count) {
  //     case 0:
  //       return
  //     case 1:
  //       return (
  //         <>
  //           <span className="overlay-helper left-1/2 -z-1"></span>
  //         </>
  //       )
  //     case 2:
  //       return (
  //         <>
  //           <span className="overlay-helper left-1/3 -z-1"></span>
  //           <span className="overlay-helper left-2/3 -z-1"></span>
  //         </>
  //       )
  //     case 3:
  //       return (
  //         <>
  //           <span className="overlay-helper left-1/4 -z-1"></span>
  //           <span className="overlay-helper left-2/4 -z-1"></span>
  //           <span className="overlay-helper left-3/4 -z-1"></span>
  //         </>
  //       )
  //   }
  // }

  // useEffect(() => {
  //   depths = checkPathnameDepth(location.pathname)
  // }, [])

  return (
    <>
      {renderPart()}
      {/* {location.pathname === '/training/custom' && animationStatus === true ? (
          <CustomTraining />
        ) : (
          <>
            <TrainingForm />
          </>
        )} */}

      {/* <form
        className="w-full xl:w-1/2 2xl:w-2/3 mx-auto space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className="textarea textarea-bordered w-full h-[300px]"
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
            placeholder="Word chunk amount (1-5)"
            className="input input-bordered w-full"
            min="1"
            max="5"
            {...register('chunkValue')}
          />
          <input
            type="number"
            placeholder="Word per minute (100-1000)"
            className="input input-bordered w-full"
            min="100"
            max="1000"
            {...register('wordsPerMinute')}
          />
        </div>
        {errors.textValue && <span>Error occured</span>}
        <div className="flex space-x-4 justify-end">
          <button type="submit" className="btn btn-primary no-animation" disabled={isDisabled}>
            Apply settings
          </button>
          <button
            type="reset"
            onClick={() => clearText()}
            className="btn btn-secondary no-animation"
            disabled={isDisabled}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="w-full xl:w-1/2 mx-auto relative outline outline-offset-0 outline-1 p-0 rounded-md">
        {renderFixationLine(fixationCount)}
        <pre className="relative whitespace-pre-line text-left text-lg font-sans font-normal p-2">
          {watch('textValue')?.length > 0
            ? watch('textValue')
            : 'Your custom text will be shown here'}
        </pre>
        <pre
          className="absolute top-0 whitespace-pre-line text-left text-lg font-sans font-normal p-2 text-gray-900"
          // style={{ color: color?.hex }}
        >
          {watch('textValue')?.length > 0 ? textAnimated : ''}
        </pre>
      </div>

      <div className="flex flex-col w-full xl:w-1/2 mx-auto space-y-4">
        {isDisabled && (
          <p>
            {watch('textValue')?.length > 0 && watch('wordsPerMinute') > 0
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
        )}
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

        <p>Fixation Line Helper</p>
        <div>
          <input
            type="range"
            className="range range-xs"
            step={1}
            min={0}
            max={3}
            value={fixationCount}
            onChange={(e) => setFixationCount(parseInt(e.target.value))}
          />
        </div>
        <div className="w-full flex justify-between text-xs px-2">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <Timer
          time={timer}
          setTime={setTimer}
          wpm={blindWpm}
          setWpm={setBlindWpm}
          totalChunk={getTotalChunks(removeExtraWhitespaces(watch('textValue')))}
        >
          <br />
        </Timer>
      </div> */}
    </>
  )
}
