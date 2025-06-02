import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageNotFound } from "@/interstitials";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof PageNotFound> = {
  title: "Interstitials/PageNotFound",
  component: PageNotFound,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof PageNotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithGoHome: Story = {
  args: {
    goHome: () => {
      window.alert("Going home...");
    },
  },
};
