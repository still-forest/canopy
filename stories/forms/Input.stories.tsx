import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/forms";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Input> = {
  title: "Forms/Inputs/Input",
  component: Input,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

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
    value: "Something something",
  },
};
export const Types: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Input {...defaultProps} placeholder="Something something" type="text" />
      <Input {...defaultProps} placeholder="123" type="number" />
      <Input {...defaultProps} placeholder="2025-12-25" type="date" />
      <Input {...defaultProps} placeholder="test@test.com" type="email" />
    </Flex>
  ),
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
    value: "This is read-only content",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    label: "Error input:",
    error: "What'd you do?!",
  },
};

export const WithSize: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Input {...defaultProps} placeholder="This input is extra small" size="xs" />
      <Input {...defaultProps} placeholder="This input is small" size="sm" />
      <Input {...defaultProps} placeholder="This input is medium (default size)" size="md" />
      <Input {...defaultProps} placeholder="This input is large" size="lg" />
      <Input {...defaultProps} placeholder="This input is extra large" size="xl" />
    </Flex>
  ),
};

export const WithSizeAndLabel: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Input {...defaultProps} label="This input is extra small" size="xs" />
      <Input {...defaultProps} label="This input is small" size="sm" />
      <Input {...defaultProps} label="This input is medium (default size)" size="md" />
      <Input {...defaultProps} label="This input is large" size="lg" />
      <Input {...defaultProps} label="This input is extra large" size="xl" />
    </Flex>
  ),
};
