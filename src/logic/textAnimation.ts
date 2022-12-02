import { removeExtraWhitespaces } from './utils'

export const splitTextToChunks = (text: string, chunk: number = 1): string[] => {
  let arr = text.split(' ')
  let result = []
  while (arr.length) {
    result.push(arr.splice(0, chunk).join(' '))
  }
  return result
}

export const startTextAnimation = (
  text: string,
  wpm: number,
  chunk: number,
  setState: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setRunningOnce: React.Dispatch<React.SetStateAction<boolean>>
  // callback: () => void = () => {}
): number => {
  const totalChunks = splitTextToChunks(text, chunk) // transform text into array of n chunks
  const duration = (text.split(' ').length / wpm) * (60 * 1000) // calculate duration of how animation should run
  let index = 0
  setState(totalChunks[index]) // set first chunk
  const interval = setInterval(() => {
    // start animation interval
    if (index >= totalChunks.length - 1) {
      // if last chunk
      clearInterval(interval) // then stop interval
      // callback()
      setLoading(false)
      setRunningOnce(true)
      return // and set animation status to false
    }
    setState((prev) => prev + ' ' + totalChunks[index]) // else, set next chunk as the new state
    index++ // increment index
  }, duration / totalChunks.length) // set interval duration based on chunks length
  return interval
}

export const redirectAfterAnimation = (functionToRun: () => void, duration: number): void => {
  setTimeout(() => {
    return functionToRun()
  }, duration)
}

export const boldEveryNthCharInText = (text: string, n: number, bold: boolean = true): string => {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    if (i % n === 0) {
      result += bold ? `<b>${text[i]}</b>` : text[i]
    } else {
      result += text[i]
    }
  }
  return result
}
