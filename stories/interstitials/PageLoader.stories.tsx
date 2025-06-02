import type { Meta, StoryObj } from "@storybook/react-vite";
import { PiggyBank } from "lucide-react";
import { motion } from "motion/react";
import { PageLoader } from "@/interstitials";
import { Flex } from "@/layout";
import { INTERSTITIAL_DECORATOR } from "../support/decorators";

const meta: Meta<typeof PageLoader> = {
  title: "Interstitials/PageLoader",
  component: PageLoader,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithMessage: Story = {
  args: {
    message: "Something big is coming",
  },
};

const BouncingPigs = () => {
  return (
    <Flex gap="2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -32, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.8,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          <PiggyBank className="" size="64" />
        </motion.div>
      ))}
    </Flex>
  );
};

export const WithCustomIcon: Story = {
  args: {
    iconComponent: BouncingPigs,
    message: "Something big is coming",
  },
};
