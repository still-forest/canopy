import { createContext } from "react";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
  SLATE_LIGHT: "slate-light",
  SLATE_DARK: "slate-dark",
} as const;
const themeValues = Object.values(THEMES);

export type Theme = (typeof themeValues)[number];

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: THEMES.LIGHT,
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
