import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button, SelectInput } from "@/forms";
import { Flex } from "@/layout";
import { DEFAULT_DECORATOR_WITH_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof SelectInput> = {
  title: "Forms/Inputs/SelectInput",
  component: SelectInput,
  decorators: [DEFAULT_DECORATOR_WITH_WIDTH_MD],
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

export const WithError: Story = {
  args: {
    ...defaultProps,
    error: "What'd you do?!",
  },
};

export const WithSize: Story = {
  render: () => (
    <Flex direction="col" gap="4">
      <SelectInput {...defaultProps} placeholder="This input is extra small" size="xs" />
      <SelectInput {...defaultProps} placeholder="This input is small" size="sm" />
      <SelectInput {...defaultProps} placeholder="This input is medium (default size)" size="md" />
      <SelectInput {...defaultProps} placeholder="This input is large" size="lg" />
      <SelectInput {...defaultProps} placeholder="This input is extra large" size="xl" />
    </Flex>
  ),
};

export const WithEmptyOptionLabel: Story = {
  args: {
    ...defaultProps,
    emptyOptionLabel: "Select a thing...",
  },
};

export const WithIcons: Story = {
  args: {
    ...defaultProps,
    options: [
      { value: "homer", label: "Homer", icon: "👨" },
      { value: "marge", label: "Marge", icon: "👩" },
      { value: "bart", label: "Bart", icon: "👦" },
      { value: "lisa", label: "Lisa", icon: "👧" },
      { value: "maggie", label: "Maggie", icon: "👶" },
    ],
  },
};

export const WithMultipleGroups: Story = {
  args: {
    ...defaultProps,
    options: [
      {
        label: "Elements",
        options: [
          {
            icon: "🌎",
            value: "earth",
            label: "Earth",
          },
          {
            icon: "🌪️",
            value: "wind",
            label: "Wind",
          },
          {
            icon: "🔥",
            value: "fire",
            label: "Fire",
          },
          {
            icon: "🌊",
            value: "water",
            label: "Water",
          },
        ],
      },
      {
        label: "Colors",
        options: [
          {
            icon: "🔴",
            value: "red",
            label: "Red",
          },
          {
            icon: "🟡",
            value: "yellow",
            label: "Yellow",
          },
          {
            icon: "🟢",
            value: "green",
            label: "Green",
          },
          {
            icon: "🔵",
            value: "blue",
            label: "Blue",
          },
        ],
      },
      {
        label: "Animals",
        options: [
          {
            icon: "🐶",
            value: "dog",
            label: "Dog",
          },
          {
            icon: "🐱",
            value: "cat",
            label: "Cat",
          },
          {
            icon: "🐭",
            value: "mouse",
            label: "Mouse",
          },
        ],
      },
      {
        label: "Fruits",
        options: [
          {
            icon: "🍎",
            value: "apple",
            label: "Apple",
          },
          {
            icon: "🍓",
            value: "strawberry",
            label: "Strawberry",
          },
          {
            icon: "🍊",
            value: "orange",
            label: "Orange",
          },
          {
            icon: "🍇",
            value: "grape",
            label: "Grape",
          },
        ],
      },
    ],
  },
};

const ControlledInput = () => {
  const [value, setValue] = useState("marge");
  return (
    <Flex align="center" direction="col" gap="4">
      <Flex.Item>
        <SelectInput {...defaultProps} onValueChange={setValue} value={value} />
      </Flex.Item>
      <Flex direction="row" gap="4">
        <Button onClick={() => setValue("bart")}>Set to Bart</Button>
        <Button onClick={() => setValue("marge")} variant="secondary">
          Reset
        </Button>
      </Flex>
    </Flex>
  );
};

export const Controlled: Story = {
  render: () => <ControlledInput />,
};
