import React, { useState, useEffect } from 'react'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { useSettingStore } from '../../../stores/SettingStore'
import { startTextAnimation } from '../../../logic'
import { renderFixationLine } from '../../molecules'
import { Button } from '../../atoms'
import { ToastAlert } from '../../atoms'
import { useNavigate } from 'react-router-dom'

export const ModeCustom = () => {
  const navigate = useNavigate()
  // store states
  const { settingData } = useSettingStore()
  const { animationStatus, setTrainingData, setAnimationStatus } =
    useTrainingStore()
  const data = useTrainingStore((state) => state.trainingData)
  // local states
  const [isRunOnce, setIsRunOnce] = useState<boolean>(false)
  const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const [textReadTime, setTextReadTime] = useState<number>(0)
  // initiate simulation
  const startSimulation = () => {
    const textValue = data[data.length - 1]?.text.textValue
    const chunkValue = data[data.length - 1]?.chunksCount
    const wordsPerMinute = data[data.length - 1]?.wpm

    startTextAnimation(
      textValue,
      wordsPerMinute || 250,
      chunkValue || 3,
      setAnimationStatus,
      setTextAnimated,
      setIsRunOnce,
      setTextReadTime
    )
  }

  useEffect(() => {
    if (isRunOnce === true && data!.length !== 0) {
      ToastAlert('loading', 'loading', 1000)
      setTrainingData(data[data.length - 1]?.trainingId, {
        ...data[data.length - 1],
        readTime: textReadTime,
      })

      setTimeout(() => {
        navigate('/training/custom/result')
      }, 1000)
    }
  }, [isRunOnce, textReadTime])

  return (
    <>
      <div className="mx-auto w-full space-y-4 xl:w-[800px] 2xl:w-2/3">
        <div>
          <label className="label px-0 font-bold">
            Custom text, Chunk count: {data[data.length - 1]?.chunksCount},
            Target WPM:
            {data[data.length - 1]?.wpm}
          </label>
          <div className="relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
            <pre
              className="relative whitespace-pre-line p-2 text-left text-base font-normal sm:text-xl"
              style={{
                fontFamily: settingData.isFontSerif ? 'serif' : 'sans-serif',
              }}
            >
              {renderFixationLine(settingData.fixationCount)}
              {data.length !== 0
                ? data[data.length - 1].text.textValue
                : 'Your custom text will be shown here'}
            </pre>
            <pre
              className="absolute top-0 whitespace-pre-line p-2 text-left text-base font-normal text-black dark:text-slate-200 sm:text-xl"
              style={{
                fontFamily: settingData.isFontSerif ? 'serif' : 'sans-serif',
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
            disabled={animationStatus}
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
