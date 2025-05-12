import type { Meta, StoryObj } from "@storybook/react";
import { SelectPicker, type SelectPickerOption } from "@/main";
import { Flex, Text } from "@/primitives/main";

const meta: Meta<typeof SelectPicker> = {
  title: "Forms/SelectPicker",
  component: SelectPicker,
  decorators: [
    (Story) => (
      <Flex justify="center">
        <div className="w-[400px]">
          <Story />
        </div>
      </Flex>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
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
const defaultProps = {
  options,
};

export const Default: Story = {
  args: defaultProps,
};

export const WithSelection: Story = {
  args: { ...defaultProps, value: options[1].value },
};

export const NoIcons: Story = {
  args: {
    ...defaultProps,
    options: defaultProps.options.map((option) => ({
      ...option,
      icon: undefined,
    })),
  },
};

export const WithCustomRenderSelected: Story = {
  args: {
    ...defaultProps,
    renderSelected: ({ value, label, icon }: SelectPickerOption) => {
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
    },
  },
};

export const WithCustomRenderSelectedAndInitialValue: Story = {
  args: {
    ...defaultProps,
    value: options[1].value,
    renderSelected: ({ value, label, icon }: SelectPickerOption) => {
      return (
        <>
          <Text>Thing:</Text>
          <Flex align="center" justify="start" gap="2">
            {icon}
            {value && <Text variant="info">{label}</Text>}
            {!value && <Text variant="muted">Select</Text>}
          </Flex>
        </>
      );
    },
  },
};
