import type { Meta, StoryObj } from "@storybook/react";

import { ErrorFallback } from "@/interstitials";

const meta: Meta<typeof ErrorFallback> = {
  title: "Interstitials/ErrorFallback",
  component: ErrorFallback,
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: Error(
      "Critical Synergy Failure: Our core competencies failed to leverage key deliverables. Please pivot and circle back later.",
    ),
  },
};
