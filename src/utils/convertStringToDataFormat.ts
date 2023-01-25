const convertStringToDataFormat = (value: string) => {
  let formatToOnlyNumbers = value.replace(/[^0-9]/g, '')

  // convert to DD/MM/YYYY
  if (formatToOnlyNumbers.length > 2) {
    formatToOnlyNumbers = `${formatToOnlyNumbers.substring(
      0,
      2
    )}/${formatToOnlyNumbers.substring(2)}`
  }
  if (formatToOnlyNumbers.length > 5) {
    formatToOnlyNumbers = `${formatToOnlyNumbers.substring(
      0,
      5
    )}/${formatToOnlyNumbers.substring(5)}`
  }

  // limit to 10 characters
  if (formatToOnlyNumbers.length > 10) {
    formatToOnlyNumbers = formatToOnlyNumbers.substring(0, 10)
  }

  return formatToOnlyNumbers
}

export default convertStringToDataFormat
