const stringToGradient = (string: string, saturation = 90, lightness = 70) => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 1) - hash);
    hash = hash & hash;
  }
  const startColor = `hsl(${hash % 60}, ${saturation}%, ${lightness}%)`;
  const endColor = `hsl(${hash % 260}, ${saturation}%, ${lightness}%)`;

  return `linear-gradient(200deg, ${startColor} 0%, ${endColor} 100%)`;
};

export default stringToGradient;
