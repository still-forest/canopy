import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

import { THEMES } from "../src/context/ThemeProviderContext";
import { DEFAULT_DECORATOR } from "../stories/support/decorators";

import "../src/styles/index.css";

const preview: Preview = {
  decorators: [
    DEFAULT_DECORATOR,
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
