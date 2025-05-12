import { COLOR_VARIANTS } from "@/types";

export const HEADING_LEVELS = ["1", "2", "3", "4", "5", "6"] as const;
export type HeadingSize = (typeof HEADING_LEVELS)[number];

export const FONT_SIZES = [
  "xs",
  "sm",
  "base",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
] as const;
export type FontSize = (typeof FONT_SIZES)[number];

export const FONT_FAMILIES = ["display", "serif", "sans", "mono"] as const;
export type FontFamily = (typeof FONT_FAMILIES)[number];

export const TYPOGRAPHY_VARIANTS = ["default", "inherit", ...COLOR_VARIANTS] as const;
export type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[number];

export const FONT_WEIGHTS = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
] as const;
export type FontWeight = (typeof FONT_WEIGHTS)[number];

export const TEXT_ALIGNS = ["left", "center", "right", "justify", "start", "end"] as const;
export type TextAlign = (typeof TEXT_ALIGNS)[number];

export const TEXT_LEADINGS = ["none", "tight", "snug", "normal", "relaxed", "loose"] as const;
export type TextLeading = (typeof TEXT_LEADINGS)[number];

export const TEXT_TRACKINGS = ["tighter", "tight", "normal", "wide", "wider", "widest"] as const;
export type TextTracking = (typeof TEXT_TRACKINGS)[number];
