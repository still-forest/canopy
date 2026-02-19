import { INTERSTITIAL_DECORATOR } from "@stories/support/decorators";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorPage } from "@/interstitials";

const meta: Meta<typeof ErrorPage> = {
  title: "Interstitials/ErrorPage",
  component: ErrorPage,
  decorators: [INTERSTITIAL_DECORATOR],
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithHeadline: Story = {
  args: {
    headline: "Something went wrong",
  },
};

export const WithMessage: Story = {
  args: {
    headline: "Something went wrong",
    message: "This is a message describing the error.",
  },
};

export const WithLongMessage: Story = {
  args: {
    headline: "Something went wrong",
    message:
      "This is a long message because things are totally fucked up. You should panic immediately or else you will be fired.",
  },
};
