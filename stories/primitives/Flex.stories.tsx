import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { Box, Flex, type FlexProps, Grid, Heading } from "@/main";
import {
  FLEX_ALIGNS,
  FLEX_DIRECTIONS,
  FLEX_GROWS,
  FLEX_JUSTIFIES,
  FLEX_WRAPS,
  type FlexGrow,
  GAPS,
  LAYOUT_ELEMENTS,
} from "@/types";

const meta: Meta<typeof Flex> = {
  title: "Primitives/Layout/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: asOptionalValue(FLEX_DIRECTIONS),
      description: "Controls the direction of flex items",
      table: {
        type: { summary: summarizeValues(FLEX_DIRECTIONS, true) },
      },
    },
    justify: {
      control: "select",
      options: asOptionalValue(FLEX_JUSTIFIES),
      description: "Controls how flex and grid items are positioned along a container's main axis",
      table: {
        type: { summary: summarizeValues(FLEX_JUSTIFIES, true) },
      },
    },
    align: {
      control: "select",
      options: asOptionalValue(FLEX_ALIGNS),
      description: "Controls how flex and grid items are positioned along a container's cross axis",
      table: {
        type: { summary: summarizeValues(FLEX_ALIGNS, true) },
      },
    },
    grow: {
      control: "select",
      options: asOptionalValue(FLEX_GROWS),
      description: "Controls how flex items grow",
      table: {
        type: { summary: summarizeValues(FLEX_GROWS, true) },
      },
    },
    wrap: {
      control: "select",
      options: asOptionalValue(FLEX_WRAPS),
      description: "Controls how flex items wrap",
      table: {
        type: { summary: summarizeValues(FLEX_WRAPS, true) },
      },
    },
    gap: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls gutters between flex items (X+Y axes)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapX: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls gutters between flex items (X-axis only)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapY: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls gutters between flex items (Y-axis only)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    as: {
      control: "select",
      options: asOptionalValue(LAYOUT_ELEMENTS),
      description: "Specific HTML element to use as the basis for flex",
      table: {
        type: { summary: summarizeValues(LAYOUT_ELEMENTS, true) },
      },
    },
    className: {
      description: "Comma-separated CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const FlexItem = ({ children }: { children: React.ReactNode }) => (
  <Box as="span" className="rounded-md bg-info px-1 py-0.5 text-info-foreground">
    {children}
  </Box>
);

const FlexItemAsFlex = ({ children, className = "", ...rest }: FlexProps) => (
  <Flex className={`rounded-md bg-info px-1 py-0.5 text-info-foreground ${className}`} {...rest}>
    {children}
  </Flex>
);

export const Default: Story = {
  args: {
    direction: "row",
    justify: "center",
    align: "center",
    wrap: "wrap",
    gap: "2",
    as: "div",
    className: "w-full h-full border-1 border-dashed border-gray-300",
    children: (
      <Fragment>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </Fragment>
    ),
  },
  decorators: [
    (Story) => (
      <Box className="h-[300px] w-[300px]">
        <Story />
      </Box>
    ),
  ],
};

export const Direction: Story = {
  render: () => (
    <Grid cols="1" gap="4">
      {FLEX_DIRECTIONS.map((direction, i) => (
        <Flex key={i} direction={direction} gap="1" className="w-full">
          <FlexItem>{direction} 1</FlexItem>
          <FlexItem>{direction} 2</FlexItem>
          <FlexItem>{direction} 3</FlexItem>
        </Flex>
      ))}
    </Grid>
  ),
};

export const Alignment: Story = {
  render: () => (
    <>
      <Heading level="4" family="mono" weight="medium" className="mb-2">
        flex-row
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_ALIGNS.map((align, i) => (
          <Flex
            key={i}
            direction="row"
            align={align}
            gap="1"
            className="h-24 w-full min-w-[200px] rounded-md border-1 border-gray-300 border-dashed p-2"
          >
            <FlexItem>{align} 1</FlexItem>
            <FlexItem>{align} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
      <Heading level="4" family="mono" weight="medium" className="mt-4 mb-2">
        flex-col
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_ALIGNS.map((align, i) => (
          <Flex
            key={i}
            direction="col"
            align={align}
            gap="1"
            className="h-24 w-full min-w-[200px] rounded-md border-1 border-gray-300 border-dashed p-2"
          >
            <FlexItem>{align} 1</FlexItem>
            <FlexItem>{align} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
    </>
  ),
};

export const Justification: Story = {
  render: () => (
    <>
      <Heading level="4" family="mono" weight="medium" className="mb-2">
        flex-row
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_JUSTIFIES.map((justify, i) => (
          <Flex
            key={i}
            direction="row"
            justify={justify}
            gap="1"
            className="w-full min-w-[200px] rounded-md border-1 border-gray-300 border-dashed p-2"
          >
            <FlexItem>{justify} 1</FlexItem>
            <FlexItem>{justify} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
      <Heading level="4" family="mono" weight="medium" className="mt-4 mb-2">
        flex-col
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_JUSTIFIES.map((justify, i) => (
          <Flex
            key={i}
            direction="col"
            justify={justify}
            gap="1"
            className="h-24 w-full min-w-[200px] rounded-md border-1 border-gray-300 border-dashed p-2"
          >
            <FlexItem>{justify} 1</FlexItem>
            <FlexItem>{justify} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
    </>
  ),
};

const FLEX_GROW_EXAMPLES: [FlexGrow, FlexGrow][] = [
  [null, "0"],
  [null, false],
  [null, "1"],
  [null, true],
  ["1", "1"],
  ["1", "4"],
  ["2", "1"],
  ["3", "9"],
  ["12", "1"],
];

export const Grow: Story = {
  render: () => (
    <>
      <Heading level="4" family="mono" weight="medium" className="mb-2">
        flex-grow
      </Heading>
      <Flex direction="col" gap="2" className="min-w-[600px]">
        {FLEX_GROW_EXAMPLES.map(([grow1, grow2]) => (
          <Flex gap="2" key={`grow-${grow1}-${grow2}`}>
            <FlexItemAsFlex grow={grow1} justify="center" className="min-w-[40px]">
              {grow1 === undefined || grow1 === null ? "<>" : grow1.toString()}
            </FlexItemAsFlex>
            <FlexItemAsFlex grow={grow2} justify="center" className="min-w-[40px]">
              {grow2 === undefined || grow2 === null ? "<>" : grow2.toString()}
            </FlexItemAsFlex>
          </Flex>
        ))}
      </Flex>
    </>
  ),
};

export const Gap: Story = {
  render: () => (
    <Flex direction="col" gap="2" className="w-full">
      {GAPS.map((gap, i) => (
        <Flex key={i} direction="row" gap={gap} className="w-full">
          <FlexItem>gap="{gap}"</FlexItem>
          <FlexItem>Two</FlexItem>
          <FlexItem>Three</FlexItem>
        </Flex>
      ))}
    </Flex>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      {FLEX_WRAPS.map((wrap, i) => (
        <Box key={i}>
          <Heading level="4" family="mono" weight="medium" className="mb-2">
            wrap = "{wrap}"
          </Heading>
          <Flex
            direction="row"
            wrap={wrap}
            gap="2"
            className="w-full overflow-x-auto rounded-md border-1 border-gray-300 border-dashed bg-background p-2"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <Box key={i} className="whitespace-nowrap rounded-md bg-muted p-4 text-muted-foreground">
                Item {i + 1}
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  ),
};
