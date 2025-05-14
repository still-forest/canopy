import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/forms";
import { Tooltip } from "@/components";
import { Flex } from "@/layout";
import { Text } from "@/typography";

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
    <Tooltip tooltipContent="This is a tooltip">
      <Button>Hover over me</Button>
    </Tooltip>
  ),
};

export const WithText: Story = {
  render: () => (
    <Text>
      Hover over{" "}
      <Tooltip tooltipContent="This is a tooltip">
        <span className="cursor-pointer underline decoration-dotted">this.</span>
      </Tooltip>
    </Text>
  ),
};
