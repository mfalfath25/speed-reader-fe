import { useState, useEffect } from 'react'
import { startTextAnimation } from '../logic'

export const useTextAnimation = (
  text: string,
  wpm: number = 250,
  chunk: number = 3
): [string | null, boolean, boolean, number, () => void, () => void] => {
  const [running, setRunning] = useState<boolean>(false)
  const [finished, setFinished] = useState<boolean>(false)
  const [textDisplay, setTextDisplay] = useState<string | null>(null)
  const [readTime, setReadTime] = useState<number>(0)

  let cleanupFunction: (() => void) | undefined

  useEffect(() => {
    return () => {
      if (cleanupFunction) {
        cleanupFunction()
      }
    }
  }, [])

  const resetAnimation = () => {
    setTextDisplay(null)
    setRunning(false)
    setReadTime(0)
  }

  const startAnimation = () => {
    resetAnimation()
    setRunning(true)
    cleanupFunction = startTextAnimation(
      text,
      wpm,
      chunk,
      setTextDisplay,
      setFinished,
      setReadTime
    )
  }

  return [
    textDisplay,
    running,
    finished,
    readTime,
    startAnimation,
    resetAnimation,
  ]
}
