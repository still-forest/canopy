import type { Meta, StoryObj } from "@storybook/react-vite";

import { CopyButton } from "@/forms";
import { Flex } from "@/layout";
import { sampleParagraphText } from "../../support/sampleText";

const meta: Meta<typeof CopyButton> = {
  title: "Forms/Buttons/Copy",
  component: CopyButton,
  tags: ["autodocs"],
} satisfies Meta<typeof CopyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  content: sampleParagraphText.join("\n\n"),
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <CopyButton {...defaultProps} size="xs" />
      <CopyButton {...defaultProps} size="sm" />
      <CopyButton {...defaultProps} size="md" />
      <CopyButton {...defaultProps} size="lg" />
      <CopyButton {...defaultProps} size="xl" />
    </Flex>
  ),
};

export const WithVariant: Story = {
  args: {
    ...defaultProps,
    variant: "outline",
  },
};
