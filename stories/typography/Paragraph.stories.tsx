import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paragraph } from "@/typography";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  render: () => (
    <>
      {sampleParagraphText.map((text, t) => (
        <Paragraph key={t}>{text}</Paragraph>
      ))}
    </>
  ),
};
