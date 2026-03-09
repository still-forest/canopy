import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@/components";
import { Flex } from "@/layout";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  decorators: [
    (Story) => (
      <Flex gap="2" justify="center">
        <Story />
      </Flex>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex align="start" direction="col" gap="2">
      <Flex align="center" gap="2">
        <Switch defaultChecked size="xs" />
        <span>Extra small</span>
      </Flex>
      <Flex align="center" gap="2">
        <Switch defaultChecked size="sm" />
        <span>Small</span>
      </Flex>
      <Flex align="center" gap="2">
        <Switch defaultChecked size="md" />
        <span>Medium (default)</span>
      </Flex>
      <Flex align="center" gap="2">
        <Switch defaultChecked size="lg" />
        <span>Large</span>
      </Flex>
      <Flex align="center" gap="2">
        <Switch defaultChecked size="xl" />
        <span>Extra large</span>
      </Flex>
    </Flex>
  ),
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
  },
};

export const WithCustomClassName: Story = {
  args: {
    defaultChecked: true,
    className: "data-unchecked:bg-red-500 data-checked:bg-blue-500",
  },
};

export const WithThumbClassName: Story = {
  args: {
    defaultChecked: true,
    className: "data-unchecked:bg-red-500 data-checked:bg-blue-500",
    thumbClassName: "data-unchecked:bg-blue-500 data-checked:bg-red-500",
  },
};
