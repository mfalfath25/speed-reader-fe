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

export interface FormEditProfileValues {
  username: string
}

export interface FormNormalValues {
  textLevel: string
  textChoice: string
  textValue: string
  chunkValue: number
  wordsPerMinute: number
}

export interface FormBlindValues {
  textLevel: string
  textChoice: string
  textValue: string
}
