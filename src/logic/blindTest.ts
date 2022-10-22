export const getBlindTestResult = (totalWords: number, duration: number): number => {
  return Math.round((totalWords / duration) * 60)
}

export const startTimer = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  setStatWpm: React.Dispatch<React.SetStateAction<number>>,
  totalWords: number
) => {
  let time = 0
  let result = 0
  var interval = window.setInterval(() => {
    time++
    // console.log(time)
    setState(time)
    result = getBlindTestResult(totalWords, time)
    // console.log('res', result)
    setStatWpm(result)
  }, 1000)
  return interval
}

export const stopTimer = (interval: number): void => {
  window.clearInterval(interval)
}
