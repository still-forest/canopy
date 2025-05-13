import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@/layout";
import { Code, Text } from "@/typography";
import { sampleLongText } from "@stories/support/sampleText";

const meta: Meta<typeof Code> = {
  title: "Typography/Code",
  component: Code,
  decorators: [
    (Story) => (
      <Box width="full">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Content (text) to render",
      table: {
        type: { summary: "string | React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: "This is a Code component",
  },
};

export const WithLongText: Story = {
  args: {
    children: sampleLongText,
  },
};

export const WithinText: Story = {
  render: () => (
    <Text>
      This is a paragraph with a <Code>Code</Code> component.
    </Text>
  ),
};

export const WithinLargeText: Story = {
  render: () => (
    <Text size="2xl">
      This is a paragraph with a <Code size="2xl">Code</Code> component.
    </Text>
  ),
};
