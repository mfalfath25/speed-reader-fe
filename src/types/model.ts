export interface FormValues {
  textValue: string
  chunkValue: number
  wordsPerMinute: number
  textLevel: string
  textChoice: string
  wordCount: number
}
export interface Training {
  id: string
  textValue: string
  chunkValue: number
  wordsPerMinute: number
}
export interface Text {
  id: string
  textLevel: string
  textChoice: string
  textValue: string
}
export interface Quiz {
  id: string
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
}
export interface BlindTraining {
  id: string
  wordCount: number
  timer: number
  wordsPerMinute: number
}

export interface FormEditProfileValues {
  username: string
}
