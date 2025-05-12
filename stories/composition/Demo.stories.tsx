import { Demo as DemoDashboard } from "@src/Demo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Composition/Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: () => <DemoDashboard />,
};
