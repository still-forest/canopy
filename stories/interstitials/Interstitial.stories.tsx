import type { Meta, StoryObj } from "@storybook/react";
import { Mailbox, PiggyBank } from "lucide-react";
import { Button } from "@/forms";
import { Interstitial, type InterstitialProps } from "@/interstitials";
import { Box } from "@/layout";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof Interstitial> = {
  title: "Interstitials/Base",
  component: Interstitial,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof Interstitial>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: InterstitialProps = {
  iconComponent: Mailbox,
  message: "Hey, a thing happened...",
};

export const Default: Story = {
  args: defaultProps,
};

export const NoIcon: Story = {
  args: {
    ...defaultProps,
    icon: undefined,
  },
};

export const WithLongMessage: Story = {
  args: {
    ...defaultProps,
    message: "This is a long message because things are totally fucked up.",
  },
};

export const WithChildren: Story = {
  args: {
    ...defaultProps,
    message: undefined,
    children: <Button variant="ghost">Click on me</Button>,
  },
};

export const CustomIcon: Story = {
  args: {
    ...defaultProps,
    iconComponent: PiggyBank,
  },
};
