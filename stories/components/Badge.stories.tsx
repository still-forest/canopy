import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components";
import { Flex, Grid } from "@/layout";

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

export const Variants: Story = {
  render: () => (
    <Flex gap="2">
      <Badge label="Default" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Destructive" variant="destructive" />
      <Badge label="Outline" variant="outline" />
    </Flex>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Flex gap="2">
      <Badge label="Default" onClick={() => alert("Default")} />
      <Badge label="Secondary" variant="secondary" onClick={() => alert("Secondary")} />
      <Badge label="Destructive" variant="destructive" onClick={() => alert("Destructive")} />
      <Badge label="Outline" variant="outline" onClick={() => alert("Outline")} />
    </Flex>
  ),
};

export const CustomClassName: Story = {
  render: () => (
    <Flex gap="2">
      <Badge label="Default" className="font-mono uppercase font-thin text-xl" />
      <Badge label="Secondary" variant="secondary" className="font-mono uppercase font-thin text-xl" />
      <Badge label="Destructive" variant="destructive" className="font-mono uppercase font-thin text-xl" />
      <Badge label="Outline" variant="outline" className="font-mono uppercase font-thin text-xl" />
    </Flex>
  ),
};
