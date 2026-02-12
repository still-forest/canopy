import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SelectPicker, type SelectPickerOption, type SelectPickerOptionGroup, type SelectPickerProps } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof SelectPicker> = {
  title: "Forms/Inputs/SelectPicker",
  component: SelectPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const OPTIONS: SelectPickerOption[] = [
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
];

const OPTION_GROUPS: SelectPickerOptionGroup[] = [
  {
    label: "Elements",
    options: OPTIONS,
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
];

const RenderedSelectPicker = ({
  options = OPTIONS,
  defaultValue,
  ...props
}: Omit<SelectPickerProps, "value" | "onChange"> & { defaultValue?: string }) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  return <SelectPicker onChange={setValue} options={options} value={value} {...props} />;
};

export const Default: Story = {
  render: (args) => <RenderedSelectPicker {...args} />,
};

export const WithSelection: Story = {
  render: (args) => <RenderedSelectPicker {...args} defaultValue="wind" />,
};

export const NoIcons: Story = {
  render: (args) => (
    <RenderedSelectPicker {...args} options={OPTIONS.map((option) => ({ ...option, icon: undefined }))} />
  ),
};

export const WithCustomRenderSelected: Story = {
  render: (args) => (
    <RenderedSelectPicker
      {...args}
      renderSelected={({ value, label, icon }: SelectPickerOption) => {
        return (
          <>
            <Text>Thing:</Text>
            <div>
              {icon ? <span className="mx-1 my-auto">{icon}</span> : null}
              {value && <Text variant="info">{label}</Text>}
              {!value && <Text variant="muted">Select</Text>}
            </div>
          </>
        );
      }}
    />
  ),
};

export const WithCustomRenderSelectedAndInitialValue: Story = {
  render: (args) => (
    <RenderedSelectPicker
      {...args}
      defaultValue={OPTIONS[1].value}
      renderSelected={({ value, label, icon }: SelectPickerOption) => {
        return (
          <>
            <Text>Thing:</Text>
            <Flex align="center" gap="2" justify="start">
              {icon}
              {value && <Text variant="info">{label}</Text>}
              {!value && <Text variant="muted">Select</Text>}
            </Flex>
          </>
        );
      }}
    />
  ),
};

export const WithMultipleGroups: Story = {
  render: (args) => <RenderedSelectPicker {...args} options={OPTION_GROUPS} />,
};
