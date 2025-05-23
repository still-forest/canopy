import type { Meta, StoryObj } from "@storybook/react";

import { ErrorOverlay } from "@/interstitials";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof ErrorOverlay> = {
  title: "Interstitials/ErrorOverlay",
  component: ErrorOverlay,
  decorators: [INTERSTITIAL_DECORATOR],
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
