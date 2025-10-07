import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bird, Origami } from "lucide-react";
import { Empty } from "@/components";
import { Button } from "@/forms/Button";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <Empty.Media variant="icon">
        <Bird />
      </Empty.Media>
      <Empty.Content>
        <Empty.Title>Basic Empty</Empty.Title>
        <Empty.Description>A simple item with title and description.</Empty.Description>
      </Empty.Content>
    </Empty>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Empty>
      <Empty.Header>
        <Empty.Media variant="default">
          <Origami size={96} />
        </Empty.Media>
        <Empty.Title>User Offline</Empty.Title>
        <Empty.Description>
          This user is currently offline. You can leave a message to notify them or try again later.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">Leave Message</Button>
      </Empty.Content>
    </Empty>
  ),
};
