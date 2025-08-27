import type { Meta, StoryObj } from "@storybook/react-vite";
import { type Theme, ThemeSelector, type ThemeSelectorProps } from "@/components";

const meta: Meta<typeof ThemeSelector> = {
  title: "Components/ThemeSelector",
  component: ThemeSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: ThemeSelectorProps = {
  theme: "system",
  setTheme: (prospectTheme: Theme) => {
    window.alert(`Setting theme to ${prospectTheme}`);
  },
};

export const Default: Story = {
  render: () => <ThemeSelector {...defaultArgs} />,
};

export const Horizontal: Story = {
  render: () => <ThemeSelector {...defaultArgs} variant="horizontal" />,
};

export const Stacked: Story = {
  render: () => <ThemeSelector {...defaultArgs} variant="stacked" />,
};
