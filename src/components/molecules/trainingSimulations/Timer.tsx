import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { startTimer, stopTimer } from '../../../logic'
import { useTrainingStore } from '../../../store/TrainingStore'
import { Button } from '../../atoms'

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

  const { modifyTrainingData } = useTrainingStore()
  const data = useTrainingStore((state) => state.trainingData)

  const modifyWpm = () => {
    modifyTrainingData(data[data.length - 1]?.trainingId, {
      ...data[data.length - 1],
      readTime: props.readTime,
      wpm: props.wpm,
    })
  }

  useEffect(() => {
    let interval: number | undefined = 0

    if (running && props.totalChunk) {
      interval = startTimer(props.setReadTime, props.setWpm, props.totalChunk)
    } else if (!running) {
      stopTimer(interval)
      // clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running, props.totalChunk, props.setReadTime, props.setWpm])

  return (
    <>
      {/* <p>{props.time > 0 ? `${props.time} seconds` : ''}</p>
      <p>{props.wpm > 0 ? `${props.wpm} wpm` : ''}</p> */}
      <div className="flex flex-row justify-between">
        <label className="label px-0 font-bold">
          Text: {data[data.length - 1]?.text.textLevel} - {data[data.length - 1]?.text.textChoice}
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
              setRunning(false)
              modifyWpm()
              navigate('/training/blind/simulate/comprehension')
            }}
          />
        ) : (
          <Button
            text="Start"
            weight="primary"
            width="full"
            onClick={() => {
              setRunning(true)
            }}
          />
        )}
      </div>
    </>
  )
}
