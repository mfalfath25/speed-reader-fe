import moment from 'moment'
import { AnsweredQuestion, Training } from '../types/model'

export const getTotalTraining = (data: Training[]): number => {
  return data.length
}

export const getAverageWpm = (data: Training[]): number => {
  const totalWpm = data.reduce(
    (acc, curr) => (filterModes(data).length === 0 ? 0 : acc + curr.wpm),
    0
  )
  return Math.round(totalWpm / data.length)
}

export const getAverageAccuracy = (data: Training[]): number => {
  const totalAccuracy = data.reduce(
    (acc, curr) => (filterModes(data).length === 0 ? 0 : acc + curr.accuracy),
    0
  )
  return Math.round(totalAccuracy / data.length)
}

export const filterModes = (data: Training[]): Training[] => {
  return data.filter((item) => item.mode !== 'Custom')
}

export const getTotalAccuracy = (data: Training, answer: AnsweredQuestion[]): number => {
  const questions = data.text.questions?.allQuestions
  let totalCorrectAnswers = 0
  if (questions !== undefined) {
    for (const [index, value] of questions.entries()) {
      for (const [index2, value2] of value.answerOptions.entries()) {
        if (value2.isCorrect === true) {
          if (answer[index].toString() === value2.answerText) {
            totalCorrectAnswers += 1
          }
        }
      }
    }
  } else {
    totalCorrectAnswers = 0
  }
  return getAccuracyPercentage(totalCorrectAnswers, answer)
}

export const getAccuracyPercentage = (
  correctAnswers: number = 0,
  answer: AnsweredQuestion[]
): number => {
  const totalCorrectAnswers = (correctAnswers / answer.length) * 100
  return Math.round(totalCorrectAnswers)
}

export const getTotalReadTime = (data: Training[]): number => {
  const totalReadTime = data.reduce((acc, curr) => acc + curr.readTime, 0)
  return totalReadTime
}

export const getFormattedReadTime = (readTime: number): string => {
  const output = moment.utc(readTime).format('mm[m]:ss[s]')
  return output
}

export const getTotalFormattedReadTime = (data: Training[]): string => {
  const totalReadTime = getTotalReadTime(data)
  const output = getFormattedReadTime(totalReadTime)
  return output
}

export const getCurrentBlindWpm = (totalWords: number, duration: number): number => {
  return Math.round((totalWords / duration) * 60)
}

export const startTimer = (
  setReadTime: React.Dispatch<React.SetStateAction<number>>,
  setWpm: React.Dispatch<React.SetStateAction<number>>,
  totalWords: number
) => {
  let elapsedTime = 0 // in seconds
  let result = 0 // in wpm
  const interval = window.setInterval(() => {
    elapsedTime++ // increment time every second
    result = getCurrentBlindWpm(totalWords, elapsedTime) // calculate wpm every second
    setWpm(result) // update wpm every second
    setReadTime(elapsedTime * 1000) // update readTime every second
  }, 1000)
  return interval // return interval to be used in stopTimer()
}

export const stopTimer = (interval: number): void => {
  window.clearInterval(interval) // stop timer
}
