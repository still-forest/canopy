import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "@/forms";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Switch> = {
  title: "Forms/Inputs/Switch",
  component: Switch,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  label: "90s mode",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const WithLeftLabel: Story = {
  args: {
    ...defaultProps,
    leftLabel: "Off",
    rightLabel: "On",
  },
};
