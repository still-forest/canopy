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

const defaultProps = {
  values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};

export const Default: Story = {
  args: defaultProps,
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
