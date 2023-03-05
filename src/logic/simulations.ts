export const startTimer = (
  setWpm: React.Dispatch<React.SetStateAction<number>>,
  totalWords: number
): ReturnType<typeof setInterval> => {
  let elapsedTime = 0 // in seconds
  let result = 0 // in wpm
  const intervalId = setInterval(() => {
    elapsedTime++ // increment time every second
    result = Math.round((totalWords / elapsedTime) * 60) // calculate wpm every second
    setWpm(result) // update wpm every second
  }, 1000)
  return intervalId // return interval (the interval id) to be referenced in stopTimer()
}

export const stopTimer = (intervalId: ReturnType<typeof setInterval>): void => {
  clearInterval(intervalId)
}

export const startPerf = () => {
  performance.clearMeasures()
  performance.mark('start')
}

export const stopPerf = () => {
  performance.mark('end')
  performance.measure('read time', 'start', 'end')
  const measure = performance.getEntriesByName('read time')
  const output = Math.trunc(measure[0].duration)
  return output
}

export const splitTextToChunks = (
  text: string,
  chunk: number = 1
): string[] => {
  const chunkedText: string[] = []
  const regex = /(\r\n|\r|\n){1,}/g

  text = text.trim().replace(regex, '$& ')

  const words = text.split(' ')
  for (let i = 0; i < words.length; i += chunk) {
    chunkedText.push(words.slice(i, i + chunk).join(' '))
  }

  return chunkedText
}

export const createDurationArray = (
  totalChunks: string[],
  duration: number
): number[] => {
  const durations: number[] = []
  let totalChars = 0
  for (let i = 0; i < totalChunks.length; i++) {
    const len = totalChunks[i].length
    totalChars += len
  }
  const durationPerChar = duration / totalChars
  for (let i = 0; i < totalChunks.length; i++) {
    const len = totalChunks[i].length
    const stringDuration = durationPerChar * len
    durations.push(Number(stringDuration.toFixed(2)))
  }
  return durations
}

export const startTextAnimation = (
  text: string,
  wpm: number,
  chunk: number,
  setText: React.Dispatch<React.SetStateAction<string | null>>,
  setRunningOnce: React.Dispatch<React.SetStateAction<boolean>>,
  setReadTime: React.Dispatch<React.SetStateAction<number>>
) => {
  const totalChunks = splitTextToChunks(text, chunk)
  const duration = Math.trunc((text.split(' ').length / wpm) * (60 * 1000))
  const durationArray = createDurationArray(totalChunks, duration)

  let i = 0
  let currentText = ''
  let timeoutId: ReturnType<typeof setTimeout>

  const animate = () => {
    if (i === totalChunks.length) {
      setReadTime(duration)
      setRunningOnce(true)
      return
    }

    currentText += totalChunks[i] + ' '
    setText(currentText.trim())
    i++

    timeoutId = setTimeout(animate, durationArray[i - 1])
  }

  timeoutId = setTimeout(animate, durationArray[0])

  return () => {
    clearTimeout(timeoutId)
  }
}
