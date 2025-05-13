import type { Meta, StoryObj } from "@storybook/react";

import { NotFoundErrorPage } from "@/interstitials";
import { Box } from "@/layout";

const meta: Meta<typeof NotFoundErrorPage> = {
  title: "Interstitials/NotFoundErrorPage",
  component: NotFoundErrorPage,
  decorators: [
    (Story) => (
      <Box width="full" height="full" className="min-h-[400px]">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundErrorPage>;

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
