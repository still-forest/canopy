import type { Meta, StoryObj } from "@storybook/react";

import { RadioSelect } from "@/forms";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof RadioSelect> = {
  title: "Forms/Inputs/RadioSelect",
  component: RadioSelect,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
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
