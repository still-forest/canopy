import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Grid, Heading, Text } from "@/main";

const meta: Meta = {
  title: "Composition/Layout",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Card: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Box className="rounded-lg bg-card p-6 shadow-md">
        <Box className="mb-4 border-muted border-b pb-4">
          <Heading level="2">Card Title</Heading>
          <Text variant="muted">Card subtitle with additional information</Text>
        </Box>
        <Box className="space-y-2">
          <Text>
            This shows how{" "}
            <Box as="span" className="text-info">
              Box components
            </Box>{" "}
            can be nested to create more complex layouts.
          </Text>
          <Text>Each Box can have its own styling and purpose.</Text>
        </Box>
        <Box className="mt-4 flex justify-end border-muted border-t pt-4">
          <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground" type="button">
            Action
          </button>
        </Box>
      </Box>
    </Flex>
  ),
};

export const Contact: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Flex direction="col" gap="6" className="w-full max-w-lg rounded-lg bg-card p-6 shadow-md">
        <Flex direction="row" align="center" justify="between" className="w-full">
          <Heading level="4">User Profile</Heading>
          <Box className="rounded-full bg-primary/10 p-2 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Some circle</title>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Box>
        </Flex>

        <Box className="h-px w-full bg-border" />

        <Flex direction="row" gap="4" className="w-full">
          <Box className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Heading family="sans">JD</Heading>
          </Box>

          <Flex direction="col" justify="center" gap="1">
            <Text weight="semibold">Jane Doe</Text>
            <Text variant="muted" size="sm">
              Product Designer
            </Text>
          </Flex>
        </Flex>

        <Flex direction="row" gap="4" wrap="wrap" className="w-full">
          <Flex direction="col" gap="1" className="min-w-[120px] flex-1">
            <Text variant="muted" size="sm">
              Email
            </Text>
            <Text weight="medium">jane@example.com</Text>
          </Flex>

          <Flex direction="col" gap="1" className="min-w-[120px] flex-1">
            <Text variant="muted" size="sm">
              Phone
            </Text>
            <Text weight="medium">+1 (555) 123-4567</Text>
          </Flex>
        </Flex>

        <Flex direction="row" gap="4" justify="end" className="w-full">
          <button className="rounded-md bg-secondary px-4 py-2 text-secondary-foreground" type="button">
            Cancel
          </button>
          <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground" type="button">
            Edit Profile
          </button>
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const GridLayout: Story = {
  args: {
    cols: "4",
    rows: "4",
    gap: "4",
    className: "w-full max-w-5xl mb-12",
  },
  render: (args) => (
    <Grid {...args}>
      <Flex align="center" justify="between" className="col-span-4 rounded-lg bg-primary p-4">
        <Heading level="2" variant="primary">
          Dashboard
        </Heading>
        <Flex className="space-x-2">
          <Box className="h-8 w-8 rounded-full bg-info" />
          <Box className="h-8 w-8 rounded-full bg-success" />
          <Box className="h-8 w-8 rounded-full bg-warning" />
          <Box className="h-8 w-8 rounded-full bg-destructive" />
        </Flex>
      </Flex>

      <Box className="col-span-3 row-span-2 rounded-lg bg-muted p-4">
        <Heading level="4" weight="semibold" className="mb-2">
          Main Content Area
        </Heading>
        <Box className="rounded-md bg-background p-2 shadow-sm">
          <Text className="mb-2">{sampleParagraphText[0]}</Text>
          <Text>{sampleParagraphText[1]}</Text>
        </Box>
      </Box>

      <Box className="row-span-2 rounded-lg bg-muted p-4">
        <Heading level="4" weight="semibold" className="mb-2">
          Sidebar
        </Heading>
        <Flex direction="col" gapY="2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} className="rounded bg-background p-2 shadow-sm">
              <Text>Menu Item {i + 1}</Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box className="rounded-lg bg-muted p-4">
        <Text>Widget 1</Text>
      </Box>
      <Box className="rounded-lg bg-muted p-4">
        <Text>Widget 2</Text>
      </Box>
      <Box className="rounded-lg bg-muted p-4">
        <Text>Widget 3</Text>
      </Box>
      <Box className="rounded-lg bg-muted p-4">
        <Text>Widget 4</Text>
      </Box>
    </Grid>
  ),
};
