export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const removeExtraWhitespaces = (text: string = ''): string => {
  return text.replace(/\s+/g, ' ').trim()
}

export const getTotalChunks = (text: string = ''): number => {
  return text.split(' ').filter((chunk) => chunk !== '').length
}

export const checkCurrentPathname = (
  checkPath: string[],
  currentPath: string
): boolean => {
  return checkPath.some((path) => currentPath.includes(path))
}

export const getFirstLetter = (text: string = '-'): string => {
  if (text === '-') {
    return '-'
  }

  const firstLetters = text
    .split(' ')
    .map((word) => word.charAt(0)?.toUpperCase())
    .join('')

  return firstLetters
}
