const joinClasses = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ')
}

export default joinClasses
