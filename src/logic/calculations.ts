import moment from 'moment'
import { AnsweredQuestion, Training } from '../types/model'

export const getTotalReadTime = (data: Training[]): number => {
  const totalReadTime = data.reduce((acc, curr) => acc + curr.readTime, 0)
  // const output = moment.utc(totalReadTime).format('HH:mm:ss')
  return totalReadTime
}

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
    // totalCorrectAnswers = data.answers.reduce(
    //   (acc, curr, index) =>
    //     questions[index].answerOptions[index].isCorrect === true &&
    //     curr.answer === questions[index].answerOptions[index].answerText
    //       ? acc + 1
    //       : acc,
    //   0
    // )
  } else {
    totalCorrectAnswers = 0
  }
  return getAccuracyPercentage(totalCorrectAnswers)
}

export const getAccuracyPercentage = (correctAnswers: number = 0): number => {
  const totalCorrectAnswers = (correctAnswers / 4) * 100
  return Math.round(totalCorrectAnswers)
}
