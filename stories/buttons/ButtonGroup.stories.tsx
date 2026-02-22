import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, ButtonGroup } from "@/buttons";

const meta: Meta<typeof ButtonGroup> = {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};

export const AsOutline: Story = {
  render: () => (
    <ButtonGroup>
      <Button outline>Button 1</Button>
      <Button outline>Button 2</Button>
      <Button outline>Button 3</Button>
    </ButtonGroup>
  ),
};

export const MixedStyles: Story = {
  render: () => (
    <ButtonGroup>
      <Button outline>Button 1</Button>
      <Button outline>Button 2</Button>
      <Button variant="primary">Button 3</Button>
      <Button outline>Button 4</Button>
    </ButtonGroup>
  ),
};
