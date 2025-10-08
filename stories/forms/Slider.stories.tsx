import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "@/forms";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Slider> = {
  title: "Forms/Inputs/Slider",
  component: Slider,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
  args: defaultProps,
};

export const WithDefaultValue: Story = {
  args: { ...defaultProps, defaultValue: 20 },
};

export const WithDefaultValueAsArray: Story = {
  args: { ...defaultProps, defaultValue: [20] },
};

export const WithMultipleDefaultValues: Story = {
  args: { ...defaultProps, defaultValue: [20, 60] },
};

export const Vertical: Story = {
  args: { ...defaultProps, orientation: "vertical" },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Slider {...defaultProps} defaultValue={[20]} size="xs" />
      <Slider {...defaultProps} defaultValue={[40]} size="sm" />
      <Slider {...defaultProps} defaultValue={[10]} size="md" />
      <Slider {...defaultProps} defaultValue={[80]} size="lg" />
      <Slider {...defaultProps} defaultValue={[70]} size="xl" />
    </Flex>
  ),
};

export const VerticalSizes: Story = {
  render: () => (
    <Flex direction="row" gap="4">
      <Slider {...defaultProps} defaultValue={[20]} orientation="vertical" size="xs" />
      <Slider {...defaultProps} defaultValue={[40]} orientation="vertical" size="sm" />
      <Slider {...defaultProps} defaultValue={[10]} orientation="vertical" size="md" />
      <Slider {...defaultProps} defaultValue={[80]} orientation="vertical" size="lg" />
      <Slider {...defaultProps} defaultValue={[70]} orientation="vertical" size="xl" />
    </Flex>
  ),
};
