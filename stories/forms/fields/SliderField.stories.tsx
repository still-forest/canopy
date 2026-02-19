import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SliderField } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof SliderField> = {
  title: "Forms/Fields/SliderField",
  component: SliderField,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SliderField>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "example-slider",
};

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
      <SliderField {...defaultProps} defaultValue={[20]} size="xs" />
      <SliderField {...defaultProps} defaultValue={[40]} size="sm" />
      <SliderField {...defaultProps} defaultValue={[10]} size="md" />
      <SliderField {...defaultProps} defaultValue={[80]} size="lg" />
      <SliderField {...defaultProps} defaultValue={[70]} size="xl" />
    </Flex>
  ),
};

export const VerticalSizes: Story = {
  render: () => (
    <Flex direction="row" gap="4">
      <SliderField {...defaultProps} defaultValue={[20]} orientation="vertical" size="xs" />
      <SliderField {...defaultProps} defaultValue={[40]} orientation="vertical" size="sm" />
      <SliderField {...defaultProps} defaultValue={[10]} orientation="vertical" size="md" />
      <SliderField {...defaultProps} defaultValue={[80]} orientation="vertical" size="lg" />
      <SliderField {...defaultProps} defaultValue={[70]} orientation="vertical" size="xl" />
    </Flex>
  ),
};
