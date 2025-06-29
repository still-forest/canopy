import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box, Flex, Grid } from "@/layout";
import { GAPS, GRID_COLS, GRID_FLOWS, GRID_ROWS, LAYOUT_ELEMENTS } from "@/types";
import { Heading } from "@/typography";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: asOptionalValue(GRID_COLS),
      description: "Controls number of columns in the grid",
      table: {
        type: { summary: summarizeValues(GRID_COLS, true) },
      },
    },
    rows: {
      control: "select",
      options: asOptionalValue(GRID_ROWS),
      description: "Controls number of rows in the grid",
      table: {
        type: { summary: summarizeValues(GRID_ROWS, true) },
      },
    },
    flow: {
      control: "select",
      options: asOptionalValue(GRID_FLOWS),
      description: "Controls how elements in the grid are auto-placed",
      table: {
        type: { summary: summarizeValues(GRID_FLOWS, true) },
      },
    },
    gap: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls size of gutters between grid items (X+Y axes)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapX: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls size of gutters between grid items (X-axis only)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapY: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls size of gutters between grid items (Y-axis only)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    as: {
      control: "select",
      options: asOptionalValue(LAYOUT_ELEMENTS),
      description: "Specific HTML element to use as the basis for the grid container",
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
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <Box className="bg-background">
    <Flex align="center" className="h-16 w-16 rounded-md bg-info text-info-foreground" justify="center">
      {children}
    </Flex>
  </Box>
);

export const Default: Story = {
  args: {
    cols: "3",
    gap: "4",
    as: "div",
    className: "w-full max-w-3xl",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 9 }).map((_, i) => (
        <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const ColumnVariants: Story = {
  args: {
    gap: "4",
    className: "w-full max-w-4xl",
  },
  render: () => (
    <Flex direction="col" gapY="4">
      <div>
        <Heading level="4" weight="medium">
          2 Columns
        </Heading>
        <Grid className="bg-muted" cols="2" gap="4">
          {Array.from({ length: 4 }).map((_, i) => (
            <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading level="4" weight="medium">
          4 Columns
        </Heading>
        <Grid className="bg-muted" cols="4" gap="4">
          {Array.from({ length: 8 }).map((_, i) => (
            <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading level="4" weight="medium">
          6 Columns
        </Heading>
        <Grid className="bg-muted" cols="6" gap="4">
          {Array.from({ length: 12 }).map((_, i) => (
            <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </Flex>
  ),
};

export const GapVariants: Story = {
  args: {
    cols: "3",
    className: "w-full max-w-3xl",
  },
  render: () => (
    <Flex direction="col" gapY="4">
      <div>
        <Heading level="4" weight="medium">
          Small Gap (2)
        </Heading>
        <Grid className="bg-muted" cols="3" gap="2">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading level="4" weight="medium">
          Medium Gap (4)
        </Heading>
        <Grid className="bg-muted" cols="3" gap="4">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading level="4" weight="medium">
          Large Gap (8)
        </Heading>
        <Grid className="bg-muted" cols="3" gap="8">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </Flex>
  ),
};

export const DirectionalGaps: Story = {
  args: {
    cols: "3",
    className: "w-full max-w-3xl",
  },
  render: () => (
    <Flex direction="col" gapY="4">
      <div>
        <Heading leading="none" level="4" weight="medium">
          Horizontal Gap Only
        </Heading>
        <Heading level="6" variant="muted" weight="medium">
          (gapX="6")
        </Heading>
        <Grid className="bg-muted" cols="3" gapX="6" gapY="0">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading leading="none" level="4" weight="medium">
          Vertical Gap Only
        </Heading>
        <Heading level="6" variant="muted" weight="medium">
          (gapY="6")
        </Heading>
        <Grid className="bg-muted" cols="3" gapX="0" gapY="6">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading leading="none" level="4" weight="medium">
          Different Gaps
        </Heading>
        <Heading level="6" variant="muted" weight="medium">
          (gapX="2", gapY="8")
        </Heading>
        <Grid className="bg-muted" cols="3" gapX="2" gapY="8">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </Flex>
  ),
};

export const FlowVariants: Story = {
  args: {
    className: "w-full max-w-3xl h-96",
  },
  render: () => (
    <Flex direction="col" gapY="4">
      <div>
        <Heading level="4" weight="medium">
          Row Flow (default)
        </Heading>
        <Grid className="bg-muted" cols="3" flow="row" gap="4" rows="3">
          {Array.from({ length: 7 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading level="4" weight="medium">
          Column Flow
        </Heading>
        <Grid className="bg-muted" cols="3" flow="col" gap="4" rows="3">
          {Array.from({ length: 7 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <Heading level="4" weight="medium">
          Dense Flow
        </Heading>
        <Grid className="bg-muted" cols="3" flow="dense" gap="4" rows="3">
          {Array.from({ length: 7 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </Flex>
  ),
};

export const CustomElement: Story = {
  args: {
    cols: "3",
    gap: "4",
    as: "section",
    className: "w-full max-w-3xl bg-muted",
  },
  render: (args) => (
    <>
      <Heading className="mb-2" level="4" weight="medium">
        As a{" "}
        <span className="bg-muted font-mono">
          {"<"}section{">"}
        </span>
      </Heading>
      <Grid {...args}>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </Grid>
    </>
  ),
};
