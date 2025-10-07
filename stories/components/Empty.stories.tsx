import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bird, Origami } from "lucide-react";
import { Empty } from "@/components";
import { Button } from "@/forms/Button";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";
import { sampleText2 } from "../support/sampleText";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

const description = sampleText2;

export const Default: Story = {
  render: () => (
    <Empty>
      <Empty.Media variant="icon">
        <Bird />
      </Empty.Media>
      <Empty.Content>
        <Empty.Title>Basic Bird</Empty.Title>
        <Empty.Description>{description}</Empty.Description>
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
        <Empty.Title>Origami Bird</Empty.Title>
        <Empty.Description>{description}</Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">Create Origami</Button>
      </Empty.Content>
    </Empty>
  ),
};
