import { Flex } from "@/layout";
import ThemeProvider from "@root/src/context/ThemeProvider";
import { THEMES } from "@root/src/context/ThemeProviderContext";
import { StoryFn } from "@storybook/react";

export const DEFAULT_DECORATOR = (Story: StoryFn) => (
  <ThemeProvider defaultTheme={THEMES.LIGHT} storageKey="canopy-storybook-theme">
    <div className="w-full bg-background p-1 outline-2 outline-gray-200 ">
      <Story />
    </div>
  </ThemeProvider>
)

export const DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD = (Story: StoryFn) => (
  <ThemeProvider defaultTheme={THEMES.LIGHT} storageKey="canopy-storybook-theme">
    <div className="w-full min-w-md bg-background p-1 outline-2 outline-gray-200 ">
      <Story />
    </div>
  </ThemeProvider>
)

export const INTERSTITIAL_DECORATOR = (Story: StoryFn) => (
    <Flex justify="center" align="center" className="w-full min-w-md min-h-[400px]">
      <Story />
    </Flex>
)