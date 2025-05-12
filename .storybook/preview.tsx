import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";

import ThemeProvider from "../src/context/ThemeProvider";

import "@src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="breeze-primitives-storybook-theme">
        <div className="bg-background p-1 outline-2 outline-gray-200">
          <Story />
        </div>
      </ThemeProvider>
    ),
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
        slateLight: "slate-light",
        slateDark: "slate-dark",
      },
      defaultTheme: "light",
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
