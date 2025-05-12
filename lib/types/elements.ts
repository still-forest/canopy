export const LAYOUT_ELEMENTS = [
  "div",
  "span",
  "section",
  "main",
  "header",
  "footer",
  "aside",
  "nav",
  "article",
] as const;
export type LayoutElement = (typeof LAYOUT_ELEMENTS)[number];

export const TYPOGRAPHY_ELEMENTS = ["p", "span", "label", "div", "h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type TypographyElement = (typeof TYPOGRAPHY_ELEMENTS)[number];
