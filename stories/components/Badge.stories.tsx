import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components";
import { Flex } from "@/layout";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  decorators: [
    (Story) => (
      <Flex justify="center" className="w-full">
        <Story />
      </Flex>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs = {
  label: "Tagged",
  onClick: undefined,
};

export const Default: Story = {
  args: defaultArgs,
};

export const Clickable: Story = {
  args: { ...defaultArgs, onClick: () => alert("Clicked") },
};

export const CustomClassName: Story = {
  args: { ...defaultArgs, className: "font-mono font-thin text-xl" },
};
