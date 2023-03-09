export const startWpmCounter = (
  setWpm: React.Dispatch<React.SetStateAction<number>>,
  totalWords: number,
  startTimeRef: React.MutableRefObject<number | null>,
  intervalRef: React.MutableRefObject<number | null>
): void => {
  let elapsedTime = 0
  let result = 0
  startTimeRef.current = performance.now()
  intervalRef.current = setInterval(() => {
    elapsedTime++
    result = Math.round((totalWords / elapsedTime) * 60)
    setWpm(result)
  }, 1000)
}

export const stopWpmCounter = (
  intervalRef: React.MutableRefObject<number | null>,
  startTimeRef: React.MutableRefObject<number | null>
): number => {
  clearInterval(intervalRef.current!)
  const elapsedTime = Math.trunc(performance.now() - startTimeRef.current!)
  intervalRef.current = null
  startTimeRef.current = null
  return elapsedTime
}

export const splitTextToChunks = (
  text: string,
  chunk: number = 1
): string[] => {
  const chunkedText: string[] = []

  const processedText = text
    .trimStart() // Removes any sequence of spaces or tabs at the beginning of a line.
    .replace(/[\t ]{2,}/g, ' ') // Replaces any sequence of two or more spaces or tabs with a single space character.
    .replace(/(\r\n|\r|\n){1,}/g, '$& ') // Replaces any sequence of one or more line breaks with the same sequence followed by a space character after.
    .replace(/[\t ]+($|\s)/g, '$1') // Removes any sequence of spaces or tabs at the end of a line or before another word.
    .trimEnd() // Removes any sequence of spaces or tabs at the end of a line.

  const words = processedText.split(' ')

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
    const len = totalChunks[i].replace(/\n/g, '').length // exclude \n characters
    totalChars += len
  }

  const durationPerChar = duration / totalChars

  for (let i = 0; i < totalChunks.length; i++) {
    const len = totalChunks[i].replace(/\n/g, '').length // exclude \n characters
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
