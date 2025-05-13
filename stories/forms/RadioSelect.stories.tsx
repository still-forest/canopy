import type { Meta, StoryObj } from "@storybook/react";

import { RadioSelect } from "@/forms";
import { Flex } from "@/layout";
import { Box } from "@/layout";

const meta: Meta<typeof RadioSelect> = {
  title: "Forms/Inputs/RadioSelect",
  component: RadioSelect,
  decorators: [
    (Story) => (
      <Flex justify="center" className="w-full">
        <Box className="w-[400px]">
          <Story />
        </Box>
      </Flex>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof RadioSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "someThing",
  options: [
    { value: "homer", label: "Homer" },
    { value: "marge", label: "Marge" },
    { value: "bart", label: "Bart" },
    { value: "lisa", label: "Lisa" },
    { value: "maggie", label: "Maggie" },
  ],
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const WithInitialValue: Story = {
  args: {
    ...defaultProps,
    value: "marge",
  },
};

export const WithLabel: Story = {
  args: {
    ...defaultProps,
    label: "Favorite Simpson:",
  },
};
