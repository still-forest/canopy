import ThemeProvider from "@root/src/context/ThemeProvider";
import { THEMES } from "@root/src/context/ThemeProviderContext";
import type { ReactNode } from "react";
import { Flex } from "@/layout";

export const DEFAULT_DECORATOR = (Story: (props: unknown) => ReactNode | Promise<ReactNode>) => (
  <ThemeProvider defaultTheme={THEMES.LIGHT} storageKey="canopy-storybook-theme">
    <div className="w-full bg-background p-1 outline-2 outline-gray-200 ">
      <Story />
    </div>
  </ThemeProvider>
);

export const DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD = (Story: (props: unknown) => ReactNode | Promise<ReactNode>) => (
  <ThemeProvider defaultTheme={THEMES.LIGHT} storageKey="canopy-storybook-theme">
    <div className="w-full min-w-md bg-background p-1 outline-2 outline-gray-200 ">
      <Story />
    </div>
  </ThemeProvider>
);

export const INTERSTITIAL_DECORATOR = (Story: (props: unknown) => ReactNode | Promise<ReactNode>) => (
  <Flex justify="center" align="center" className="min-h-[400px] w-full min-w-md">
    <Story />
  </Flex>
);
