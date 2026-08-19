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
  onOpenChange: () => {},
  open: false,
  title: "ResponsiveDialog title",
};

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open responsive dialog</Button>
        <ResponsiveDialog {...defaultProps} onOpenChange={setOpen} open={open}>
          <SampleContent />
        </ResponsiveDialog>
      </>
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
        >
          <SampleContent />
        </ResponsiveDialog>
      </>
    );
  },
};
