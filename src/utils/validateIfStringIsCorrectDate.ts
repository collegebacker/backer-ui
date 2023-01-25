const validateIfStringIsCorrectDate = (value: string) => {
  // check if the string is a valid date in the format DD/MM/YYYY
  if (value.length < 10) return true

  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/
  return regex.test(value)
}

export default validateIfStringIsCorrectDate
