import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorFallback } from "@/interstitials";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof ErrorFallback> = {
  title: "Interstitials/ErrorFallback",
  component: ErrorFallback,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: Error(
      "Critical Synergy Failure: Our core competencies failed to leverage key deliverables. Please pivot and circle back later."
    ),
  },
};
