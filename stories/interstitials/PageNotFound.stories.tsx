import type { Meta, StoryObj } from "@storybook/react-vite";
import { Home } from "lucide-react";
import { PageNotFound } from "@/interstitials";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";
import { sampleSentence } from "../support/sampleText";

const meta: Meta<typeof PageNotFound> = {
  title: "Interstitials/PageNotFound",
  component: PageNotFound,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof PageNotFound>;

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
