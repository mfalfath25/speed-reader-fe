import React, { useEffect, useState, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { startPerf, startTimer, stopPerf, stopTimer } from '../../../logic'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Button, ToastAlert } from '../../atoms'

export const BlindWpmCounter = (props: PropsWithChildren) => {
  const navigate = useNavigate()
  const [running, setRunning] = useState<boolean>(false)
  const [blindWpm, setBlindWpm] = useState<number>(0)

  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )
  const totalChunk = trainingData?.text.textWordCount

  const handleStart = () => {
    startPerf()
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
    setTrainingData(trainingData.trainingId, {
      ...trainingData,
      readTime: stopPerf(),
      wpm: blindWpm,
    })

    ToastAlert('loading', 'loading', 1500)
    setTimeout(() => {
      navigate('/training/blind/simulate/comprehension', {
        replace: true,
      })
    }, 1500)
  }

  useEffect(() => {
    let intervalId: number | undefined = 0

    if (running && totalChunk) {
      intervalId = startTimer(setBlindWpm, totalChunk)
    } else if (!running) {
      stopTimer(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [running])

  return (
    <>
      <div className="flex flex-row justify-between">
        <label className="label px-0 font-bold">
          Teks: {trainingData.text.textLevel} - {trainingData?.text.textChoice}
        </label>
        <label className="label px-0 font-bold">
          {blindWpm > 0 ? `${blindWpm} WPM` : ''}
        </label>
      </div>
      {props.children}
      <div className="mt-2 flex justify-center pt-4 sm:mx-auto sm:w-[200px]">
        {running ? (
          <Button
            text="Stop"
            outline
            width="full"
            onClick={() => handleStop()}
          />
        ) : (
          <Button
            text="Start"
            weight="primary"
            width="full"
            onClick={() => handleStart()}
          />
        )}
      </div>
    </>
  )
}
