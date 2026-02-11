import type { Meta, StoryObj } from "@storybook/react-vite";
import { CURSOR_TYPES, type CursorType, SimpleTooltip, Tooltip } from "@/components";
import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Heading, Text } from "@/typography";
import { sampleLongText } from "../support/sampleText";
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
      gapY="2"
      options={["arrow", "pointer", "text", "not-allowed"] as CursorType[]}
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
        <Tooltip.Trigger className="inline-block" cursor="arrow">
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
        <Heading level="4" variant="primary">
          This is a heading
        </Heading>
        <hr />
        <Text size="sm" variant="primary">
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

export const OnOpenChangeCallback: Story = {
  render: () => (
    <Tooltip
      onOpenChange={() => {
        window.console.log("Tooltip opened or closed");
      }}
    >
      <Tooltip.Trigger>
        {/* TODO: this is a nested button, needs to be fixed */}
        <Button>Hover over me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

export const WithContentStyle: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger>
        <Button>Hover over me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content className="max-w-sm border-1 border-red-500 opacity-75 p-12">This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger>
        <Button>Hover over me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content className="max-w-sm">{sampleLongText}</Tooltip.Content>
    </Tooltip>
  ),
};

export const AsSimpleTooltip: Story = {
  render: () => <SimpleTooltip content="This is a tooltip">Hover over me</SimpleTooltip>,
};

export const AsSimpleTooltipWithCursor: Story = {
  render: () => (
    <Flex className="flex-wrap" gap="2">
      {CURSOR_TYPES.map((cursor) => (
        <SimpleTooltip content="This is a tooltip" cursor={cursor} key={cursor}>
          <Button size="sm" variant="outline">
            {cursor}
          </Button>
        </SimpleTooltip>
      ))}
    </Flex>
  ),
};

export const AsSimpleTooltipWithSide: Story = {
  render: () => (
    <Flex className="flex-wrap" gap="2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <SimpleTooltip content="This is a tooltip" key={side} side={side}>
          <Button size="sm" variant="outline">
            {side}
          </Button>
        </SimpleTooltip>
      ))}
    </Flex>
  ),
};

export const AsSimpleTooltipWithAlign: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      {(["start", "center", "end"] as const).map((align) => (
        <SimpleTooltip align={align} content="This is a tooltip" key={align}>
          <Button size="sm" variant="outline">
            {align}
          </Button>
        </SimpleTooltip>
      ))}
    </Flex>
  ),
};
