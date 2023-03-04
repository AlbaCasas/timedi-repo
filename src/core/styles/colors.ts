import type { Color } from "./theme";
import theme from "./theme";

export const getColorHex = (color: Color) => {
  return theme.colors[color];
};
