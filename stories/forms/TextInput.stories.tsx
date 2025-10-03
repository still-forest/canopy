import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextInput } from "@/forms";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof TextInput> = {
  title: "Forms/Inputs/TextInput",
  component: TextInput,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

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
      <TextInput {...defaultProps} placeholder="This input is small" size="sm" />
      <TextInput {...defaultProps} placeholder="This input is medium (default size)" size="md" />
      <TextInput {...defaultProps} placeholder="This input is large" size="lg" />
      <TextInput {...defaultProps} placeholder="This input is extra large" size="xl" />
    </Flex>
  ),
};
