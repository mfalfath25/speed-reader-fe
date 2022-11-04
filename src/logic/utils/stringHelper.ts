export function capitalizeFirstLetter(text: string): string {
  return text.substring(1).charAt(0).toUpperCase() + text.slice(2)
}

export const removeExtraWhitespaces = (text: string): string => {
  return text?.replace(/\s\s+/g, ' ').trim()
}

export const getTotalChunks = (text: string): number => {
  return text?.split(' ').length
}

export const customSplitString = (text: string, splitBy: string): string[] => {
  return text?.split(splitBy)
}

// const a: string = '/training/custom'
// function splitString(text: string, str: string): string[] {
//   return text.split(str)
// }

// function capitalizeFirstLetter(text: string[]): string[] {
//   text.map(element => {
//     return element.substring(0).charAt(0).toUpperCase() + text.slice(1)
//   })
//   return text
// }

// const b = splitString(a,'/')
// const x = b.filter(e =>  e)

// const z = capitalizeFirstLetter(x)
// console.log(z)
