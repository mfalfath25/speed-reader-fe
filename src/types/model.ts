export interface Training {
  trainingId: string
  traineeId: string
  mode: string
  text: Text
  chunksCount: number
  wpm: number
  accuracy: number
  readTime: number
  readDate: Date
  answers: AnsweredQuestion[]
}
export interface Text {
  textLevel?: string
  textChoice?: string
  textValue: string
  textWordCount: number
  questionPairId?: number
  questions?: Questions
}
export interface Questions {
  questionPairId: number
  allQuestions?: Question[]
}
export interface Question {
  questionText: string
  answerOptions: Answer[]
}
export interface Answer {
  answerText: string
  isCorrect: boolean
}
export interface AnsweredQuestion {
  answer: string
}
export interface History {
  history: Training[]
}
export interface Progress {
  progress: Training[]
  averageWpm?: number
  averageAccuracy?: number
  totalReadTime?: number
  totalTraining?: number
}
export interface Trainee {
  userId: string
  username: string
  email: string
  token: string
  // tests: Training[]
}
export interface FormEditProfileValues {
  username: string
}
export interface FormLoginValues {
  email: string
  password: string
}
export interface FormRegisterValues {
  email: string
  username: string
  password: string
}

// export interface Test {
//   testId: string
//   traineeId: string
//   answers?: Answer[]
//   mode: string
//   wpm: number
//   accuracy: number
//   textWordCount: number
//   readTime: number
//   readDate: Date
// }
