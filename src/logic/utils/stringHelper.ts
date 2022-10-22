export function capitalizeFirstLetter(text: string): string {
  return text.substring(1).charAt(0).toUpperCase() + text.slice(2)
}

export const removeExtraWhitespaces = (text: string): string => {
  return text?.replace(/\s\s+/g, ' ').trim()
}

export const getTotalChunks = (text: string): number => {
  return text?.split(' ').length
}
