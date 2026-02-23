import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@/forms";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Inputs/Textarea",
  component: Textarea,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
    placeholder: "Type something...",
  },
};

export const WithValue: Story = {
  args: {
    name: "with-value",
    defaultValue: "The quick brown fox jumps over the lazy dog.",
  },
};

export const WithRows: Story = {
  args: {
    name: "with-rows",
    placeholder: "This textarea has 6 rows",
    rows: 6,
  },
};

export const Disabled: Story = {
  args: {
    name: "disabled",
    defaultValue: "This textarea is disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    name: "read-only",
    defaultValue: "This content is read-only and cannot be edited.",
    readOnly: true,
  },
};
