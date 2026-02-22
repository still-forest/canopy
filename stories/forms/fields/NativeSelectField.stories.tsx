import { DEFAULT_DECORATOR_WITH_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { NativeSelectField } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof NativeSelectField> = {
  title: "Forms/Fields/NativeSelectField",
  component: NativeSelectField,
  decorators: [DEFAULT_DECORATOR_WITH_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof NativeSelectField>;

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
  onChange: (value: string) => window.alert(`Selected option ${value}`),
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
      <NativeSelectField {...defaultProps} placeholder="This input is extra small" size="xs" />
      <NativeSelectField {...defaultProps} placeholder="This input is small" size="sm" />
      <NativeSelectField {...defaultProps} placeholder="This input is medium (default)" size="md" />
      <NativeSelectField {...defaultProps} placeholder="This input is large" size="lg" />
      <NativeSelectField {...defaultProps} placeholder="This input is extra large" size="xl" />
    </Flex>
  ),
};

export const WithMultipleGroups: Story = {
  args: {
    ...defaultProps,
    options: [
      {
        label: "Elements",
        options: [
          {
            value: "earth",
            label: "Earth",
          },
          {
            value: "wind",
            label: "Wind",
          },
          {
            value: "fire",
            label: "Fire",
          },
          {
            value: "water",
            label: "Water",
          },
        ],
      },
      {
        label: "Colors",
        options: [
          {
            value: "red",
            label: "Red",
          },
          {
            value: "yellow",
            label: "Yellow",
          },
          {
            value: "green",
            label: "Green",
          },
          {
            value: "blue",
            label: "Blue",
          },
        ],
      },
      {
        label: "Animals",
        options: [
          {
            value: "dog",
            label: "Dog",
          },
          {
            value: "cat",
            label: "Cat",
          },
          {
            value: "mouse",
            label: "Mouse",
          },
        ],
      },
      {
        label: "Fruits",
        options: [
          {
            value: "apple",
            label: "Apple",
          },
          {
            value: "strawberry",
            label: "Strawberry",
          },
          {
            value: "orange",
            label: "Orange",
          },
          {
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
        <NativeSelectField {...defaultProps} onChange={setValue} value={value} />
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
