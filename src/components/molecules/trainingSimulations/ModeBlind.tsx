import React, { useState, useEffect } from 'react'
import { Button, ToastAlert } from '../../atoms'
import { renderFixationLine } from '../../molecules'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { useSettingStore } from '../../../stores/SettingStore'
import { useWpmCounter } from '../../../hooks'

export const ModeBlind = () => {
  const navigate = useNavigate()
  const { settingData } = useSettingStore()
  const [counterStopped, setCounterStopped] = useState(false)

  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )
  const totalWords = trainingData?.text.textWordCount
  const { wpm, isRunning, elapsedTime, handleStartTimer, handleStopTimer } =
    useWpmCounter(totalWords)

  useEffect(() => {
    if (trainingData === undefined) return navigate('/training/blind')
  }, [trainingData])

  useEffect(() => {
    if (!isRunning && counterStopped) {
      setTrainingData(trainingData.trainingId, {
        ...trainingData,
        readTime: elapsedTime,
        wpm: wpm,
      })

      ToastAlert('loading', 'loading', 1500)
      setTimeout(() => {
        navigate('/training/blind/simulate/comprehension', {
          replace: true,
        })
      }, 1500)
    }

    return () => {
      setCounterStopped(false)
    }
  }, [isRunning, counterStopped])

  return (
    <>
      <div className="mx-auto w-full space-y-0 xl:w-[800px] 2xl:w-2/3">
        <div className="flex flex-row justify-between">
          <label className="label px-0 font-bold">
            Teks: {trainingData.text.textLevel} -{' '}
            {trainingData?.text.textChoice}
          </label>
          <label className="label px-0 font-bold">
            {wpm > 0 ? `${wpm} WPM` : null}
          </label>
        </div>
        <div>
          <div className="scroll relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
            <pre
              className="relative whitespace-pre-line p-2 text-left text-base font-normal text-black sm:text-xl"
              style={{
                lineHeight: '1.5',
                fontFamily: settingData.isFontSerif
                  ? 'Literata' || 'serif'
                  : 'Inter' || 'sans-serif',
              }}
            >
              {renderFixationLine(settingData.fixationCount)}
              {trainingData !== undefined
                ? trainingData.text.textValue
                : 'Your custom text will be shown here'}
            </pre>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-center pt-4 sm:mx-auto sm:w-[200px]">
        {isRunning ? (
          <Button
            text="Stop"
            outline
            width="full"
            onClick={() => {
              handleStopTimer()
              setCounterStopped(true)
            }}
          />
        ) : (
          <Button
            text="Start"
            className="btn-primary"
            width="full"
            onClick={() => handleStartTimer()}
          />
        )}
      </div>
    </>
  )
}
