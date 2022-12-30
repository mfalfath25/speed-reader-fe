import React, { useState, useEffect } from 'react'
import { useTrainingStore } from '../../../store/TrainingStore'
import { useSettingStore } from '../../../store/SettingStore'
import { startTextAnimation } from '../../../logic'
import { getTotalChunks, removeExtraWhitespaces } from '../../../logic/utils'
import { FixationSelect, renderFixationLine } from '../../molecules'
import { Button } from '../../atoms'
import { useNavigate } from 'react-router-dom'
import { TrainingComprehension } from '../../organisms'
import { Timer } from './Timer'

export const ModeBlind = () => {
  const navigate = useNavigate()
  // store states
  const { isFontSerif, isJustified, fixationCount, fontColor } = useSettingStore()
  const {
    animationStatus,
    trainingData,
    animatedText,
    toggleAnimationStatus,
    updateAnimatedText,
    modifyTrainingData,
  } = useTrainingStore()
  const data = useTrainingStore((state) => state.trainingData)
  // local states
  // const [textAnimated, setTextAnimated] = useState<string | null>(null)
  const [isRunOnce, setIsRunOnce] = useState<boolean>(false)
  const [textReadTime, setTextReadTime] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  const [blindWpm, setBlindWpm] = useState<number>(0)

  useEffect(() => {
    if (isRunOnce === true) {
      textReadTime !== 0 &&
        modifyTrainingData(data[data.length - 1]?.trainingId, {
          ...data[data.length - 1],
          readTime: textReadTime,
        })
      navigate('/training/normal/simulate/comprehension')
    }
  }, [isRunOnce])

  return (
    <>
      <div className="w-full xl:w-[800px] 2xl:w-2/3 mx-auto space-y-0">
        <Timer
          readTime={timer}
          setReadTime={setTimer}
          wpm={blindWpm}
          setWpm={setBlindWpm}
          totalChunk={getTotalChunks(removeExtraWhitespaces(data[data.length - 1]?.text.textValue))}
        >
          <div>
            <div className="w-full max-h-[500px] overflow-y-auto relative outline outline-offset-0 outline-1 p-0 rounded-md bg-slate-100">
              <pre
                className="relative whitespace-pre-line text-left text-base sm:text-xl font-normal p-2"
                style={{
                  fontFamily: isFontSerif ? 'Literata' : 'Source Sans Pro',
                  textAlign: isJustified ? 'justify' : 'left',
                }}
              >
                {renderFixationLine(fixationCount)}
                {data.length !== 0
                  ? data[data.length - 1]?.text.textValue
                  : 'Your custom text will be shown here'}
              </pre>
              {/* <pre
                className="absolute top-0 whitespace-pre-line text-left text-base sm:text-xl font-normal p-2 text-black dark:text-slate-200"
                // text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-red-400
                style={{
                  fontFamily: isFontSerif ? 'Literata' : 'Source Sans Pro',
                  textAlign: isJustified ? 'justify' : 'left',
                  color: fontColor,
                }}
              >
                {textAnimated}
              </pre> */}
            </div>
          </div>
        </Timer>
      </div>
    </>
  )
}
