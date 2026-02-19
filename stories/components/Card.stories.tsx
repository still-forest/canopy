import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@/components";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <Card.Footer>
        <p>Card Footer</p>
      </Card.Footer>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
        <Card.Action>Card Action</Card.Action>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <Card.Footer>
        <p>Card Footer</p>
      </Card.Footer>
    </Card>
  ),
};
