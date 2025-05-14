import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@/components";
import { Button } from "@/forms";
import { Flex } from "@/layout";
import { Heading, Text } from "@/typography";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <Flex justify="center" className="w-full">
        <Story />
      </Flex>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger>
        <Button>Hover over me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

export const WithText: Story = {
  render: () => (
    <Text>
      Hover over{" "}
      <Tooltip>
        <Tooltip.Trigger>
          <span className="cursor-pointer underline decoration-dotted">this.</span>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>
    </Text>
  ),
};

export const WithComplexContent: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger>
        <Button>Hover over me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <Heading variant="primary" level="4">
          This is a heading
        </Heading>
        <hr />
        <Text variant="primary" size="sm">
          Here's the complex content
        </Text>
      </Tooltip.Content>
    </Tooltip>
  ),
};

export const Open: Story = {
  render: () => (
    <Tooltip open={true}>
      <Tooltip.Trigger>
        <Button>Hover over me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};
