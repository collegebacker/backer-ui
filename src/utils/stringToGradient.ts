const colors = [
  "#D09FCC",
  "#B988D8",
  "#9C6CCD",
  "#F39271",
  "#88D6F8",
  "#77A3FA",
  "#5D6AD8",
  "#A7A0EF",
  "#FBB199",
  "#F18497",
  "#E36C6C",
  "#6171FD",
  "#FFBD2E",
  "#60B093",
  "#85D1BF",
];

const lightenDarkenHex = (hex: string, amount: number) => {
  let usePound = false;

  if (hex[0] === "#") {
    hex = hex.slice(1);
    usePound = true;
  }

  const num = parseInt(hex, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

const stringToGradient = (string: string) => {
  const trimmedString = string.trim().replace(/\s/g, "");

  const startHash = trimmedString
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const startColor = colors[startHash % colors.length];
  const endColor = lightenDarkenHex(startColor, 50);

  console.log(startColor, endColor);

  return `linear-gradient(200deg, ${startColor} 0%, ${endColor} 100%)`;
};

export default stringToGradient;
