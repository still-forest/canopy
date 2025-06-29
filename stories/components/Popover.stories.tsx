import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, Separator } from "@/components";
import { Flex } from "@/layout";
import { Heading, Text } from "@/typography";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <Text className="hover:underline">Click me</Text>
      </Popover.Trigger>
      <Popover.Content>This is a Popover</Popover.Content>
    </Popover>
  ),
};

export const Styled: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>
        <Text className="hover:underline">Click me</Text>
      </Popover.Trigger>
      <Popover.Content>
        <Flex className="min-h-[150px]" direction="col">
          <Heading level="3">Popover</Heading>
          <Separator />
          <Text>This is a Popover</Text>
        </Flex>
      </Popover.Content>
    </Popover>
  ),
};
