import type { Meta, StoryObj } from "@storybook/react";

import { NotFoundErrorPage } from "@/interstitials";

const meta: Meta<typeof NotFoundErrorPage> = {
  title: "Interstitials/NotFoundErrorPage",
  component: NotFoundErrorPage,
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
