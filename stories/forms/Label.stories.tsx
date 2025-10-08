import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@/forms";
import { Flex } from "@/layout";
import type { Text } from "@/typography";

const meta: Meta<typeof Label> = {
  title: "Forms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Some thing",
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="2">
      <Label size="xs">Extra small</Label>
      <Label size="sm">Small</Label>
      <Label size="md">Medium</Label>
      <Label size="lg">Large</Label>
      <Label size="xl">Extra large</Label>
    </Flex>
  ),
};
