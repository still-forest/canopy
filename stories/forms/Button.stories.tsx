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

export const Variants: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Destructive" variant="destructive" />
      <Button label="Outline" variant="outline" />
      <Button label="Link" variant="link" />
      <Button label="Error" variant="error" />
      <Button label="Info" variant="info" />
      <Button label="Success" variant="success" />
      <Button label="Warning" variant="warning" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Unstyled" variant="unstyled" />
    </Flex>
  ),
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
  render: () => (
    <Flex direction="col" gap="4">
      <Button label="Primary" variant="primary" {...iconProps} />
      <Button label="Secondary" variant="secondary" {...iconProps} />
      <Button label="Destructive" variant="destructive" {...iconProps} />
      <Button label="Outline" variant="outline" {...iconProps} />
      <Button label="Ghost" variant="ghost" {...iconProps} />
      <Button label="Error" variant="error" {...iconProps} />
      <Button label="Info" variant="info" {...iconProps} />
      <Button label="Success" variant="success" {...iconProps} />
      <Button label="Warning" variant="warning" {...iconProps} />
      <Button label="Link" variant="link" {...iconProps} />
      <Button label="Unstyled" variant="unstyled" {...iconProps} />
    </Flex>
  ),
};

export const NoText: Story = {
  args: {
    children: <SampleIcon />,
  },
};

export const NoTextAsIcon: Story = {
  render: () => (
    <Flex align="center" direction="row" gap="4">
      <Button asIcon size="xs">
        <SampleIcon />
      </Button>
      <Button asIcon size="sm">
        <SampleIcon />
      </Button>
      <Button asIcon size="default">
        <SampleIcon />
      </Button>
      <Button asIcon size="md">
        <SampleIcon />
      </Button>
      <Button asIcon size="lg">
        <SampleIcon />
      </Button>
      <Button asIcon size="xl">
        <SampleIcon />
      </Button>
    </Flex>
  ),
};
export const NoTextAsIconRounded: Story = {
  render: () => (
    <Flex align="center" direction="row" gap="4">
      <Button asIcon rounded size="xs">
        <SampleIcon />
      </Button>
      <Button asIcon rounded size="sm">
        <SampleIcon />
      </Button>
      <Button asIcon rounded size="default">
        <SampleIcon />
      </Button>
      <Button asIcon rounded size="md">
        <SampleIcon />
      </Button>
      <Button asIcon rounded size="lg">
        <SampleIcon />
      </Button>
      <Button asIcon rounded size="xl">
        <SampleIcon />
      </Button>
    </Flex>
  ),
};

export const NoTextLink: Story = {
  args: {
    children: <SampleIcon />,
    variant: "link",
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
