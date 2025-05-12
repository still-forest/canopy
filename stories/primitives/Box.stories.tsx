import { sampleLongText, sampleLongWord, sampleSentences } from "@stories/support/sampleText";
import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Grid, Text } from "@/main";
import type { Display as DisplayType, Height as HeightType, Width as WidthType } from "@/types";
import {
  BOX_SIZINGS,
  DISPLAYS,
  HEIGHTS,
  LAYOUT_ELEMENTS,
  LAYOUT_VARIANTS,
  OVERFLOWS,
  POSITIONS,
  ROUNDED_SIZES,
  SIZES,
  WIDTHS,
} from "@/types";

const meta: Meta<typeof Box> = {
  title: "Primitives/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: LAYOUT_ELEMENTS,
      description: "Specific HTML element to use",
      table: {
        type: { summary: summarizeValues(LAYOUT_ELEMENTS, true) },
      },
    },
    variant: {
      control: "select",
      options: asOptionalValue(LAYOUT_VARIANTS),
      description: "Controls background and text color, according to the theme",
      table: {
        type: { summary: summarizeValues(LAYOUT_VARIANTS, true) },
      },
    },
    size: {
      control: "select",
      options: asOptionalValue(SIZES),
      description: "Controls the width and height of an element",
      table: {
        type: { summary: summarizeValues(SIZES, true) },
      },
    },
    width: {
      control: "select",
      options: asOptionalValue(WIDTHS),
      description: "Controls the width of an element",
      table: {
        type: { summary: summarizeValues(WIDTHS, true) },
      },
    },
    height: {
      control: "select",
      options: asOptionalValue(HEIGHTS),
      description: "Controls the height of an element",
      table: {
        type: { summary: summarizeValues(HEIGHTS, true) },
      },
    },
    sizing: {
      control: "select",
      options: asOptionalValue(BOX_SIZINGS),
      description: "Control how the browser should calculate an element's total size",
      table: {
        type: { summary: summarizeValues(BOX_SIZINGS, true) },
      },
    },
    display: {
      control: "select",
      options: asOptionalValue(DISPLAYS),
      description: "Control the display box type of an element",
      table: {
        type: { summary: summarizeValues(DISPLAYS, true) },
      },
    },
    position: {
      control: "select",
      options: asOptionalValue(POSITIONS),
      description: "Control how an element is positioned in the document",
      table: {
        type: { summary: summarizeValues(POSITIONS, true) },
      },
    },
    overflow: {
      control: "select",
      options: asOptionalValue(OVERFLOWS),
      description: "Control how an element handles content that is too large for the container (X & Y axis)",
      table: {
        type: { summary: summarizeValues(OVERFLOWS, true) },
      },
    },
    overflowX: {
      control: "select",
      options: asOptionalValue(OVERFLOWS),
      description: "Control how an element handles content that is too large for the container (X-axis only)",
      table: {
        type: { summary: summarizeValues(OVERFLOWS, true) },
      },
    },
    overflowY: {
      control: "select",
      options: asOptionalValue(OVERFLOWS),
      description: "Control how an element handles content that is too large for the container (Y-axis only)",
      table: {
        type: { summary: summarizeValues(OVERFLOWS, true) },
      },
    },
    rounded: {
      control: "select",
      options: asOptionalValue(ROUNDED_SIZES),
      description: "Controls the corner radius of the container",
      table: {
        type: { summary: summarizeValues(ROUNDED_SIZES, true) },
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
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    as: "div",
    className: "border-1 border-gray-300",
    children: "This is a Box component",
  },
  decorators: [
    (Story) => (
      <Box className="h-[400px] w-[600px] border-1 border-gray-300 border-dashed p-1">
        <Story />
      </Box>
    ),
  ],
};

export const Variants: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {LAYOUT_VARIANTS.map((variant) => (
        <Box key={`box-variant-${variant}`} variant={variant} size="36" className="p-2">
          <Flex align="center" justify="center" className="h-full w-full">
            <Text variant="inherit" family="mono" align="center" className="bg-background/10 px-2">
              {variant}
            </Text>
          </Flex>
        </Box>
      ))}
    </Grid>
  ),
};

const SIZE_EXAMPLES: WidthType[] = [
  "auto",
  "1",
  "6",
  "12",
  "20",
  "28",
  "px",
  "min",
  "max",
  "fit",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
];
export const Size: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {SIZE_EXAMPLES.map((size) => (
        <Box key={`box-size-${size}`} className="size-[128px] border-1 border-gray-300 border-dashed p-2">
          <Box size={size} className="border-1 border-gray-300 bg-muted">
            {size}
          </Box>
        </Box>
      ))}
    </Grid>
  ),
};

const WIDTH_EXAMPLES: WidthType[] = [
  "auto",
  "1",
  "6",
  "12",
  "24",
  "36",
  "48",
  "96",
  "px",
  "min",
  "max",
  "fit",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
];
export const Width: Story = {
  render: () => (
    <Grid cols="1" gap="2" className="m-4 w-[600px]">
      {WIDTH_EXAMPLES.map((width) => (
        <Box key={`box-width-${width}`} className="border-1 border-gray-300 border-dashed p-1">
          <Box width={width} className="border-1 border-gray-300 bg-muted">
            {width}
          </Box>
        </Box>
      ))}
    </Grid>
  ),
};

