import moment from 'moment'
import { Training } from '../types/model'

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
