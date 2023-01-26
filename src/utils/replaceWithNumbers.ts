const replaceWithNumbers = (value: string) => {
  let formatToOnlyNumbers = value.replace(/[^0-9]/g, '')

  return formatToOnlyNumbers
}

export default replaceWithNumbers
