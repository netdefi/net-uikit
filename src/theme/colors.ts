import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#F06292",
  primaryBright: "#D81B60",
  primaryDark: "#ee3124",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#F0B90B",  
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#21201e",
  textDisabled: "#BDC2C4",
  textSubtle: "#21201e",
  borderColor: "#E9EAEB",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    magentaTheme: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#b20000",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#ffffff",
  textDisabled: "#666171",
  textSubtle: "#ffffff",
  borderColor: "#524B63",
  card: "#292929",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    magentaTheme: "linear-gradient(-45deg, #903a57 0%, #903a57 33%, #9e5919 100%)",
  },
};
