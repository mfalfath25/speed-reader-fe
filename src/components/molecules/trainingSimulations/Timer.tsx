import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { startPerf, startTimer, stopPerf, stopTimer } from '../../../logic'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Button, ToastAlert } from '../../atoms'

interface TimerProps extends React.PropsWithChildren<{}> {
  readTime: number
  setReadTime: React.Dispatch<React.SetStateAction<number>>
  wpm: number
  setWpm: React.Dispatch<React.SetStateAction<number>>
  totalChunk?: number
}

export const Timer = (props: TimerProps) => {
  const navigate = useNavigate()
  const [running, setRunning] = useState<boolean>(false)

  const { setTrainingData } = useTrainingStore()
  const data = useTrainingStore((state) => state.trainingData)

  const handleStart = () => {
    startPerf()
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
    if (running === false) {
      setTrainingData(data[data.length - 1]?.trainingId, {
        ...data[data.length - 1],
        readTime: stopPerf(),
        wpm: props.wpm,
      })
    }
  }

  useEffect(() => {
    let intervalId: number | undefined = 0

    if (running && props.totalChunk) {
      intervalId = startTimer(props.setReadTime, props.setWpm, props.totalChunk)
    } else if (!running) {
      stopTimer(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [running, props.totalChunk, props.setReadTime, props.setWpm])

  return (
    <>
      {/* <p>{props.readTime > 0 ? `${props.readTime} seconds` : ''}</p>
      <p>{props.wpm > 0 ? `${props.wpm} wpm` : ''}</p> */}
      <div className="flex flex-row justify-between">
        <label className="label px-0 font-bold">
          Teks: {data[data.length - 1]?.text.textLevel} - {data[data.length - 1]?.text.textChoice}
        </label>
        <label className="label px-0 font-bold">{props.wpm > 0 ? `${props.wpm} WPM` : ''}</label>
      </div>
      {props.children}
      <div className="flex justify-center mt-2 sm:mx-auto sm:w-[200px] pt-4">
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
