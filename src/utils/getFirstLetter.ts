import getRandomEmoji from './getRandomEmoji'

const getFirstLetter = (name: string) => {
  // remove spaces before and after the name
  const trimmedName = name.trim()

  if (trimmedName.length === 0) {
    return getRandomEmoji()
  } else {
    return Array.from(trimmedName)[0].toUpperCase()
  }
}

export default getFirstLetter
