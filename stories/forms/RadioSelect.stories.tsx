import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const WithHint: Story = {
  args: {
    ...defaultProps,
    label: "Favorite Simpson:",
    options: [
      { value: "homer", label: "Homer", hint: "Homer is the father of the Simpson family." },
      { value: "marge", label: "Marge", hint: "Marge is the mother of the Simpson family." },
      { value: "bart", label: "Bart", hint: "Bart is the oldest child of the Simpson family." },
      { value: "lisa", label: "Lisa", hint: "Lisa is the second child of the Simpson family." },
      { value: "maggie", label: "Maggie", hint: "Maggie is the youngest child of the Simpson family." },
    ],
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: "What'd you do?!",
  },
};

export const WithCols: Story = {
  args: {
    ...defaultProps,
    cols: "2",
  },
};

export const SmallSize: Story = {
  args: {
    ...defaultProps,
    size: "sm",
  },
};

export const MediumSize: Story = {
  args: {
    ...defaultProps,
    size: "md",
  },
};

export const LargeSize: Story = {
  args: {
    ...defaultProps,
    size: "lg",
  },
};
