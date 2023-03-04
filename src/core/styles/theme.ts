import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);
export type Color = keyof typeof theme.colors;

export default theme;
