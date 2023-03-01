export const splitTextToChunks = (
  text: string,
  chunk: number = 1
): string[] => {
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
  setTextState: React.Dispatch<React.SetStateAction<string | null>>,
  setRunningOnce: React.Dispatch<React.SetStateAction<boolean>>,
  setStateReadTime: React.Dispatch<React.SetStateAction<number>>
): void => {
  const totalChunks = splitTextToChunks(text, chunk) // transform text into array of n chunks
  const duration = Math.trunc((text.split(' ').length / wpm) * (60 * 1000)) // calculate duration of how long the animation should run

  setTextState(totalChunks[0]) // set chunk[0] as a new state
  if (totalChunks.length === 1) {
    setStateReadTime(duration) // set reading time (Read Time == duration of animation)
    setRunningOnce(true) // set running once to true
    return
  } else if (totalChunks.length > 1) {
    for (var i = 1; i < totalChunks.length; i++) {
      // Immediately-Invoked Function Expression (IIFE)
      ;((i) => {
        // set timeout for each chunk
        setTimeout(() => {
          setTextState((prev) => prev + ' ' + totalChunks[i]) // set chunk as a new state
          // if last chunk
          if (i === totalChunks.length - 1) {
            setStateReadTime(duration) // set reading time (Read Time == duration of animation)
            setRunningOnce(true) // set running once to true
            // setAnimationStatus(false) // set animation status to false
            return
          }
        }, (duration / totalChunks.length) * i)
      })(i)
    }
  }
}

// export const startTextAnimation = (
//   text: string,
//   wpm: number,
//   chunk: number,
//   setState: React.Dispatch<React.SetStateAction<string | null>>,
//   setAnimationStatus: React.Dispatch<React.SetStateAction<boolean>>,
//   setRunningOnce: React.Dispatch<React.SetStateAction<boolean>>,
//   setStateReadTime: React.Dispatch<React.SetStateAction<number>>
//   // callback: () => void = () => {}
// ): number => {
//   const startTime = performance.now() // start execution timer
//   const totalChunks = splitTextToChunks(text, chunk) // transform text into array of n chunks
//   const duration = (text.split(' ').length / wpm) * (60 * 1000) // calculate duration of how long animation should run
//   let index = 0
//   setState(totalChunks[index]) // set first chunk
//   const interval = setInterval(() => {
//     // start animation interval
//     if (index >= totalChunks.length - 1) {
//       // if last chunk
//       clearInterval(interval) // then stop interval
//       // callback()
//       setAnimationStatus(false)
//       setRunningOnce(true)
//       const endTime = performance.now() // stop execution timer
//       const elapsedTime = endTime - startTime // calculate execution time
//       const formattedElapsedTime = elapsedTime.toFixed(0) // format execution time
//       console.log(formattedElapsedTime)
//       setStateReadTime(Number(formattedElapsedTime)) // set execution time (Read Time)
//       // setStateReadTime(Math.round(elapsedTime / 1000) * 1000) // set execution time (Read Time)
//       return
//     }
//     setState((prev) => prev + ' ' + totalChunks[index]) // else, set next chunk as the new state
//     index++ // increment index
//   }, duration / totalChunks.length) // set interval duration based on chunks length
//   console.log('dur', duration)
//   console.log('chunks', totalChunks)
//   console.log('chunks length', totalChunks.length)
//   return interval
// }

// export const boldEveryNthCharInText = (text: string, n: number, bold: boolean = true): string => {
//   let result = ''
//   for (let i = 0; i < text.length; i++) {
//     if (i % n === 0) {
//       result += bold ? `<b>${text[i]}</b>` : text[i]
//     } else {
//       result += text[i]
//     }
//   }
//   return result
// }
