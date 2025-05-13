import type { Meta, StoryObj } from "@storybook/react";

import { ErrorOverlay } from "@/interstitials";

const meta: Meta<typeof ErrorOverlay> = {
  title: "Interstitials/ErrorOverlay",
  component: ErrorOverlay,
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
} satisfies Meta<typeof ErrorOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithMessage: Story = {
  args: {
    message: "Something went wrong",
  },
};

export const WithLongMessage: Story = {
  args: {
    message: "This is a long message because things are totally fucked up.",
  },
};
