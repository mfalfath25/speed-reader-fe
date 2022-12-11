export function capitalizeFirstLetter(text: string): string {
  return text.substring(1).charAt(0).toUpperCase() + text.slice(2)
}

export function checkPathnameDepth(pathname: string): number {
  const depth = pathname.split('/').length - 1
  return depth
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

export const checkCurrentPathname = (checkPath: string[], currentPath: string): boolean => {
  let result = checkPath.some((path) => {
    if (currentPath.includes(path)) {
      return true
    }
    return false
  })
  return result
}

export const getFirstLetter = (text: string): string => {
  const firstLetters = text
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('')
  return firstLetters
}
