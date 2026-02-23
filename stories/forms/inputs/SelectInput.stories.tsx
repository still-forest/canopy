import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SelectInput, type SelectOption, type SelectOptionGroup } from "@/forms";
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

const meta: Meta<typeof SelectInput> = {
  title: "Forms/Inputs/SelectInput",
  component: SelectInput,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
    options: flatOptions,
    onChange: () => {},
  },
};

export const WithPlaceholder: Story = {
  args: {
    name: "placeholder",
    options: flatOptions,
    placeholder: "Pick a fruit...",
    onChange: () => {},
  },
};

export const WithValue: Story = {
  args: {
    name: "with-value",
    options: flatOptions,
    value: "cherry",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled",
    options: flatOptions,
    disabled: true,
    onChange: () => {},
  },
};

export const GroupedOptions: Story = {
  args: {
    name: "grouped",
    options: groupedOptions,
    placeholder: "Pick a food...",
    onChange: () => {},
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <Flex direction="col" gap="4">
        <SelectInput
          name="controlled"
          onChange={(v) => setValue(v ?? null)}
          options={flatOptions}
          placeholder="Pick a fruit..."
          value={value}
        />
        <Text size="sm" variant="muted">
          Selected: {value ?? "none"}
        </Text>
      </Flex>
    );
  },
};
