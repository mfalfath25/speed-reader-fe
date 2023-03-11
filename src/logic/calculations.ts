import moment from 'moment'
import { Training, History } from '../types/model'

export const filterDataByMode = (
  data: History[],
  mode: string,
  exclude: boolean
): History[] => {
  return data.filter((item) => {
    if (exclude) {
      return item.mode !== mode
    } else {
      return item.mode === mode
    }
  })
}

export const getFilteredData = (data: History[], mode: string): History[] => {
  let output = data.filter((item) => item.mode === mode)
  return output
}

export const getTrainingCount = (data: History[], mode: string): number => {
  const filteredData = getFilteredData(data, mode)
  return filteredData.length
}

export const getAverageWpm = (data: History[]): number => {
  const filteredData = filterDataByMode(data, 'Custom', true)
  if (filteredData.length === 0) {
    return 0
  }
  const totalWpm = filteredData.reduce((acc, curr) => acc + curr.wpm, 0)
  return Math.round(totalWpm / filteredData.length)
}

export const getAverageAccuracy = (data: History[]): number => {
  const filteredData = filterDataByMode(data, 'Custom', true)
  if (filteredData.length === 0) {
    return 0
  }
  const totalAccuracy = data.reduce((acc, curr) => acc + curr.accuracy, 0)
  return Math.round(totalAccuracy / filteredData.length)
}

export const getTotalAccuracy = (
  data: Training | undefined,
  answer: string[]
): number => {
  const questions = data?.text.questions?.allQuestions || []
  const totalCorrectAnswers = questions.reduce((acc, curr, index) => {
    const correctAnswer = curr.answerOptions.find(
      (item) => item.isCorrect === true
    )
    if (
      correctAnswer !== undefined &&
      answer[index]?.toString() === correctAnswer.answerText
    ) {
      return acc + 1
    }
    return acc
  }, 0)
  return getAccuracyPercentage(totalCorrectAnswers, answer)
}

export const getAccuracyPercentage = (
  correctAnswers: number,
  answer: string[]
): number => {
  const totalCorrectAnswers = (correctAnswers / answer.length) * 100
  return Math.round(totalCorrectAnswers)
}

export const getTotalReadTime = (data: History[]): number => {
  return data.reduce((acc, curr) => acc + curr.readTime, 0)
}

export const getAverageReadTime = (data: History[]): number => {
  if (data.length === 0) {
    return 0
  }
  const totalReadTime = getTotalReadTime(data)
  return Math.round(totalReadTime / data.length)
}

export const getFormattedReadTime = (readTime: number): string => {
  const duration = moment.duration(readTime)
  const hours = Math.floor(duration.asHours())
  const minutes = duration.minutes()
  const seconds = duration.seconds()
  const formattedTime = `${hours}h ${minutes}m ${seconds}s`
  return formattedTime
}

export const getTotalFormattedReadTime = (data: History[]): string => {
  const totalReadTime = getTotalReadTime(data)
  return getFormattedReadTime(totalReadTime)
}

export const getFormattedReadDate = (
  data: History[],
  mode: string
): string[] => {
  const filteredData = getFilteredData(data, mode)
  const output = filteredData.map((item) =>
    moment(item.readDate).format('DD/MM/YYYY')
  )
  return output
}
