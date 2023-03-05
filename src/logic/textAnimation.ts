import { useState, useEffect } from 'react'

export const splitTextToChunks = (
  text: string,
  chunk: number = 1
): string[] => {
  const chunkedText: string[] = []
  const regex = /(\r\n|\r|\n){1,}/g
  text = text.replace(regex, '$& ')

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

// USING SETTIMEOUT WITH FOR LOOP
// export const startTextAnimation = (
//   text: string,
//   wpm: number,
//   chunk: number,
//   setText: React.Dispatch<React.SetStateAction<string | null>>,
//   setRunningOnce: React.Dispatch<React.SetStateAction<boolean>>,
//   setReadTime: React.Dispatch<React.SetStateAction<number>>
// ): void => {
//   const totalChunks = splitTextToChunks(text, chunk)
//   const duration = Math.trunc((text.split(' ').length / wpm) * (60 * 1000))

//   console.log('totalChunks', totalChunks)

//   const durationArray = createDurationArray(totalChunks, duration)

//   if (totalChunks.length === 1) {
//     setText(totalChunks[0])
//     setReadTime(duration)
//     setRunningOnce(true)
//     return
//   } else if (totalChunks.length > 1) {
//     for (let i = 0; i < totalChunks.length; i++) {
//       ;((i) => {
//         setTimeout(
//           () => {
//             if (i === 0) {
//               setText(totalChunks[i])
//             } else {
//               setText((prev) => prev + ' ' + totalChunks[i])
//               if (i === totalChunks.length - 1) {
//                 setReadTime(duration)
//                 setRunningOnce(true)
//                 return
//               }
//             }
//           },
//           durationArray.slice(0, i).reduce((a, b) => a + b, durationArray[0])
//         )
//       })(i)
//     }
//   }
// }

// USING SETINTERVAL
// export const startTextAnimation = (
//   text: string,
//   wpm: number,
//   chunk: number,
//   setText: React.Dispatch<React.SetStateAction<string | null>>,
//   setRunningOnce: React.Dispatch<React.SetStateAction<boolean>>,
//   setReadTime: React.Dispatch<React.SetStateAction<number>>
// ): (() => void) => {
//   const totalChunks = splitTextToChunks(text, chunk)
//   const duration = Math.trunc((text.split(' ').length / wpm) * (60 * 1000))
//   const durationArray = createDurationArray(totalChunks, duration)

//   let i = 0
//   let currentText = ''
//   const intervalId = setInterval(() => {
//     if (i === totalChunks.length) {
//       clearInterval(intervalId)
//       setReadTime(duration)
//       setRunningOnce(true)
//       return
//     }

//     currentText += totalChunks[i] + ' '
//     setText(currentText.trim())
//     i++
//   }, durationArray[i])

//   return () => {
//     clearInterval(intervalId)
//   }
// }

// USING SETTIMEOUT WITH RECURSION
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

  console.log('total expected ', duration)

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
    timeoutId = setTimeout(animate, durationArray[i])
  }

  timeoutId = setTimeout(animate, durationArray[0])

  return () => {
    clearTimeout(timeoutId)
  }
}
