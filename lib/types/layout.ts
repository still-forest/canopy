import { COLOR_VARIANTS } from "@/types";

export type Theme = "system" | "light" | "dark";

export const LAYOUT_VARIANTS = ["default", ...COLOR_VARIANTS] as const;
export type LayoutVariant = (typeof LAYOUT_VARIANTS)[number];

const NUMERIC_SIZES = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "84",
  "96",
];

export const SIZES = [...NUMERIC_SIZES, "auto", "full", "min", "max", "fit", "px"] as const;
export type Size = (typeof SIZES)[number];

export const WIDTHS = [
  ...SIZES,
  ...["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "screen"],
] as const;
export type Width = (typeof WIDTHS)[number];

export const HEIGHTS = [...SIZES, "screen"] as const;
export type Height = (typeof HEIGHTS)[number];

export const DISPLAYS = [
  "block",
  "flex",
  "grid",
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "list-item",
  "flow-root",
  "contents",
  "table",
  "table-header-group",
  "table-footer-group",
  "table-column-group",
  "table-column",
  "table-row-group",
  "table-row",
  "table-cell",
  "table-caption",
  "hidden",
  "sr-only",
  "not-sr-only",
] as const;
export type Display = (typeof DISPLAYS)[number];

export const BOX_SIZINGS = ["content", "border"] as const;
export type BoxSizing = (typeof BOX_SIZINGS)[number];

export const POSITIONS = ["static", "fixed", "absolute", "relative", "sticky"] as const;
export type Position = (typeof POSITIONS)[number];

export const OVERFLOWS = ["auto", "scroll", "hidden", "clip", "visible"] as const;
export type Overflow = (typeof OVERFLOWS)[number];

// TODO: true shorthand
export const ROUNDED_SIZES = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full", true, false] as const;
export type RoundedSize = (typeof ROUNDED_SIZES)[number];

export const FLEX_DIRECTIONS = ["row", "col", "row-reverse", "col-reverse"] as const;
export type FlexDirection = (typeof FLEX_DIRECTIONS)[number];

export const FLEX_ALIGNS = ["start", "center", "end", "stretch", "baseline"] as const;
export type FlexAlign = (typeof FLEX_ALIGNS)[number];

export const FLEX_JUSTIFIES = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
  "stretch",
  "baseline",
  "normal",
] as const;
export type FlexJustify = (typeof FLEX_JUSTIFIES)[number];

export const FLEX_WRAPS = ["nowrap", "wrap", "wrap-reverse"] as const;
export type FlexWrap = (typeof FLEX_WRAPS)[number];

export const FLEX_GROWS = [
  null,
  true,
  false,
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;
export type FlexGrow = (typeof FLEX_GROWS)[number];

export const GRID_COLS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "none"] as const;
export type GridCols = (typeof GRID_COLS)[number];

export const GRID_ROWS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "none",
] as const;
export type GridRows = (typeof GRID_ROWS)[number];

export const GRID_FLOWS = ["row", "col", "dense", "row-dense", "col-dense"] as const;
export type GridFlow = (typeof GRID_FLOWS)[number];

export const GAPS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
] as const;
export type Gap = (typeof GAPS)[number];
