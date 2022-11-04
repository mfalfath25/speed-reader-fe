export interface FormValues {
  textValue: string
  chunkValue: number
  wordsPerMinute: number
}

export interface CustomTraining {
  id: string
  textValue: string
  chunkValue: number
  wordsPerMinute: number
}

export interface BlindTraining {
  id: string
  wordCount: number
  timer: number
  wordsPerMinute: number
}
