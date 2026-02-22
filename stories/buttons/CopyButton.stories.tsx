import type { Meta, StoryObj } from "@storybook/react-vite";

import { CopyButton } from "@/buttons";
import { sampleParagraphText } from "../support/sampleText";

const meta: Meta<typeof CopyButton> = {
  title: "Buttons/CopyButton",
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

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-5 gap-4">
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">xs</p>
        <CopyButton {...defaultProps} size="xs" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">sm</p>
        <CopyButton {...defaultProps} size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">md</p>
        <CopyButton {...defaultProps} size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">lg</p>
        <CopyButton {...defaultProps} size="lg" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="footnote">xl</p>
        <CopyButton {...defaultProps} size="xl" />
      </div>
    </div>
  ),
};

export const WithVariant: Story = {
  args: {
    ...defaultProps,
    variant: "info",
  },
};
