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
      <Badge label="Secondary" variant="secondary" onClick={() => alert("Secondary")} />
      <Badge label="Destructive" variant="destructive" onClick={() => alert("Destructive")} />
      <Badge label="Outline" variant="outline" onClick={() => alert("Outline")} />
    </Flex>
  ),
};

export const CustomClassName: Story = {
  render: () => (
    <Flex gap="2">
      <Badge label="Default" className="font-mono font-thin text-xl uppercase" />
      <Badge label="Secondary" variant="secondary" className="font-mono font-thin text-xl uppercase" />
      <Badge label="Destructive" variant="destructive" className="font-mono font-thin text-xl uppercase" />
      <Badge label="Outline" variant="outline" className="font-mono font-thin text-xl uppercase" />
    </Flex>
  ),
};

export const CustomSolidColor: Story = {
  render: () => (
    <Grid cols="4" gap="2">
      {TAILWIND_COLORS.map((color) => (
        <Flex key={color} justify="center">
          <Badge label={color} color={color} />
        </Flex>
      ))}
    </Grid>
  ),
};

export const CustomOutlineColor: Story = {
  render: () => (
    <Grid cols="4" gap="2">
      {TAILWIND_COLORS.map((color) => (
        <Flex key={color} justify="center">
          <Badge label={color} color={color} variant="outline" />
        </Flex>
      ))}
    </Grid>
  ),
};
