const placeholderEmojies = [
  '🐶',
  '🐭',
  '🐹',
  '🐰',
  '🐻',
  '🦊',
  '🐸',
  '🦁',
  '🐯',
  '🐨',
  '🐵',
  '🐔',
  '🐧'
]

const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * placeholderEmojies.length)
  return placeholderEmojies[randomIndex]
}

export default getRandomEmoji
