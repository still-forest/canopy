import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { MultiSelectInput, type SelectOption, type SelectOptionGroup } from "@/forms";
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

export const Default: Story = {
  args: {
    options: flatOptions,
    selectedOptions: allFlatValues,
    onChange: () => {},
  },
};

export const WithFilter: Story = {
  args: {
    options: flatOptions,
    selectedOptions: ["apple", "cherry"],
    onChange: () => {},
  },
};

export const NoneSelected: Story = {
  args: {
    options: flatOptions,
    selectedOptions: [],
    onChange: () => {},
  },
};

export const CustomLabels: Story = {
  args: {
    options: flatOptions,
    selectedOptions: allFlatValues,
    unFilteredLabel: "Showing all fruits",
    filteredLabel: "Filtered fruits",
    onChange: () => {},
  },
};

export const SmallSize: Story = {
  args: {
    options: flatOptions,
    selectedOptions: allFlatValues,
    size: "sm",
    onChange: () => {},
  },
};

export const LargeSize: Story = {
  args: {
    options: flatOptions,
    selectedOptions: allFlatValues,
    size: "lg",
    onChange: () => {},
  },
};

export const GroupedOptions: Story = {
  args: {
    options: groupedOptions,
    selectedOptions: ["apple", "banana", "cherry", "carrot", "broccoli", "spinach"],
    onChange: () => {},
  },
};

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(allFlatValues);

    return (
      <Flex direction="col" gap="4">
        <MultiSelectInput onChange={setSelected} options={flatOptions} selectedOptions={selected} />
        <Text size="sm" variant="muted">
          Selected: {selected.length > 0 ? selected.join(", ") : "none"}
        </Text>
      </Flex>
    );
  },
};
