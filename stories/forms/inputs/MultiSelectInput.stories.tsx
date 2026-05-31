import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { MultiSelectInput, type MultiSelectInputProps, type SelectOption, type SelectOptionGroup } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const flatOptions: SelectOption[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Dragonfruit", value: "dragonfruit" },
  { label: "Elderberry", value: "elderberry" },
];

const groupedOptions: SelectOptionGroup[] = [
  {
    label: "Fruits",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Cherry", value: "cherry" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { label: "Carrot", value: "carrot" },
      { label: "Broccoli", value: "broccoli" },
      { label: "Spinach", value: "spinach" },
    ],
  },
];

const allFlatValues = flatOptions.map((o) => o.value);

const meta: Meta<typeof MultiSelectInput> = {
  title: "Forms/Inputs/MultiSelectInput",
  component: MultiSelectInput,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof MultiSelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: MultiSelectInputProps = {
  options: flatOptions,
};

export const Default: Story = {
  args: defaultProps,
};

export const AllSelected: Story = {
  args: {
    ...defaultProps,
    defaultSelectedOptions: allFlatValues,
  },
};

export const WithInitialValue: Story = {
  args: {
    ...defaultProps,
    defaultSelectedOptions: ["apple", "cherry"],
  },
};

export const CustomLabels: Story = {
  args: {
    ...defaultProps,
    unFilteredLabel: "Showing all fruits",
    filteredLabel: "Filtered fruits",
  },
};

export const SmallSize: Story = {
  args: {
    ...defaultProps,
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    ...defaultProps,
    size: "lg",
  },
};

export const GroupedOptions: Story = {
  args: {
    ...defaultProps,
    options: groupedOptions,
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(allFlatValues);

    return (
      <Flex direction="col" gap="4">
        <MultiSelectInput {...defaultProps} onChange={setSelected} selectedOptions={selected} />
        <Text size="sm" variant="muted">
          Selected: {selected.length > 0 ? selected.join(", ") : "none"}
        </Text>
      </Flex>
    );
  },
};
