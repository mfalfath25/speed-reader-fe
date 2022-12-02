import React, { useEffect, useState } from 'react'
import { startTimer } from '../../../logic'

interface TimerProps extends React.PropsWithChildren<{}> {
  time: number
  setTime: React.Dispatch<React.SetStateAction<number>>
  wpm: number
  setWpm: React.Dispatch<React.SetStateAction<number>>
  totalChunk?: number
}

export const Timer = (props: TimerProps) => {
  const [running, setRunning] = useState<boolean>(false)

  useEffect(() => {
    let interval: number | undefined = 0
    if (running && props.totalChunk) {
      interval = startTimer(props.setTime, props.setWpm, props.totalChunk)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running, props.totalChunk, props.setTime, props.setWpm])

  return (
    <>
      <button
        id="btn-start"
        className={`btn btn-primary no-animation`}
        onClick={() => {
          setRunning(true)
        }}
      >
        Start Test
      </button>
      <button
        id="btn-start"
        className={`btn btn-primary no-animation`}
        onClick={() => {
          setRunning(false)
        }}
      >
        Stop Test
      </button>
      <p>{props.time > 0 ? `${props.time} seconds` : ''}</p>
      <p>{props.wpm > 0 ? `${props.wpm} wpm` : ''}</p>
    </>
  )
}
