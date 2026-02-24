import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof Input> = {
  title: "Forms/Inputs/Input",
  component: Input,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
    placeholder: "Enter a value",
  },
};

export const WithValue: Story = {
  args: {
    name: "with-value",
    value: "Hello, world!",
    readOnly: true,
  },
};

export const Placeholder: Story = {
  args: {
    name: "placeholder",
    placeholder: "Do alligators alligate?",
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    name: "read-only",
    value: "This is read-only content",
    readOnly: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <Input name="extra-small" placeholder="Extra Small (xs)" size="xs" />
      <Input name="small" placeholder="Small (sm)" size="sm" />
      <Input name="medium" placeholder="Medium (md) — default" size="md" />
      <Input name="large" placeholder="Large (lg)" size="lg" />
      <Input name="extra-large" placeholder="Extra Large (xl)" size="xl" />
    </Flex>
  ),
};

export const TypeEmail: Story = {
  args: {
    name: "email",
    placeholder: "user@example.com",
    type: "email",
  },
};

export const TypePassword: Story = {
  args: {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
  },
};

export const TypeNumber: Story = {
  args: {
    name: "number",
    placeholder: "42",
    type: "number",
  },
};
