import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordField } from "@/forms/PasswordField/PasswordField";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof PasswordField> = {
  title: "Forms/Inputs/PasswordField",
  component: PasswordField,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordField>;

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

export const WithLeftLabelOrientation: Story = {
  args: {
    ...defaultProps,
    label: "Some value:",
    labelOrientation: "left",
  },
};
export const WithError: Story = {
  args: {
    ...defaultProps,
    label: "Password",
    error: "Password is required",
  },
};

export const WithSizeAndLabel: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <PasswordField {...defaultProps} label="Password" placeholder="This password is extra small" size="xs" />
      <PasswordField {...defaultProps} label="Password" placeholder="This password is small" size="sm" />
      <PasswordField
        {...defaultProps}
        label="Password"
        placeholder="This password is medium (default size)"
        size="md"
      />
      <PasswordField {...defaultProps} label="Password" placeholder="This password is large" size="lg" />
      <PasswordField {...defaultProps} label="Password" placeholder="This password is extra large" size="xl" />
    </Flex>
  ),
};
