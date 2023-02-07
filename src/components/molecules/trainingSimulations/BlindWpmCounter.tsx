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
  const data = useTrainingStore((state) => state.trainingData)
  const totalChunk = data[data.length - 1]?.text.textWordCount

  const handleStart = () => {
    startPerf()
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
    setTrainingData(data[data.length - 1]?.trainingId, {
      ...data[data.length - 1],
      readTime: stopPerf(),
      wpm: blindWpm,
    })
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
      {/* <p>{props.readTime > 0 ? `${props.readTime} seconds` : ''}</p>
      <p>{props.wpm > 0 ? `${props.wpm} wpm` : ''}</p> */}
      <div className="flex flex-row justify-between">
        <label className="label px-0 font-bold">
          Teks: {data[data.length - 1]?.text.textLevel} -{' '}
          {data[data.length - 1]?.text.textChoice}
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
            onClick={() => {
              handleStop()
              ToastAlert('loading', 'loading', 1000)
              setTimeout(() => {
                navigate('/training/blind/simulate/comprehension')
              }, 1000)
            }}
          />
        ) : (
          <Button
            text="Start"
            weight="primary"
            width="full"
            onClick={() => {
              handleStart()
            }}
          />
        )}
      </div>
    </>
  )
}
