import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordInput } from "@/forms/PasswordInput/PasswordInput";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof PasswordInput> = {
  title: "Forms/Inputs/PasswordInput",
  component: PasswordInput,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "password",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const WithLabel: Story = {
  args: {
    ...defaultProps,
    label: "Password",
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...defaultProps,
    placeholder: "super-secret",
  },
};
export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "Your password must be at least 8 characters long",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    placeholder: "super-secret",
    label: "Password",
    note: "Your password must be at least 8 characters long",
  },
};

export const WithSize: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <PasswordInput {...defaultProps} placeholder="This password is extra small" size="xs" />
      <PasswordInput {...defaultProps} placeholder="This password is small" size="sm" />
      <PasswordInput {...defaultProps} placeholder="This password is medium (default size)" size="md" />
      <PasswordInput {...defaultProps} placeholder="This password is large" size="lg" />
      <PasswordInput {...defaultProps} placeholder="This password is extra large" size="xl" />
    </Flex>
  ),
};
