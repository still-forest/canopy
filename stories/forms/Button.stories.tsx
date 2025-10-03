import type { Meta, StoryObj } from "@storybook/react-vite";
import { Armchair as SampleIcon } from "lucide-react";

import { Button } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof Button> = {
  title: "Forms/Buttons/Default",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-w-48">
        <Story />
      </div>
    ),
  ],
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

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Button label="Extra small" size="xs" />
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
      <Button label="Extra large" size="xl" />
    </Flex>
  ),
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

export const Fit: Story = {
  args: {
    ...defaultProps,
    fit: true,
  },
};

export const Full: Story = {
  args: {
    ...defaultProps,
    full: true,
  },
};

export const FlexContainerDefault: Story = {
  args: {
    ...defaultProps,
  },
  decorators: [
    (Story) => (
      <Flex className="w-full" direction="col" gap="4">
        <Story />
      </Flex>
    ),
  ],
};

export const FlexContainerFit: Story = {
  args: {
    ...defaultProps,
    fit: true,
  },
  decorators: [
    (Story) => (
      <Flex className="w-full" direction="col" gap="4">
        <Story />
      </Flex>
    ),
  ],
};

export const FlexContainerFull: Story = {
  args: {
    ...defaultProps,
    full: true,
  },
  decorators: [
    (Story) => (
      <Flex className="w-full" direction="col" gap="4">
        <Story />
      </Flex>
    ),
  ],
};
