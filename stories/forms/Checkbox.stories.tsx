import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox, type CheckboxProps } from "@/forms";
import { Box, Flex } from "@/layout";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Inputs/Checkbox",
  component: Checkbox,
  decorators: [
    // TODO: review this decorator
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

export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "Sorry, buddy. You got me confused with Fred Flintstone.",
  },
};

export const WithHint: Story = {
  args: {
    ...defaultProps,
    label: "This is a checkbox",
    hint: "This is a hint.",
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    label: "Error input:",
    error: "What'd you do?!",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    label: "Some value:",
    note: "Sorry, buddy. You got me confused with Fred Flintstone.",
    hint: "My cat's breath smells like cat food",
    error: "What'd you do?!",
  },
};

export const AsList: Story = {
  render: () => (
    <Box>
      <Checkbox checked={false} label="Thing 1" name="something" value="thing-1" />
      <Checkbox checked={false} label="Thing 2" name="something" value="thing-2" />
      <Checkbox
        checked={false}
        label="Thing 3"
        name="something"
        note="The answer, sadly, is not yes."
        value="thing-3"
      />
      <Checkbox checked={false} label="Thing 4" name="something" value="thing-4" />
      <Checkbox
        checked={false}
        error="I'm not the principal of the line, mother."
        label="Extra thing"
        name="something"
        value="thing-5"
      />
    </Box>
  ),
};
