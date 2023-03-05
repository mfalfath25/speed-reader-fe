export const splitTextToChunks = (
  text: string,
  chunk: number = 1
): string[] => {
  const chunkedText: string[] = []
  const regex = /(\r\n|\r|\n){1,}/g
  text = text.replace(regex, '$& ')

  const words = text.split(/\s+/)
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
): void => {
  const totalChunks = splitTextToChunks(text, chunk)
  const duration = Math.trunc((text.split(' ').length / wpm) * (60 * 1000))

  const durationArray = createDurationArray(totalChunks, duration)

  if (totalChunks.length === 1) {
    setText(totalChunks[0])
    setReadTime(duration)
    setRunningOnce(true)
    return
  } else if (totalChunks.length > 1) {
    for (let i = 0; i < totalChunks.length; i++) {
      ;((i) => {
        setTimeout(
          () => {
            if (i === 0) {
              setText(totalChunks[i])
            } else {
              setText((prev) => prev + ' ' + totalChunks[i])
              if (i === totalChunks.length - 1) {
                setReadTime(duration)
                setRunningOnce(true)
                return
              }
            }
          },
          durationArray.slice(0, i).reduce((a, b) => a + b, durationArray[0])
        )
      })(i)
    }
  }
}
