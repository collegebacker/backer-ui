const gradients = [
  ["#f6d365", "#fda085"],
  ["#85D1BF", "#78B8B0"],
  ["#FBB199", "#FFD12E"],
  ["#77A3FA", "#C3ECB5"],
  ["#E2ECA6", "#E58784"],
  ["#E2ECA6", "#77A3FA"],
  ["#A7A0EF", "#77A3FA"],
  ["#F89D81", "#E7B7C5"],
  ["#F1DCFC", "#C999CC"],
  ["#5D6AD8", "#85D1BF"],
  ["#FBB199", "#78B8B0"],
  ["#E36C6C", "#FFB6B4"],
  ["#B988D8", "#C3ECB5"],
  ["#A7A0EF", "#88D6F8"],
  ["#A6ECE8", "#DF8BD7"],
  ["#EF819C", "#FADD77"],
  ["#81CDF8", "#8D56AE"],
  ["#FDCEBE", "#D981C0"],
  ["#8CE8B1", "#4885E0"],
  ["#9780D8", "#E3C8A0"],
  ["#94BE39", "#FFF3B4"],
  ["#F6ED96", "#727EF1"],
  ["#EFA0E7", "#88D6F8"],
  ["#DEA6EC", "#DFB48B"],
  ["#FFA4A4", "#737ABB"],
  ["#F8819D", "#A3E598"],
  ["#FDCEBE", "#818AD9"],
  ["#B17DC3", "#FFCFF2"],
];

const stringToGradient = (string: string) => {
  const trimmedString = string.toUpperCase().trim().replace(/\s/g, "");

  const startHash = trimmedString
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const gradient = startHash % gradients.length;

  return `linear-gradient(45deg, ${gradients[gradient][0]} 15%, ${gradients[gradient][1]} 90%)`;
};

export default stringToGradient;
