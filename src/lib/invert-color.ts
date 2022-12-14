const padZero = (str: string, len: number = 2) => {
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

const invertColor = (hex: string, bw: boolean) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  let r = Number.parseInt(hex.slice(0, 2), 16);
  let g = Number.parseInt(hex.slice(2, 4), 16);
  let b = Number.parseInt(hex.slice(4, 6), 16);

  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#ffffff";
  }

  const newR = (255 - r).toString(16);
  const newG = (255 - g).toString(16);
  const newB = (255 - b).toString(16);

  return "#" + padZero(newR) + padZero(newG) + padZero(newB);
};

export { invertColor };
