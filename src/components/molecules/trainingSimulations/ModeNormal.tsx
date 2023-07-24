import React, { useEffect, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ToastAlert } from '../../atoms'
import { renderFixationLine } from '../../molecules'
import { useStopwatch, useTextAnimation } from '../../../hooks'
import { useSettingStore, useTrainingStore } from '../../../stores'
import { getFormattedStopwatch } from '../../../logic'

export const ModeNormal = () => {
  const navigate = useNavigate()
  const [blur, setBlur] = useState(true)

  const { settingData } = useSettingStore()
  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )

  const [
    textDisplay,
    running,
    finished,
    readTime,
    startAnimation,
    resetAnimation,
  ] = useTextAnimation(
    trainingData?.text.textValue,
    trainingData?.wpm,
    trainingData?.chunksCount
  )
  const { time, handleStartSW, handleStopSW } = useStopwatch()

  const handleStartAnimation = useCallback(() => {
    resetAnimation()
    startAnimation()
  }, [startAnimation, resetAnimation])

  useEffect(() => {
    if (trainingData === undefined) return navigate('/training/normal')
  }, [trainingData])

  useEffect(() => {
    if (finished) {
      handleStopSW()
      time &&
        setTrainingData(trainingData.trainingId, {
          ...trainingData,
          readTime: time,
        })

      ToastAlert('loading', 'loading', 1000)

      setTimeout(() => {
        navigate('/training/normal/simulate/comprehension', {
          replace: true,
        })
      }, 1000)
    }

    return () => {
      handleStopSW()
    }
  }, [finished])

  return (
    <>
      <div className="mx-auto w-full space-y-4 xl:w-[800px] 2xl:w-2/3">
        <div>
          <div className="flex flex-row justify-between">
            {trainingData !== undefined ? (
              <label className="label px-0 font-bold">
                Teks: {trainingData.text.textLevel} {' - '}
                {trainingData.text.textChoice}, Highlight kata:{' '}
                {trainingData.chunksCount}, Target WPM:
                {trainingData.wpm}
              </label>
            ) : null}
            <label className="label px-0 font-bold text-pink-500">
              {time > 0 ? `${getFormattedStopwatch(time)}` : '00:00:00'}
            </label>
          </div>
          <div className="scroll relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
            <pre
              className={`relative whitespace-pre-line break-words p-2 text-left text-base font-normal ${
                blur ? 'blur-sm' : ''
              } sm:text-xl`}
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
              className="absolute top-0 whitespace-pre-line break-words p-2 text-left text-base font-normal text-black dark:text-slate-200 sm:text-xl"
              style={{
                lineHeight: '1.5',
                fontFamily: settingData.isFontSerif
                  ? 'Literata' || 'serif'
                  : 'Inter' || 'sans-serif',
                color: settingData.fontColor,
              }}
            >
              {textDisplay}
            </pre>
          </div>
        </div>
        <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
          <Button
            text="Start"
            style="primary"
            disabled={running}
            width="full"
            onClick={() => {
              setBlur(false)
              handleStartSW()
              handleStartAnimation()
            }}
          />
        </div>
      </div>
    </>
  )
}
