import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Default" },
};

export const Clickable: Story = {
  args: { label: "Clickable", onClick: () => alert("Clicked") },
};
