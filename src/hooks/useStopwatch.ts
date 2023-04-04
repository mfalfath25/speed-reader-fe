import { useState, useEffect, useRef } from 'react'

export const useStopwatch = () => {
  const [time, setTime] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<number>(0)
  const TimeRef = useRef<number>(0)

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(
        () => setTime(Math.floor(performance.now() - TimeRef.current)),
        100
      )
      setIntervalId(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [isRunning])

  const handleStartSW = () => {
    if (!isRunning) {
      TimeRef.current = performance.now()
      setIsRunning(true)
    }
  }

  const handleStopSW = () => {
    if (isRunning) {
      TimeRef.current = 0
      clearInterval(intervalId)
      setIsRunning(false)
    }
  }

  return { time, isRunning, handleStartSW, handleStopSW }
}
