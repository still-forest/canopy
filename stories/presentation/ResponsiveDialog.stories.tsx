import { sampleParagraphText } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/buttons";
import { ResponsiveDialog, type ResponsiveDialogProps } from "@/presentation";
import { Text } from "@/typography";

const meta: Meta<typeof ResponsiveDialog> = {
  title: "Presentation/ResponsiveDialog",
  component: ResponsiveDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof ResponsiveDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const SampleContent = () => <Text>{sampleParagraphText[0]}</Text>;

const defaultProps: Omit<ResponsiveDialogProps, "children"> = {
  description: "ResponsiveDialog description",
  title: "ResponsiveDialog title",
  trigger: <Button>Open responsive dialog</Button>,
};

export const Default: Story = {
  render: () => {
    return (
      <ResponsiveDialog {...defaultProps}>
        <SampleContent />
      </ResponsiveDialog>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open responsive dialog</Button>
        <ResponsiveDialog
          {...defaultProps}
          footer={<Button onClick={() => setOpen(false)}>Close</Button>}
          onOpenChange={setOpen}
          open={open}
          trigger={undefined}
        >
          <SampleContent />
        </ResponsiveDialog>
      </>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open responsive dialog</Button>
        <ResponsiveDialog {...defaultProps} onOpenChange={setOpen} open={open} trigger={undefined}>
          <SampleContent />
        </ResponsiveDialog>
      </>
    );
  },
};

export const Wide: Story = {
  render: () => (
    <ResponsiveDialog {...defaultProps} size="wide">
      <SampleContent />
    </ResponsiveDialog>
  ),
};
