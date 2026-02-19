import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleField } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof ToggleField> = {
  title: "Forms/Fields/ToggleField",
  component: ToggleField,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleField>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  label: "90s mode",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const NoLabel: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <ToggleField {...defaultProps} label="Extra small" size="xs" />
      <ToggleField {...defaultProps} label="Small" size="sm" />
      <ToggleField {...defaultProps} label="Medium" size="md" />
      <ToggleField {...defaultProps} label="Large" size="lg" />
      <ToggleField {...defaultProps} label="Extra large" size="xl" />
    </Flex>
  ),
};

export const WithClassNames: Story = {
  args: {
    ...defaultProps,
    className: "data-[state=checked]:bg-blue-100 data-[state=unchecked]:bg-blue-100 rounded-none",
  },
};

export const WithBothLabels: Story = {
  args: {
    label: ["Off", "On"],
  },
};

export const WithOnlyLeftLabel: Story = {
  args: {
    label: ["Off", null],
  },
};

export const WithOnlyRightLabel: Story = {
  args: {
    label: [null, "On"],
  },
};

export const WithLabelClassNames: Story = {
  args: {
    ...defaultProps,
    label: ["Off", "On"],
    labelClassName: ["text-blue-500", "text-red-500"],
  },
};

export const WithCallback: Story = {
  args: {
    ...defaultProps,
    onCheckedChange: (checked: boolean) => {
      window.alert(checked ? "90s mode engaged" : "Returning to the present");
    },
  },
};
