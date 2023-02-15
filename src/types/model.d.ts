export interface Training {
  trainingId: string
  mode: string
  text: Text
  chunksCount: number
  wpm: number
  accuracy: number
  readTime: number
  readDate: Date
  answers: string[]
  isSaved: boolean
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

export interface History {
  trainingId: string
  traineeId: string
  mode: string
  text: {
    textLevel: string
    textChoice: string
    textWordCount: number
  }
  chunksCount: number
  wpm: number
  accuracy: number
  readTime: number
  readDate: Date
}

export interface Trainee {
  userId: string
  username: string
  email: string
  token: string
  trainings: History[]
}

export interface Settings {
  isFontSerif: boolean
  fixationCount: number
  fontColor: string
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

export interface FormSettingsValues extends Settings {}
