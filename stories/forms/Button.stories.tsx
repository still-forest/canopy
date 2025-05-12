import type { Meta, StoryObj } from "@storybook/react";
import { Armchair as SampleIcon } from "lucide-react";

import { Button } from "@/main";

const meta: Meta<typeof Button> = {
  title: "Forms/Buttons/Default",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  children: "Click me",
};

const iconProps = { icon: <SampleIcon /> };

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const Primary: Story = {
  args: {
    ...defaultProps,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...defaultProps,
    variant: "secondary",
  },
};

export const Subtle: Story = {
  args: {
    ...defaultProps,
    variant: "subtle",
  },
};

export const Destructive: Story = {
  args: {
    ...defaultProps,
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    ...defaultProps,
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    ...defaultProps,
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    ...defaultProps,
    variant: "link",
  },
};

export const Disabled: Story = {
  args: {
    ...defaultProps,
    disabled: true,
  },
};
export const ExtraSmall: Story = {
  args: {
    ...defaultProps,
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    ...defaultProps,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...defaultProps,
    size: "md",
  },
};
export const Large: Story = {
  args: {
    ...defaultProps,
    size: "lg",
  },
};

export const WithIcon: Story = {
  args: {
    ...defaultProps,
    ...iconProps,
  },
};

export const WithIconPrimary: Story = {
  args: {
    ...defaultProps,
    ...iconProps,
    variant: "primary",
  },
};

export const WithIconLink: Story = {
  args: {
    ...defaultProps,
    ...iconProps,
    variant: "link",
  },
};

export const WithIconSubtle: Story = {
  args: {
    ...defaultProps,
    ...iconProps,
    variant: "subtle",
  },
};

export const WithIconGhost: Story = {
  args: {
    ...defaultProps,
    ...iconProps,
    variant: "ghost",
  },
};

export const NoText: Story = {
  args: {
    children: <SampleIcon />,
  },
};

export const NoTextLink: Story = {
  args: {
    children: <SampleIcon />,
    variant: "link",
  },
};

export const NoTextSubtle: Story = {
  args: {
    children: <SampleIcon />,
    variant: "subtle",
  },
};

export const NoTextGhost: Story = {
  args: {
    children: <SampleIcon />,
    variant: "ghost",
  },
};
