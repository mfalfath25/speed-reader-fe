// export interface FormValues {
//   textValue: string
//   chunkValue: number
//   wordsPerMinute: number
//   textLevel: string
//   textChoice: string
//   wordCount: number
// }

// export interface TrainingOld {
//   id: string
//   textValue: string
//   chunkValue: number
//   wordsPerMinute: number
// }

export interface Training {
  trainingId: string
  mode: string
  text: Text
  chunksCount: number
  wpm: number
  accuracy: number
  readTime: Date
  readDate: Date
}
export interface Text {
  textId: string
  textLevel: string
  textChoice: string
  textValue: string
  textWordCount: number
  questions: Question[]
}
export interface Question {
  quizId: string
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
