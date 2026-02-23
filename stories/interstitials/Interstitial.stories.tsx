import { Button } from "@still-forest/canopy";
import { INTERSTITIAL_DECORATOR } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info, Origami } from "lucide-react";
import { Interstitial, type InterstitialProps } from "@/interstitials";

const meta: Meta<typeof Interstitial> = {
  title: "Interstitials/Interstitial",
  component: Interstitial,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof Interstitial>;

export default meta;

type Story = StoryObj<typeof meta>;

const SampleIcon = <Info />;

const defaultProps: InterstitialProps = {
  icon: SampleIcon,
  headline: "Here ye, hear ye!",
  message: "Ye old town crier proclaimed crappy by all.",
  children: <Button>Good to know</Button>,
};

export const Default: Story = {
  args: defaultProps,
};

export const NoIcon: Story = {
  args: {
    ...defaultProps,
    icon: undefined,
    children: undefined,
  },
};

export const NoHeadline: Story = {
  args: {
    ...defaultProps,
    headline: undefined,
    children: undefined,
  },
};

export const NoMessage: Story = {
  args: {
    ...defaultProps,
    message: undefined,
    children: undefined,
  },
};

export const NoActions: Story = {
  args: {
    ...defaultProps,
    children: undefined,
  },
};

export const OnlyIcon: Story = {
  args: {
    ...defaultProps,
    headline: undefined,
    message: undefined,
    children: undefined,
  },
};

export const OnlyHeadline: Story = {
  args: {
    ...defaultProps,
    icon: undefined,
    message: undefined,
    children: undefined,
  },
};

export const OnlyMessage: Story = {
  args: {
    ...defaultProps,
    headline: undefined,
    icon: undefined,
    children: undefined,
  },
};

export const OnlyIconAndAction: Story = {
  args: {
    ...defaultProps,
    headline: undefined,
    message: undefined,
    children: <Button>Good to know</Button>,
  },
};

export const OnlyHeadlineAndAction: Story = {
  args: {
    ...defaultProps,
    icon: undefined,
    message: undefined,
    children: <Button>Good to know</Button>,
  },
};

export const OnlyMessageAndAction: Story = {
  args: {
    ...defaultProps,
    icon: undefined,
    headline: undefined,
    children: <Button>Good to know</Button>,
  },
};

export const WithLongMessage: Story = {
  args: {
    ...defaultProps,
    message:
      "Ye old town crier proclaimed crappy by all. Chooseth Homer Simpson, and he shalt rock thy world! Good god, he's fabulous!",
  },
};

export const WithMultipleMessages: Story = {
  args: {
    ...defaultProps,
    messages: [
      "Ye old town crier proclaimed crappy by all.",
      "Chooseth Homer Simpson, and he shalt rock thy world! Good god, he's fabulous!",
    ],
  },
};

export const WithSingleGhostAction: Story = {
  args: {
    ...defaultProps,
    message: undefined,
    children: <Button variant="ghost">Good to know</Button>,
  },
};

export const WithMultipleActions: Story = {
  args: {
    ...defaultProps,
    children: (
      <>
        <Button>Good to know</Button>
        <Button variant="ghost">Close</Button>
      </>
    ),
  },
};

export const WithMultipleNonGhostActions: Story = {
  args: {
    ...defaultProps,
    children: (
      <>
        <Button>Good to know</Button>
        <Button variant="secondary">Close</Button>
      </>
    ),
  },
};

export const InfoVariant: Story = {
  args: {
    ...defaultProps,
    variant: "info",
  },
};

export const SuccessVariant: Story = {
  args: {
    ...defaultProps,
    variant: "success",
  },
};

export const WarningVariant: Story = {
  args: {
    ...defaultProps,
    variant: "warning",
  },
};

export const DangerVariant: Story = {
  args: {
    ...defaultProps,
    variant: "danger",
  },
};

export const CustomIcon: Story = {
  args: {
    ...defaultProps,
    icon: <Origami />,
  },
};
