import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  SelectPickerField,
  type SelectPickerFieldProps,
  type SelectPickerOption,
  type SelectPickerOptionGroup,
} from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof SelectPickerField> = {
  title: "Forms/Fields/SelectPickerField",
  component: SelectPickerField,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectPickerField>;

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

const RenderedSelectPickerField = ({
  options = OPTIONS,
  defaultValue,
  name = "select-picker",
  ...props
}: Partial<SelectPickerFieldProps> & { defaultValue?: string }) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  return <SelectPickerField name={name} onChange={setValue} options={options} value={value} {...props} />;
};

export const Default: Story = {
  render: () => <RenderedSelectPickerField />,
};

export const WithSelection: Story = {
  render: () => <RenderedSelectPickerField defaultValue="wind" />,
};

export const NoIcons: Story = {
  render: () => <RenderedSelectPickerField options={OPTIONS.map((option) => ({ ...option, icon: undefined }))} />,
};

export const WithCustomRenderSelected: Story = {
  render: () => (
    <RenderedSelectPickerField
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
  render: () => (
    <RenderedSelectPickerField
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
  render: () => <RenderedSelectPickerField options={OPTION_GROUPS} />,
};
