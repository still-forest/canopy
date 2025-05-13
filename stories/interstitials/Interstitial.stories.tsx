import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/forms";
import { Interstitial, type InterstitialProps } from "@/interstitials";
import { Box } from "@/layout";
import { PiggyBank } from "lucide-react";
const meta: Meta<typeof Interstitial> = {
  title: "Interstitials/Base",
  component: Interstitial,
  decorators: [
    (Story) => (
      <Box width="full" className="min-h-[400px]">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Interstitial>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: InterstitialProps = {
  icon: "mailbox",
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

export const PlaneDeparture: Story = {
  args: {
    ...defaultProps,
    icon: "key",
  },
};

export const PlaneInflight: Story = {
  args: {
    ...defaultProps,
    icon: "mailbox",
  },
};

export const PlaneArrival: Story = {
  args: {
    ...defaultProps,
    icon: "shield_check",
  },
};

export const Dizzy: Story = {
  args: {
    ...defaultProps,
    icon: "circle_x",
  },
};

export const Earth: Story = {
  args: {
    ...defaultProps,
    icon: "earth",
  },
};

export const CustomIcon: Story = {
  args: {
    ...defaultProps,
    iconComponent: PiggyBank,
  },
};