const HEIGHT_EXAMPLES: HeightType[] = ["1", "6", "12", "24", "36", "48", "auto", "full", "min", "max", "fit", "px"];
export const Height: Story = {
  render: () => (
    <Grid cols="6" gap="2" className="m-4">
      {HEIGHT_EXAMPLES.map((height) => (
        <Box key={`box-height-${height}`} className="h-[300px] w-[48px] border-1 border-gray-300 border-dashed p-1">
          <Box height={height} className="border-1 border-gray-300 bg-muted">
            {height}
          </Box>
        </Box>
      ))}
    </Grid>
  ),
};

const DISPLAY_EXAMPLES: DisplayType[] = ["inline", "inline-block", "block", "hidden"];

export const Display: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-[600px]">
      {DISPLAY_EXAMPLES.map((display) => (
        <Box key={`box-display-${display}`} className="border-1 border-gray-300 border-dashed p-1">
          <Text>
            {sampleSentences.slice(0, 2).join(".")}.{" "}
            <Box display={display} className="bg-foreground/10 font-mono">
              This is display: {display}.
            </Box>{" "}
            {sampleSentences.slice(2).join(".")}
          </Text>
        </Box>
      ))}
    </Flex>
  ),
};

export const BoxSizing: Story = {
  render: () => (
    <Flex align="center" gap="4" className="m-4">
      {BOX_SIZINGS.map((sizing) => (
        <Box
          key={`box-sizing-${sizing}`}
          sizing={sizing}
          className="size-[128px] border-4 border-gray-300 border-dashed p-4"
        >
          <Flex align="center" justify="center" className="h-full w-full bg-muted">
            {sizing}
          </Flex>
        </Box>
      ))}
    </Flex>
  ),
};

export const Position: Story = {
  render: () => (
    <Box>
      <Box position="relative" width="xl" height="full" className="rounded bg-info/10 p-4">
        <Text>Relative parent</Text>
        <Box position="static" className="rounded bg-info/20 p-4 ">
          <Text>Static parent</Text>
          <Box position="static" className="inline-block rounded bg-info/20 p-4">
            <Text>Static child 1</Text>
          </Box>
          <Box position="static" className="ml-2 inline-block rounded bg-info/20 p-4">
            <Text>Static child 2</Text>
          </Box>
          <Box position="absolute" className="top-0 right-0 rounded bg-info/60 p-4">
            <Text>Absolute child</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const Overflow: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      {OVERFLOWS.map((overflow) => (
        <Box
          key={`box-overflow-${overflow}`}
          overflow={overflow}
          width="xs"
          className="h-[96px] border-1 border-gray-300 border-dashed p-2"
        >
          <Text size="sm">
            <span className="bg-muted font-mono">{overflow}</span> {sampleLongText}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

export const OverflowX: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      {OVERFLOWS.map((overflow) => (
        <Box
          key={`box-overflow-x-${overflow}`}
          overflowX={overflow}
          overflowY="clip"
          width="xs"
          className="h-[56px] border-1 border-gray-300 border-dashed p-2"
        >
          <Text size="sm" className="whitespace-nowrap">
            <span className="bg-muted font-mono">{overflow}</span> {sampleLongWord}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

export const OverflowY: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      {OVERFLOWS.map((overflow) => (
        <Box
          key={`box-overflow-y-${overflow}`}
          overflowY={overflow}
          width="xs"
          className="h-[96px] border-1 border-gray-300 border-dashed p-2"
        >
          <Text size="sm">
            <span className="bg-muted font-mono">{overflow}</span> {sampleLongText}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

export const RoundedCorners: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {ROUNDED_SIZES.map((roundedSize) => (
        <Box key={`box-rounded-${roundedSize}`} rounded={roundedSize} size="24" className="bg-info p-2">
          <Flex align="center" justify="center" className="h-full w-full">
            <Text family="mono" align="center" className="bg-background/20 px-2">
              {roundedSize.toString()}
            </Text>
          </Flex>
        </Box>
      ))}
    </Grid>
  ),
};

export const StyleExamples: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      <Box className="border-1 border-gray-300 border-dashed p-4 text-foreground">padding</Box>
      <Box className="border-1 border-gray-300 border-dashed p-4 text-foreground">centered</Box>
      <Box className="rounded-md bg-muted p-4 text-muted-foreground">rounded background</Box>
      <Box className="rounded-md bg-card p-4 text-card-foreground shadow-md">shadow</Box>
      <Box className="rounded-md border-1 bg-card p-4 text-card-foreground shadow">rounded border</Box>
      <Box className="rounded-md bg-muted p-4 text-card-foreground outline-2 outline-gray-300 outline-offset-2">
        outline, background
      </Box>
    </Grid>
  ),
};

export const AlternateElements: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      {LAYOUT_ELEMENTS.map((as, i) => (
        <Box key={i} as={as} className="rounded-md border-1 border-gray-300 p-4 text-center text-foreground">
          {"<"}
          {as}
          {">"}
        </Box>
      ))}
    </Grid>
  ),
};
