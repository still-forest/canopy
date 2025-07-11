import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectPicker, type SelectPickerOption } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

const meta: Meta<typeof SelectPicker> = {
  title: "Forms/Inputs/SelectPicker",
  component: SelectPicker,
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
          <Flex align="center" gap="2" justify="start">
            {icon}
            {value && <Text variant="info">{label}</Text>}
            {!value && <Text variant="muted">Select</Text>}
          </Flex>
        </>
      );
    },
  },
};
