import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "@/components";
import { Box, Flex } from "@/layout";
import { GAPS, type Gap } from "@/types";
import { Heading, Text } from "@/typography";
import { sampleLongText, sampleText, sampleText2 } from "../support/sampleText";
import OptionList from "../templates/OptionList";

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

export const Horizontal: Story = {
  render: () => (
    <OptionList<Gap>
      options={GAPS as unknown as Gap[]}
      renderOption={(gap) => (
        <Box>
          <Text>{sampleText}</Text>
          <Separator gap={gap} orientation="horizontal" />
          <Text>{sampleText2}</Text>
        </Box>
      )}
    />
  ),
};

export const Vertical: Story = {
  render: () => (
    <OptionList<Gap>
      gapY="1"
      options={GAPS as unknown as Gap[]}
      renderOption={(gap) => (
        <Flex align="center" className="h-5">
          <Text>One</Text>
          <Separator gap={gap} orientation="vertical" />
          <Text>Two</Text>
          <Separator gap={gap} orientation="vertical" />
          <Text>Three</Text>
        </Flex>
      )}
      withOutline={false}
    />
  ),
};
