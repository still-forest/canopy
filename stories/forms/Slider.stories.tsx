import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "@/forms";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Slider> = {
  title: "Forms/Inputs/Slider",
  component: Slider,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
};

export const Default: Story = {
  args: defaultProps,
};
