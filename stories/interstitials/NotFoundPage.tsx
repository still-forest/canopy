import { INTERSTITIAL_DECORATOR } from "@stories/support/decorators";
import { sampleSentence } from "@stories/support/sampleText";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home } from "lucide-react";
import { NotFoundPage } from "@/interstitials";

const meta: Meta<typeof NotFoundPage> = {
  title: "Interstitials/NotFoundPage",
  component: NotFoundPage,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithBackFunction: Story = {
  args: {
    onBack: () => {
      window.alert("Going home...");
    },
  },
};

export const WithCustomBack: Story = {
  args: {
    backIcon: Home,
    backLabel: "Phone home",
    onBack: () => {
      window.alert("Going home...");
    },
  },
};

export const WithLongMessage: Story = {
  args: {
    message: sampleSentence,
  },
};
