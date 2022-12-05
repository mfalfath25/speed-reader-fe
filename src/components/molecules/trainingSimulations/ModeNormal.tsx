import React, { useState, useEffect } from 'react'
import { useTrainingStore } from '../../../store/TrainingStore'
import { useSettingStore } from '../../../store/SettingStore'
import { startTextAnimation } from '../../../logic'
import { getTotalChunks, removeExtraWhitespaces } from '../../../logic/utils'
import { FixationSelect, renderFixationLine } from '../../molecules'
import { Button } from '../../atoms'
import { useNavigate } from 'react-router-dom'

export const ModeNormal = () => {
  const navigate = useNavigate()
  // store states
  const { isFontSerif, isJustified, fixationCount, fontColor } = useSettingStore()
  const { animationStatus, trainingText, animatedText, toggleAnimationStatus, updateAnimatedText } =
    useTrainingStore()
  const data = useTrainingStore((state) => state.trainingText)
  // local states
  const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const [isRunOnce, setIsRunOnce] = useState<boolean>(false)
  // initiate simulation
  const startSimulation = () => {
    const textValue = data[data.length - 1]?.text.textValue
    const chunkValue = data[data.length - 1]?.chunksCount
    const wordsPerMinute = data[data.length - 1]?.wpm
    startTextAnimation(
      textValue,
      wordsPerMinute || 250,
      chunkValue || 3,
      setTextAnimated,
      toggleAnimationStatus,
      setIsRunOnce
    )
  }

  useEffect(() => {
    if (isRunOnce === true) {
      navigate('/training/normal/result')
    }
  }, [isRunOnce])

  return (
    <>
      <div className="w-full xl:w-[800px] 2xl:w-2/3 mx-auto space-y-4">
        <div>
          <label className="label px-0 font-bold">
            Text: {data[data.length - 1]?.text.textLevel} - {data[data.length - 1]?.text.textChoice}
            , Chunk count: {data[data.length - 1]?.chunksCount}, Target WPM:
            {data[data.length - 1]?.wpm}
          </label>
          <div className="w-full min-h-[400px] relative outline outline-offset-0 outline-1 p-0 rounded-md bg-slate-100">
            {renderFixationLine(fixationCount)}
            <pre
              className="relative whitespace-pre-line text-left text-base sm:text-xl font-normal p-2"
              style={{
                fontFamily: isFontSerif ? 'Literata' : 'Source Sans Pro',
                textAlign: isJustified ? 'justify' : 'left',
              }}
            >
              {data.length !== 0
                ? data[data.length - 1]?.text.textValue
                : 'Your custom text will be shown here'}
            </pre>
            <pre
              className="absolute top-0 whitespace-pre-line text-left text-base sm:text-xl font-normal p-2 text-black dark:text-slate-200"
              // text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-red-400
              style={{
                fontFamily: isFontSerif ? 'Literata' : 'Source Sans Pro',
                textAlign: isJustified ? 'justify' : 'left',
                color: fontColor,
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
              toggleAnimationStatus()
            }}
          />
        </div>
      </div>
    </>
  )
}
