import React, { useState, useEffect } from 'react'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { useSettingStore } from '../../../stores/SettingStore'
import { startTextAnimation } from '../../../logic'
import { renderFixationLine } from '../../molecules'
import { Button, ToastAlert } from '../../atoms'
import { useNavigate } from 'react-router-dom'

export const ModeNormal = () => {
  const navigate = useNavigate()
  // store states
  const { settingData } = useSettingStore()
  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )
  // local states
  const [isRunOnce, setIsRunOnce] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const [textReadTime, setTextReadTime] = useState<number>(0)
  // initiate simulation
  const startSimulation = () => {
    setIsDisabled(true)
    const textValue = trainingData.text.textValue
    const chunkValue = trainingData.chunksCount
    const wordsPerMinute = trainingData.wpm
    startTextAnimation(
      textValue,
      wordsPerMinute || 250,
      chunkValue || 3,
      setTextAnimated,
      setIsRunOnce,
      setTextReadTime
    )
  }

  useEffect(() => {
    if (trainingData === undefined) return navigate('/training/normal')
    else if (isRunOnce === true) {
      textReadTime !== 0 &&
        setTrainingData(trainingData.trainingId, {
          ...trainingData,
          readTime: textReadTime,
        })

      ToastAlert('loading', 'loading', 1000)

      setTimeout(() => {
        navigate('/training/normal/simulate/comprehension', {
          replace: true,
        })
      }, 1000)
      setIsDisabled(false)
    }

    return () => {
      setIsDisabled(false)
      setIsRunOnce(false)
    }
  }, [isRunOnce])

  return (
    <>
      <div className="mx-auto w-full space-y-4 xl:w-[800px] 2xl:w-2/3">
        <div>
          {trainingData !== undefined ? (
            <label className="label px-0 font-bold">
              Text: {trainingData.text.textLevel} -{' '}
              {trainingData.text.textChoice}, Chunk count:{' '}
              {trainingData.chunksCount}, Target WPM:
              {trainingData.wpm}
            </label>
          ) : null}
          <div className="relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
            <pre
              className="relative whitespace-pre-line p-2 text-left text-base font-normal sm:text-xl"
              style={{
                lineHeight: '1.5',
                fontFamily: settingData.isFontSerif
                  ? 'Literata' || 'serif'
                  : 'Inter' || 'sans-serif',
              }}
            >
              {renderFixationLine(settingData.fixationCount)}
              {trainingData !== undefined ? trainingData.text.textValue : null}
            </pre>
            <pre
              className="absolute top-0 whitespace-pre-line p-2 text-left text-base font-normal text-black dark:text-slate-200 sm:text-xl"
              style={{
                lineHeight: '1.5',
                fontFamily: settingData.isFontSerif
                  ? 'Literata' || 'serif'
                  : 'Inter' || 'sans-serif',
                color: settingData.fontColor,
              }}
            >
              {textAnimated}
            </pre>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            text="Start"
            weight="primary"
            disabled={isDisabled}
            width="full"
            onClick={() => {
              startSimulation()
            }}
          />
        </div>
      </div>
    </>
  )
}
