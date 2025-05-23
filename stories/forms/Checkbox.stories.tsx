import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, type CheckboxProps } from "@/forms";
import { Box, Flex } from "@/layout";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Inputs/Checkbox",
  component: Checkbox,
  decorators: [ // TODO: review this decorator
    (Story) => (
      <Flex gap="2" justify="center">
        <Story />
      </Flex>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Omit<CheckboxProps, "name"> = {
  label: "This is a checkbox",
  checked: false,
  value: "1",
};

export const Default: Story = {
  args: {
    ...defaultProps,
    name: "default",
  },
};

export const InitiallyChecked: Story = {
  args: { ...defaultProps, name: "initiallyChecked", checked: true },
};

export const AsList: Story = {
  render: () => (
    <Box>
      <Checkbox label="Thing 1" name="something" checked={false} value="thing-1" />
      <Checkbox label="Thing 2" name="something" checked={false} value="thing-2" />
      <Checkbox label="Thing 3" name="something" checked={false} value="thing-3" />
      <Checkbox label="Thing 4" name="something" checked={false} value="thing-4" />
      <Checkbox label="Extra thing" name="something" checked={false} value="thing-5" />
    </Box>
  ),
};
