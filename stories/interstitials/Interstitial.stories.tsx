import { INTERSTITIAL_DECORATOR } from "@stories/support/decorators";
import { sampleSentence } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mailbox, PiggyBank } from "lucide-react";
import { Button } from "@/buttons";
import { Interstitial, type InterstitialProps } from "@/interstitials";

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
    iconComponent: undefined,
  },
};

export const WithHeadline: Story = {
  args: {
    ...defaultProps,
    headline: "Extra! Extra!",
  },
};

export const WithHeadlineOptions: Story = {
  args: {
    ...defaultProps,
    headline: "Extra! Extra!",
    headlineLevel: "4",
    headlineWeight: "normal",
  },
};

export const WithHeadlineAndMessage: Story = {
  args: {
    ...defaultProps,
    headline: "Extra! Extra!",
    message: "Todd Smells",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    headline: "Extra! Extra!",
    message: "Todd Smells",
    children: <Button>Read all about it</Button>,
  },
};

export const WithLongMessage: Story = {
  args: {
    ...defaultProps,
    message: sampleSentence,
  },
};

export const WithMessageClassName: Story = {
  args: {
    ...defaultProps,
    message: sampleSentence,
    messageClassName: "text-red-500 truncate",
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
