import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@/components";
import { Box, Flex } from "@/layout";
import { Heading, Text } from "@/typography";
import { sampleLongText, sampleText } from "../support/sampleText";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <Box>
        <Heading>{sampleText}</Heading>
        <Story />
        <Text>{sampleLongText}</Text>
      </Box>
    ),
  ],
};

export const NoGap: Story = {
  args: { gap: "0" },
  decorators: [
    (Story) => (
      <Box>
        <Heading>{sampleText}</Heading>
        <Story />
        <Text>{sampleLongText}</Text>
      </Box>
    ),
  ],
};

export const SmallGap: Story = {
  args: { gap: "1" },
  decorators: [
    (Story) => (
      <Box>
        <Heading>{sampleText}</Heading>
        <Story />
        <Text>{sampleLongText}</Text>
      </Box>
    ),
  ],
};

export const MediumLargeGap: Story = {
  args: { gap: "8" },
  decorators: [
    (Story) => (
      <Box>
        <Heading>{sampleText}</Heading>
        <Story />
        <Text>{sampleLongText}</Text>
      </Box>
    ),
  ],
};

export const LargeGap: Story = {
  args: { gap: "8" },
  decorators: [
    (Story) => (
      <Box>
        <Heading>{sampleText}</Heading>
        <Story />
        <Text>{sampleLongText}</Text>
      </Box>
    ),
  ],
};

export const ExtraLargeGap: Story = {
  args: { gap: "16" },
  decorators: [
    (Story) => (
      <Box>
        <Heading>{sampleText}</Heading>
        <Story />
        <Text>{sampleLongText}</Text>
      </Box>
    ),
  ],
};

export const Vertical: Story = {
  render: () => (
    <Flex align="center" className="h-5">
      <Text>One</Text>
      <Separator orientation="vertical" />
      <Text>Two</Text>
      <Separator orientation="vertical" />
      <Text>Three</Text>
    </Flex>
  ),
};

export const VerticalNoGap: Story = {
  render: () => (
    <Flex align="center" className="h-5">
      <Text>One</Text>
      <Separator orientation="vertical" gap="0" />
      <Text>Two</Text>
      <Separator orientation="vertical" gap="0" />
      <Text>Three</Text>
    </Flex>
  ),
};

export const VerticalSmallGap: Story = {
  render: () => (
    <Flex align="center" className="h-5">
      <Text>One</Text>
      <Separator orientation="vertical" gap="1" />
      <Text>Two</Text>
      <Separator orientation="vertical" gap="1" />
      <Text>Three</Text>
    </Flex>
  ),
};

export const VerticalMediumLargeGap: Story = {
  render: () => (
    <Flex align="center" className="h-5">
      <Text>One</Text>
      <Separator orientation="vertical" gap="4" />
      <Text>Two</Text>
      <Separator orientation="vertical" gap="4" />
      <Text>Three</Text>
    </Flex>
  ),
};

export const VerticalLargeGap: Story = {
  render: () => (
    <Flex align="center" className="h-5">
      <Text>One</Text>
      <Separator orientation="vertical" gap="8" />
      <Text>Two</Text>
      <Separator orientation="vertical" gap="8" />
      <Text>Three</Text>
    </Flex>
  ),
};

export const VerticalExtraLargeGap: Story = {
  render: () => (
    <Flex align="center" className="h-5">
      <Text>One</Text>
      <Separator orientation="vertical" gap="16" />
      <Text>Two</Text>
      <Separator orientation="vertical" gap="16" />
      <Text>Three</Text>
    </Flex>
  ),
};
