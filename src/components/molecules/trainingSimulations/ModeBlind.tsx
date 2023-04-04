import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ToastAlert } from '../../atoms'
import { renderFixationLine } from '../../molecules'
import { useWpmCounter } from '../../../hooks'
import { useSettingStore, useTrainingStore } from '../../../stores'

export const ModeBlind = () => {
  const navigate = useNavigate()
  const { settingData } = useSettingStore()
  const [stopCounter, setStopCounter] = useState(false)

  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )
  const totalWords = trainingData?.text.textWordCount
  const { wpm, isRunning, timeElapsed, handleStartCounter, handleStopCounter } =
    useWpmCounter(totalWords)

  useEffect(() => {
    if (trainingData === undefined) return navigate('/training/blind')
  }, [trainingData])

  useEffect(() => {
    if (!isRunning && stopCounter) {
      setTrainingData(trainingData.trainingId, {
        ...trainingData,
        readTime: timeElapsed,
        wpm: wpm,
      })

      ToastAlert('loading', 'loading', 1000)
      setTimeout(() => {
        navigate('/training/blind/simulate/comprehension', {
          replace: true,
        })
      }, 1000)
    }

    return () => {
      setStopCounter(false)
    }
  }, [isRunning, stopCounter])

  return (
    <>
      <div className="mx-auto w-full space-y-4 xl:w-[800px] 2xl:w-2/3">
        <div>
          <div className="flex flex-row justify-between">
            <label className="label px-0 font-bold">
              Teks: {trainingData.text.textLevel} -{' '}
              {trainingData?.text.textChoice}
            </label>
            <label className="label px-0 font-bold text-blue-500">
              {wpm > 0 ? `${wpm} WPM` : null}
            </label>
          </div>
          <div className="scroll relative max-h-[500px] w-full overflow-y-auto rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
            <pre
              className="relative whitespace-pre-line break-words p-2 text-left text-base font-normal text-black sm:text-xl"
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
        <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
          {isRunning ? (
            <Button
              text="Stop"
              outline
              status="error"
              width="full"
              onClick={() => {
                handleStopCounter()
                setStopCounter(true)
              }}
            />
          ) : (
            <Button
              text="Start"
              className="btn-primary"
              width="full"
              onClick={() => handleStartCounter()}
            />
          )}
        </div>
      </div>
    </>
  )
}
