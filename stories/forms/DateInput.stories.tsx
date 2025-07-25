import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateInput } from "@/forms";

const meta: Meta<typeof DateInput> = {
  title: "Forms/Inputs/DateInput",
  component: DateInput,
  tags: ["autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "someDate",
};

export const Default: Story = {
  args: defaultProps,
};

export const WithLabel: Story = {
  args: {
    ...defaultProps,
    label: "Some date:",
  },
};

export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "The world will end on or about this date.",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    label: "Some date:",
    note: "The world will end on or about this date.",
  },
};

export const WithLeftLabelOrientation: Story = {
  args: {
    ...defaultProps,
    label: "Some date:",
    labelOrientation: "left",
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: "What'd you do?!",
  },
};
