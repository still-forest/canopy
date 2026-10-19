import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box, Flex, Grid } from "@/layout";
import {
  GAPS,
  GRID_ALIGN_CONTENTS,
  GRID_ALIGNS,
  GRID_COLS,
  GRID_FLOWS,
  GRID_JUSTIFIES,
  GRID_JUSTIFY_ITEMS,
  GRID_ROWS,
  LAYOUT_ELEMENTS,
} from "@/types";
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
      description:
        "Controls number of columns in the grid. Also accepts a breakpoint map, e.g. { base: '1', md: '3' }.",
      table: {
        type: { summary: summarizeValues(GRID_COLS, true) },
      },
    },
    rows: {
      control: "select",
      options: asOptionalValue(GRID_ROWS),
      description: "Controls number of rows in the grid. Also accepts a breakpoint map, e.g. { base: '1', md: '3' }.",
      table: {
        type: { summary: summarizeValues(GRID_ROWS, true) },
      },
    },
    flow: {
      control: "select",
      options: asOptionalValue(GRID_FLOWS),
      description:
        "Controls how elements in the grid are auto-placed. Also accepts a breakpoint map, e.g. { base: '1', md: '3' }.",
      table: {
        type: { summary: summarizeValues(GRID_FLOWS, true) },
      },
    },
    gap: {
      control: "select",
      options: asOptionalValue(GAPS),
      description:
        "Controls size of gutters between grid items (X+Y axes). Also accepts a breakpoint map, e.g. { base: '1', md: '3' }.",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapX: {
      control: "select",
      options: asOptionalValue(GAPS),
      description:
        "Controls size of gutters between grid items (X-axis only). Also accepts a breakpoint map, e.g. { base: '1', md: '3' }.",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapY: {
      control: "select",
      options: asOptionalValue(GAPS),
      description:
        "Controls size of gutters between grid items (Y-axis only). Also accepts a breakpoint map, e.g. { base: '1', md: '3' }.",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    align: {
      control: "select",
      options: asOptionalValue(GRID_ALIGNS),
      description: "Aligns items within their track on the block axis (align-items). Accepts a breakpoint map.",
      table: {
        type: { summary: summarizeValues(GRID_ALIGNS, true) },
      },
    },
    justify: {
      control: "select",
      options: asOptionalValue(GRID_JUSTIFIES),
      description: "Distributes tracks along the inline axis (justify-content). Accepts a breakpoint map.",
      table: {
        type: { summary: summarizeValues(GRID_JUSTIFIES, true) },
      },
    },
    alignContent: {
      control: "select",
      options: asOptionalValue(GRID_ALIGN_CONTENTS),
      description: "Distributes tracks along the block axis (align-content). Accepts a breakpoint map.",
      table: {
        type: { summary: summarizeValues(GRID_ALIGN_CONTENTS, true) },
      },
    },
    justifyItems: {
      control: "select",
      options: asOptionalValue(GRID_JUSTIFY_ITEMS),
      description: "Aligns items within their track on the inline axis (justify-items). Accepts a breakpoint map.",
      table: {
        type: { summary: summarizeValues(GRID_JUSTIFY_ITEMS, true) },
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

export const ResponsiveColumns: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Flex className="w-full p-4" direction="col" gapY="2">
      <Heading level="4" weight="medium">
        1 column, 2 from <span className="font-mono">sm</span>, 4 from <span className="font-mono">lg</span>
      </Heading>
      <Heading level="6" variant="muted" weight="medium">
        {`cols={{ base: "1", sm: "2", lg: "4" }}`} — resize the preview, or use the viewport toolbar
      </Heading>
      <Grid className="bg-muted" cols={{ base: "1", sm: "2", lg: "4" }} gap="4">
        {Array.from({ length: 8 }).map((_, i) => (
          <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
        ))}
      </Grid>
    </Flex>
  ),
};

export const ResponsiveGaps: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Flex className="w-full p-4" direction="col" gapY="2">
      <Heading level="4" weight="medium">
        Gutters that open up on larger screens
      </Heading>
      <Heading level="6" variant="muted" weight="medium">
        {`gap={{ base: "2", md: "8" }}`}
      </Heading>
      <Grid className="bg-muted" cols={{ base: "2", md: "3" }} gap={{ base: "2", md: "8" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem key={`grid-item-${i}`}>Item {i + 1}</GridItem>
        ))}
      </Grid>
    </Flex>
  ),
};

export const ResponsiveSpans: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Flex className="w-full p-4" direction="col" gapY="2">
      <Heading level="4" weight="medium">
        Stacked on mobile, sidebar layout from <span className="font-mono">md</span>
      </Heading>
      <Heading level="6" variant="muted" weight="medium">
        {`<Grid.Item colSpan={{ base: "12", md: "8" }} />`}
      </Heading>
      <Grid className="bg-muted" cols="12" gap="4">
        <Grid.Item colSpan={{ base: "12", md: "8" }}>
          <Box className="flex h-32 items-center justify-center rounded-md bg-info text-info-foreground">Main</Box>
        </Grid.Item>
        <Grid.Item colSpan={{ base: "12", md: "4" }}>
          <Box className="flex h-32 items-center justify-center rounded-md bg-accent text-accent-foreground">Aside</Box>
        </Grid.Item>
        {Array.from({ length: 4 }).map((_, i) => (
          <Grid.Item colSpan={{ base: "12", sm: "6", lg: "3" }} key={`card-${i}`}>
            <Box className="flex h-20 items-center justify-center rounded-md bg-muted-foreground/20">Card {i + 1}</Box>
          </Grid.Item>
        ))}
      </Grid>
    </Flex>
  ),
};

export const Alignment: Story = {
  render: () => (
    <Flex direction="col" gapY="4">
      {(
        [
          ["align", "items-*", { align: "center" }],
          ["justify", "justify-*", { justify: "between" }],
          ["alignContent", "content-*", { alignContent: "between" }],
          ["justifyItems", "justify-items-*", { justifyItems: "center" }],
        ] as const
      ).map(([name, utility, props]) => (
        <div key={name}>
          <Heading leading="none" level="4" weight="medium">
            {name}
          </Heading>
          <Heading level="6" variant="muted" weight="medium">
            ({utility})
          </Heading>
          <Grid className="h-40 w-full max-w-3xl bg-muted" cols="3" gap="2" {...props}>
            {Array.from({ length: 6 }).map((_, i) => (
              <GridItem key={`grid-item-${i}`}>{i + 1}</GridItem>
            ))}
          </Grid>
        </div>
      ))}
    </Flex>
  ),
};
