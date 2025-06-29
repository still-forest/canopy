import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "@/components";
import { Flex, Grid } from "@/layout";
import { TAILWIND_COLORS } from "@/types/color";
import { asOptionalValue, summarizeValues } from "../utils";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: asOptionalValue(TAILWIND_COLORS),
      description: "Controls background color",
      table: {
        type: { summary: summarizeValues(TAILWIND_COLORS, true) },
      },
    },
  },
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
      <Badge label="Secondary" onClick={() => alert("Secondary")} variant="secondary" />
      <Badge label="Destructive" onClick={() => alert("Destructive")} variant="destructive" />
      <Badge label="Outline" onClick={() => alert("Outline")} variant="outline" />
    </Flex>
  ),
};

export const CustomClassName: Story = {
  render: () => (
    <Flex gap="2">
      <Badge className="font-mono font-thin text-xl uppercase" label="Default" />
      <Badge className="font-mono font-thin text-xl uppercase" label="Secondary" variant="secondary" />
      <Badge className="font-mono font-thin text-xl uppercase" label="Destructive" variant="destructive" />
      <Badge className="font-mono font-thin text-xl uppercase" label="Outline" variant="outline" />
    </Flex>
  ),
};

export const CustomSolidColor: Story = {
  render: () => (
    <Grid cols="4" gap="2">
      {TAILWIND_COLORS.map((color) => (
        <Flex justify="center" key={color}>
          <Badge color={color} label={color} />
        </Flex>
      ))}
    </Grid>
  ),
};

export const CustomOutlineColor: Story = {
  render: () => (
    <Grid cols="4" gap="2">
      {TAILWIND_COLORS.map((color) => (
        <Flex justify="center" key={color}>
          <Badge color={color} label={color} variant="outline" />
        </Flex>
      ))}
    </Grid>
  ),
};
