import type { Meta, StoryObj } from "@storybook/react";

import { SelectInput } from "@/forms";

const meta: Meta<typeof SelectInput> = {
  title: "Forms/Inputs/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectInput>;

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
  onValueChange: (value: string) => console.log("Selected:", value),
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
    label: "Select a thing:",
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...defaultProps,
    placeholder: "Pull, Willie!",
  },
};

export const WithNote: Story = {
  args: {
    ...defaultProps,
    note: "I don't agree to that.",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    label: "Select a thing:",
    placeholder: "Pull, Willie!",
    note: "I don't agree to that.",
  },
};
