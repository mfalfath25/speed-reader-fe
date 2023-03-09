import { useState, useRef, useEffect, useCallback } from 'react'
import { startWpmCounter, stopWpmCounter } from '../logic'

export const useWpmCounter = (totalWords: number) => {
  const [wpm, setWpm] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const intervalRef = useRef<number | null>(null)

  const handleStartCounter = useCallback(() => {
    if (
      !isRunning &&
      intervalRef.current === null &&
      startTimeRef.current === null &&
      typeof totalWords === 'number' &&
      !isNaN(totalWords)
    ) {
      startTimeRef.current = performance.now()
      startWpmCounter(setWpm, totalWords, startTimeRef, intervalRef)
      setIsRunning(true)
    }
  }, [isRunning, totalWords])

  const handleStopCounter = useCallback(() => {
    if (isRunning) {
      setTimeElapsed(stopWpmCounter(intervalRef, startTimeRef))
      setIsRunning(false)
    }
  }, [isRunning])

  useEffect(() => {
    return () => {
      if (isRunning) {
        stopWpmCounter(intervalRef, startTimeRef)
      }
    }
  }, [isRunning])

  return {
    wpm,
    isRunning,
    timeElapsed,
    handleStartCounter,
    handleStopCounter,
  }
}
