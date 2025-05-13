import type { Meta, StoryObj } from "@storybook/react";

import { ErrorFallback } from "@/interstitials";
import { Box } from "@/layout";

const meta: Meta<typeof ErrorFallback> = {
  title: "Interstitials/ErrorFallback",
  component: ErrorFallback,
  decorators: [
    (Story) => (
      <Box width="full" height="full" className="min-h-[400px]">
        <Story />
      </Box>
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
