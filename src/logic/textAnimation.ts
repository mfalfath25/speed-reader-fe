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
  wpm: number = 100,
  chunk: number = 1,
  setState: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  callback: () => void = () => {}
): boolean => {
  // setState(null)
  const chunks = splitTextToChunks(text, chunk)
  const duration = (text.split(' ').length / wpm) * 60 * 1000
  let index = 0
  setState(chunks[index])
  const interval = setInterval(() => {
    if (index >= chunks.length - 1) {
      clearInterval(interval)
      callback()
      return setLoading(false)
    }
    setState((prev) => prev + ' ' + chunks[index])
    index++
  }, duration / chunks.length)
  // setLoading(false)
  // console.log(chunks)
  return true
}
