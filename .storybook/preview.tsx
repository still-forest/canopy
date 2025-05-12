import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";

import ThemeProvider from "../src/context/ThemeProvider";
import { THEMES } from "../src/context/ThemeProviderContext";

import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme={THEMES.LIGHT} storageKey="canopy-storybook-theme">
        <div className="w-full min-w-[800px] bg-background p-1 outline-2 outline-gray-200 ">
          <Story />
        </div>
      </ThemeProvider>
    ),
    withThemeByClassName({
      themes: {
        [THEMES.LIGHT]: "",
        [THEMES.DARK]: THEMES.DARK,
      },
      defaultTheme: THEMES.LIGHT,
      parentSelector: "html",
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
