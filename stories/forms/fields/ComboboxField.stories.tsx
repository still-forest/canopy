import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComboboxField, type ComboboxFieldProps, type SelectOption } from "@/forms";

const flatOptions: SelectOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Dragonfruit", value: "dragonfruit" },
  { label: "Elderberry", value: "elderberry" },
];

const allFlatValues = flatOptions.map((o) => o.value);

const meta: Meta<typeof ComboboxField> = {
  title: "Forms/Fields/ComboboxField",
  component: ComboboxField,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof ComboboxField>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ComboboxFieldProps = {
  name: "someThing",
  options: flatOptions,
  selectedOptions: allFlatValues,
  onChange: () => {},
};

export const Default: Story = {
  args: defaultProps,
};

export const WithInitialValue: Story = {
  args: {
    ...defaultProps,
    selectedOptions: ["apple", "banana"],
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

export const WithHint: Story = {
  args: {
    ...defaultProps,
    label: "Select a thing:",
    hint: "This is a hint.",
  },
};

export const WithEverything: Story = {
  args: {
    ...defaultProps,
    label: "Select a thing:",
    placeholder: "Pull, Willie!",
    note: "I don't agree to that.",
    hint: "My cat's breath smells like cat food",
    error: "What'd you do?!",
  },
};

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: "What'd you do?!",
  },
};
