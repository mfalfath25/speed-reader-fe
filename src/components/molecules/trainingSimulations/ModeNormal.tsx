import React, { useState, useEffect } from 'react'
import { useAnimationStore } from '../../../context/AnimationStore'
import { useSettingStore } from '../../../context/SettingStore'
import { redirectAfterAnimation, startTextAnimation } from '../../../logic'
import { getTotalChunks, removeExtraWhitespaces } from '../../../logic/utils'
import { FixationSelect, renderFixationLine } from '../../molecules'
import { Button } from '../../atoms'
import { useNavigate } from 'react-router-dom'

export const ModeNormal = () => {
  const navigate = useNavigate()
  const { isFontSerif, isJustified, fixationCount, fontColor } = useSettingStore()
  const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const { animationStatus, rawText, animatedText, toggleAnimationStatus, updateAnimatedText } =
    useAnimationStore()
  const [isRunOnce, setIsRunOnce] = useState<boolean>(false)

  const data = useAnimationStore((state) => state.rawText)
  console.log(data)
  const fixationCounter = useSettingStore((state) => state.fixationCount)

  //simulate
  const startSimulation = () => {
    const textValue = data[data.length - 1]?.textValue
    const chunkValue = data[data.length - 1]?.chunkValue
    const wordsPerMinute = data[data.length - 1]?.wordsPerMinute
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
            Custom text, Chunk count: {data[data.length - 1]?.chunkValue}, Target WPM:{' '}
            {data[data.length - 1]?.wordsPerMinute}
          </label>
          <div className="w-full min-h-[400px] relative outline outline-offset-0 outline-1 p-0 rounded-md bg-slate-100">
            {renderFixationLine(fixationCounter)}
            <pre
              className="relative whitespace-pre-line text-left text-base sm:text-xl font-normal p-2"
              style={{
                fontFamily: isFontSerif ? 'Literata' : 'Source Sans Pro',
                textAlign: isJustified ? 'justify' : 'left',
              }}
            >
              {/* {rawText?.length > 0
            ? rawText?.[rawText.length - 1].textValue
            : 'Your custom text will be shown here'} */}
              {data.length !== 0
                ? data[data.length - 1].textValue
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
