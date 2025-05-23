import type { Meta, StoryObj } from "@storybook/react";
import { type CursorType, Tooltip } from "@/components";
import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Heading, Text } from "@/typography";
import OptionList from "../templates/OptionList";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
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

export const Cursor: Story = {
  render: () => (
    <OptionList
      options={["arrow", "pointer", "text", "not-allowed"] as CursorType[]}
      gapY="2"
      renderOption={(option) => (
        <Tooltip>
          <Tooltip.Trigger cursor={option}>
            <Button className="max-w-40">Hover over me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>This is a tooltip</Tooltip.Content>
        </Tooltip>
      )}
    />
  ),
};

export const WithText: Story = {
  render: () => (
    <Text>
      <Tooltip>
        <Tooltip.Trigger className="inline-block">
          <Box>Hover over me.</Box>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip</Tooltip.Content>
      </Tooltip>{" "}
      <Tooltip>
        <Tooltip.Trigger cursor="arrow" className="inline-block">
          <Box className="underline decoration-dotted">Me too!</Box>
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
