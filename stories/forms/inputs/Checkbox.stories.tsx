import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/forms";
import { Flex } from "@/layout";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Inputs/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <Flex gap="2" justify="center">
        <Story />
      </Flex>
    ),
  ],
  tags: ["autodocs"],
  args: {
    onCheckedChange: (checked: boolean) => {
      console.log("checked", checked);
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
  },
};

export const Checked: Story = {
  args: {
    name: "checked",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: "disabled-checked",
    disabled: true,
    defaultChecked: true,
  },
};
