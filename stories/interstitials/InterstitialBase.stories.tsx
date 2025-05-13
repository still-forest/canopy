import type { Meta, StoryObj } from "@storybook/react";

import { InterstitialBase, type InterstitialProps } from "@/interstitials";
import { Button } from "@/forms";

const meta: Meta<typeof InterstitialBase> = {
  title: "Interstitials/Base",
  component: InterstitialBase,
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
} satisfies Meta<typeof InterstitialBase>;

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
