import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof DatePicker> = {
  title: "Forms/Inputs/DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => (
      <Flex gap="2" justify="center">
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  onDateSelection: (date: Date) => {
    window.alert(`Date selected: ${date.toString()}`);
  },
};

export const Default: Story = {
  args: defaultProps,
};

export const WithSelection: Story = {
  args: { ...defaultProps, initialValue: new Date("2024-12-25") },
};

export const ExtraSmall: Story = {
  args: { ...defaultProps, size: "xs" },
};

export const Small: Story = {
  args: { ...defaultProps, size: "sm" },
};

export const Large: Story = {
  args: { ...defaultProps, size: "lg" },
};
