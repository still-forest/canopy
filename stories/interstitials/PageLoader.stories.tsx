import type { Meta, StoryObj } from "@storybook/react";

import { PageLoader } from "@/interstitials";

const meta: Meta<typeof PageLoader> = {
  title: "Interstitials/PageLoader",
  component: PageLoader,
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithMessage: Story = {
  args: {
    message: "Something big is coming",
  },
};
