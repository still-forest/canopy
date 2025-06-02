import { withoutVitePlugins } from "@storybook/builder-vite";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-themes", "@storybook/addon-docs"],

  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    config.plugins = await withoutVitePlugins(config.plugins, ["vite:dts"]);

    return config;
  },
};

export default config;
