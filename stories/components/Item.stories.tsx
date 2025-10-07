import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home } from "lucide-react";
import { Item, ItemGroup } from "@/components";
import { Button } from "@/forms/Button";
import { DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD } from "../support/decorators";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  decorators: [DEFAULT_DECORATOR_WITH_MIN_WIDTH_MD],
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Item>
      <Item.Content>
        <Item.Title>Basic Item</Item.Title>
        <Item.Description>A simple item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </Item.Actions>
    </Item>
  ),
};

export const AsOutlineVariant: Story = {
  render: () => (
    <Item variant="outline">
      <Item.Content>
        <Item.Title>Basic Item</Item.Title>
        <Item.Description>A simple item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </Item.Actions>
    </Item>
  ),
};

export const AsMutedVariant: Story = {
  render: () => (
    <Item variant="muted">
      <Item.Content>
        <Item.Title>Basic Item</Item.Title>
        <Item.Description>A simple item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </Item.Actions>
    </Item>
  ),
};

export const Small: Story = {
  render: () => (
    <Item size="sm">
      <Item.Content>
        <Item.Title>Basic Item</Item.Title>
        <Item.Description>A simple item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </Item.Actions>
    </Item>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Item>
      <Item.Media variant="icon">
        <Home />
      </Item.Media>
      <Item.Content>
        <Item.Title>Dashboard</Item.Title>
        <Item.Description>Overview of your account and activity.</Item.Description>
      </Item.Content>
    </Item>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Item>
      <Item.Header>
        <img
          alt="Advanced thinking or reasoning."
          className="aspect-square rounded-sm object-cover size-64 w-full"
          src="https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop"
        />
      </Item.Header>
      <Item.Content>
        <Item.Title>Item Title</Item.Title>
        <Item.Description>Item Description</Item.Description>
      </Item.Content>
    </Item>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Item>
      <Item.Content>
        <Item.Title>Item Title</Item.Title>
        <Item.Description>Item Description</Item.Description>
      </Item.Content>
      <Item.Footer>© 2025 Still Forest LLC. All rights reserved.</Item.Footer>
    </Item>
  ),
};

export const WithLink: Story = {
  render: () => (
    <Item asChild>
      <a href="#" onClick={() => alert("Item clicked")}>
        <Item.Media variant="icon">
          <Home />
        </Item.Media>
        <Item.Content>
          <Item.Title>Dashboard</Item.Title>
          <Item.Description>Overview of your account and activity.</Item.Description>
        </Item.Content>
      </a>
    </Item>
  ),
};

export const WithGroup: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <Item.Content>Item 1</Item.Content>
      </Item>
      <Item>
        <Item.Content>Item 2</Item.Content>
      </Item>
      <Item>
        <Item.Content>Item 3</Item.Content>
      </Item>
    </ItemGroup>
  ),
};
