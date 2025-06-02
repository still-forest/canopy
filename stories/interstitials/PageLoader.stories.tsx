import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiggyBank } from "lucide-react";
import { PageLoader } from "@/interstitials";
import { Flex } from "@/layout";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof PageLoader> = {
  title: "Interstitials/PageLoader",
  component: PageLoader,
  decorators: [INTERSTITIAL_DECORATOR],
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

const BouncingPigs = () => {
  const sharedAnimation = "animate-bounce-y";
  return (
    <Flex gap="2">
      <PiggyBank className={sharedAnimation} size="64" />
      <PiggyBank className={sharedAnimation} size="64" style={{ animationDelay: "0.2s" }} />
      <PiggyBank className={sharedAnimation} size="64" style={{ animationDelay: "0.4s" }} />
    </Flex>
  );
};

export const WithCustomIcon: Story = {
  args: {
    iconComponent: BouncingPigs,
    message: "Something big is coming",
  },
};
