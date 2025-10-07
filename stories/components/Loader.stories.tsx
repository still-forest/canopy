import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiggyBank } from "lucide-react";
import { Loader } from "@/components";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Wheel: Story = {
  args: {
    variant: "wheel",
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: PiggyBank,
  },
};
