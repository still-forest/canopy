import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioField } from "@/forms";

const meta: Meta<typeof RadioField> = {
  title: "Forms/Fields/RadioField",
  component: RadioField,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof RadioField>;

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

export const WithFieldNotes: Story = {
  args: {
    ...defaultProps,
    label: "Select your favorite Simpson",
    note: "My cat's breath smells like cat food.",
  },
};

export const WithOptionNotes: Story = {
  args: {
    ...defaultProps,
    options: [
      { value: "homer", label: "Homer", note: "Homer is the father of the Simpson family." },
      { value: "marge", label: "Marge", note: "Marge is the mother of the Simpson family." },
      { value: "bart", label: "Bart", note: "Bart is the oldest child of the Simpson family." },
      { value: "lisa", label: "Lisa", note: "Lisa is the second child of the Simpson family." },
      { value: "maggie", label: "Maggie", note: "Maggie is the youngest child of the Simpson family." },
    ],
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
