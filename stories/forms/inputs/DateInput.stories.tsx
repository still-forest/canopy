import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateInput } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof DateInput> = {
  title: "Forms/Fields/DateInput",
  component: DateInput,
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "someDate",
};

export const Default: Story = {
  args: defaultProps,
};

export const WithSize: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <DateInput {...defaultProps} size="xs" />
      <DateInput {...defaultProps} size="sm" />
      <DateInput {...defaultProps} size="md" />
      <DateInput {...defaultProps} size="lg" />
      <DateInput {...defaultProps} size="xl" />
    </Flex>
  ),
};
