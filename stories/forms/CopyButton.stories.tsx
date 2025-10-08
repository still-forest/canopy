import type { Meta, StoryObj } from "@storybook/react-vite";

import { CopyButton } from "@/forms";
import { sampleParagraphText } from "../support/sampleText";

const meta: Meta<typeof CopyButton> = {
  title: "Forms/Buttons/Copy",
  component: CopyButton,
  tags: ["autodocs"],
} satisfies Meta<typeof CopyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  content: sampleParagraphText.join("\n\n"),
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};
