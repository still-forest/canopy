import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrigamiIcon } from "lucide-react";
import { Badge } from "@/components";
import { Flex, Grid } from "@/layout";
import { TAILWIND_COLORS } from "@/types/color";
import type { BadgeVariant } from "@/types/variants";
import { Text } from "@/typography";
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
  render: () => {
    const variants: { label: string; variant: BadgeVariant }[] = [
      { label: "Default", variant: "default" },
      { label: "Secondary", variant: "secondary" },
      { label: "Destructive", variant: "destructive" },
      { label: "Outline", variant: "outline" },
      { label: "Info", variant: "info" },
      { label: "Success", variant: "success" },
      { label: "Warning", variant: "warning" },
      { label: "Error", variant: "error" },
    ];

    return (
      <Grid cols="4" gap="2">
        {variants.map(({ label, variant }) => (
          <Flex justify="center" key={variant}>
            <Badge label={label} variant={variant} />
          </Flex>
        ))}
      </Grid>
    );
  },
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

export const WithChildren: Story = {
  render: () => (
    <Flex gap="2">
      <Badge>Just text</Badge>
      <Badge>
        <Text className="text-red-300" weight="bold">
          Formatted text
        </Text>
      </Badge>
      <Badge>
        <OrigamiIcon />
        <span>with icon</span>
      </Badge>
      <Badge>
        <OrigamiIcon />
      </Badge>
    </Flex>
  ),
};

export const WithRender: Story = {
  render: () => (
    <Flex gap="2">
      <Badge>Default</Badge>
      <Badge
        render={(props) => (
          <button type="button" {...props}>
            As a button
          </button>
        )}
      />
      <Badge
        render={(props) => (
          <Flex {...props}>
            <OrigamiIcon size={16} /> <Text className="text-primary-foreground">As Flex with an icon and text</Text>
          </Flex>
        )}
      />
    </Flex>
  ),
};
