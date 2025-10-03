import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumberInput } from "@/forms";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof NumberInput> = {
  title: "Forms/Inputs/NumberInput",
  component: NumberInput,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "mockField",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const WithInitialValue: Story = {
  args: {
    ...defaultProps,
    value: 123.45,
  },
};

export const WithLabel: Story = {
  args: {
    ...defaultProps,
    label: "Some value:",
  },
};
export const WithPlaceholder: Story = {
  args: {
    ...defaultProps,
    placeholder: "Do alligators alligate?",
  },
};

export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "Sorry, buddy. You got me confused with Fred Flintstone.",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    placeholder: "Do alligators alligate?",
    label: "Some value:",
    note: "Sorry, buddy. You got me confused with Fred Flintstone.",
  },
};

export const WithLeftLabelOrientation: Story = {
  args: {
    ...defaultProps,
    label: "Some value:",
    labelOrientation: "left",
  },
};

export const WithCustomStep: Story = {
  args: {
    ...defaultProps,
    step: "10",
  },
};

export const Disabled: Story = {
  args: {
    ...defaultProps,
    label: "Disabled input:",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...defaultProps,
    label: "Read-only input:",
    value: 47,
    readOnly: true,
  },
};

export const WithMinMax: Story = {
  args: {
    ...defaultProps,
    label: "Enter a value between 1 and 100:",
    min: 1,
    max: 100,
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: "What'd you do?!",
  },
};

export const WithSize: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <NumberInput {...defaultProps} placeholder="123.45" size="xs" />
      <NumberInput {...defaultProps} placeholder="123.45" size="sm" />
      <NumberInput {...defaultProps} placeholder="123.45" size="md" />
      <NumberInput {...defaultProps} placeholder="123.45" size="lg" />
      <NumberInput {...defaultProps} placeholder="123.45" size="xl" />
    </Flex>
  ),
};
