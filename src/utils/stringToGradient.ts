const colors = [
  "hsla(277, 51%, 69%)",
  "hsla(270, 49%, 61%)",
  "hsla(240, 49%, 61%)",
  "hsla(15, 91%, 68%)",
  "hsla(198, 88%, 55%)",
  "hsla(15, 85%, 70%)",
  "hsla(225, 25%, 60%)",
  "hsla(2, 65%, 71%)",
  "hsla(349, 90%, 73%)",
  "hsla(0, 68%, 66%)",
  "hsla(41, 100%, 59%)",
  "hsla(58, 64%, 53%)",
  "hsla(166, 45%, 67%)",
  "hsla(164, 61%, 51%)",
  "hsla(145, 4%, 62%)",
];

const darkerColors = colors.map((color) => {
  const [h, s, l] = color
    .replace("hsla(", "")
    .replace(")", "")
    .split(",")
    .map((x) => parseInt(x));
  return `hsla(${h + 120}, ${s + 20}%, ${l + 20}%)`;
});

const stringToGradient = (string: string) => {
  const trimmedString = string.trim().replace(/\s/g, "");

  const startHash = trimmedString
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const startColor = colors[startHash % colors.length];
  const endColor = darkerColors[startHash % darkerColors.length];

  console.log(startColor, endColor);

  return `linear-gradient(200deg, ${startColor} 0%, ${endColor} 100%)`;
};

export default stringToGradient;
