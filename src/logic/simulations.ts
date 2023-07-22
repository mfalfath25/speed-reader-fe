export const startWpmCounter = (
  setWpm: React.Dispatch<React.SetStateAction<number>>,
  totalWords: number,
  startTimeRef: React.MutableRefObject<number | null>,
  intervalRef: React.MutableRefObject<number | null>
): void => {
  let elapsedTime = 0
  let result = 0
  startTimeRef.current = performance.now() // start recording time
  intervalRef.current = setInterval(() => {
    // start interval
    elapsedTime++ // increment elapsed time by 1 second
    result = Math.round((totalWords / elapsedTime) * 60) // calculate wpm for every second
    setWpm(result) // update wpm
  }, 1000) // interval executes every 1 second
}

export const stopWpmCounter = (
  intervalRef: React.MutableRefObject<number | null>,
  startTimeRef: React.MutableRefObject<number | null>
): number => {
  clearInterval(intervalRef.current!) // stop interval
  const elapsedTime = Math.trunc(performance.now() - startTimeRef.current!) // calculate final elapsed time
  intervalRef.current = null // reset interval ref
  startTimeRef.current = null // reset start time ref
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

  // loop through words array
  for (let i = 0; i < words.length; i += chunk) {
    chunkedText.push(words.slice(i, i + chunk).join(' ')) // join words every nth chunk with a space
  }

  return chunkedText
}

export const createDurationArray = (
  // returns an array of duration for each chunk
  allChunks: string[],
  duration: number
): number[] => {
  const durations: number[] = []
  let totalChars = 0

  // loop through all chunks
  for (let i = 0; i < allChunks.length; i++) {
    const len = allChunks[i].replace(/\n/g, '').length // exclude \n characters
    totalChars += len // count total characters
  }

  const durationPerChar = duration / totalChars // calculate duration per character

  for (let i = 0; i < allChunks.length; i++) {
    const len = allChunks[i].replace(/\n/g, '').length // exclude \n characters
    const stringDuration = durationPerChar * len // calculate duration for current chunk
    durations.push(Number(stringDuration.toFixed(2))) // push duration to array
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
  const allChunks = splitTextToChunks(text, chunk)
  const duration = Math.trunc((text.split(' ').length / wpm) * (60 * 1000))
  const durationArray = createDurationArray(allChunks, duration)

  let i = 0
  let currentText = ''
  let timeoutId: ReturnType<typeof setTimeout>

  const animate = () => {
    // recursive function
    if (i === allChunks.length) {
      // stop animation when all chunks are displayed
      setReadTime(duration)
      setRunningOnce(true)
      return
    }

    currentText += allChunks[i] + ' ' // add space after every chunk displayed
    setText(currentText.trim()) // update text state (remove trailing space)
    i++ // increment animation step

    timeoutId = setTimeout(animate, durationArray[i - 1]) // recursive call with duration of current chunk as delay
  }

  timeoutId = setTimeout(animate, durationArray[0]) // initial call with duration of first chunk as delay

  return () => {
    clearTimeout(timeoutId)
  }
}
