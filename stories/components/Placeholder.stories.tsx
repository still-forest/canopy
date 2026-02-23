import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bird, Inbox, Search } from "lucide-react";
import { Button } from "@/buttons/Button";
import { Placeholder } from "@/components/Placeholder";

const meta: Meta<typeof Placeholder> = {
  title: "Components/Placeholder",
  component: Placeholder,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Placeholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Inbox />,
    title: "No items yet",
    description: "Get started by creating your first item.",
  },
};

export const WithChildren: Story = {
  render: () => (
    <Placeholder description="Get started by creating your first item." icon={<Inbox />} title="No items yet">
      <Button size="sm">Create Item</Button>
    </Placeholder>
  ),
};

export const TitleOnly: Story = {
  args: {
    icon: <Search />,
    title: "No results found",
  },
};

export const Compact: Story = {
  args: {
    compact: true,
    icon: <Bird />,
    title: "No birds found",
    description: "Try adjusting your search filters.",
  },
};

export const CompactWithChildren: Story = {
  render: () => (
    <Placeholder compact description="Get started by creating your first item." icon={<Inbox />} title="No items yet">
      <Button size="sm">Create Item</Button>
    </Placeholder>
  ),
};

export const CompactWithLongContent: Story = {
  args: {
    compact: true,
    icon: <Bird />,
    description:
      "This is a longer message that provides more detailed information. It demonstrates how the placeholder component handles multiple lines of text.",
  },
};
