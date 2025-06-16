export const Colors = {
  primary: "#FF6B00", // Orange utama LifeKost
  secondary: "#2B2B2B", // Hitam gelap
  backgroundLight: "#FFFFFF",
  backgroundDark: "#111111",
  textPrimary: "#1F1F1F",
  textSecondary: "#6B7280", // abu Tailwind default
  grayBorder: "#E5E7EB", // border abu
  success: "#22C55E",
  warning: "#FACC15",
  danger: "#EF4444",
};
export type ColorKey = keyof typeof Colors;
export const ColorValues = Object.values(Colors) as string[];
export const ColorKeys = Object.keys(Colors) as ColorKey[];
export const ColorMap: Record<ColorKey, string> = Colors;

export const ColorMapWithValues: Record<string, string> = Object.fromEntries(
  ColorKeys.map((key) => [key, Colors[key]])
);
export const ColorValuesWithKeys: Record<string, string> = Object.fromEntries(
  ColorValues.map((value, index) => [ColorKeys[index], value])
);
export const ColorEntries: [ColorKey, string][] = Object.entries(Colors) as [ColorKey, string][];
export const ColorEntriesWithValues: [string, string][] = Object.entries(ColorMapWithValues);
export const ColorEntriesWithKeys: [string, string][] = Object.entries(ColorValuesWithKeys);
