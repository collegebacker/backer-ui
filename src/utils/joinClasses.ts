const joinClasses = (classArray: Array<string | undefined | null>): string => {
  if (!classArray || !classArray.length) {
    return ''
  }

  const nonEmptyClasses = classArray.filter((className) => {
    return className && className.trim().length > 0
  })

  return nonEmptyClasses.join(' ')
}

export default joinClasses
