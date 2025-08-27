import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ThemeSelector, type ThemeSelectorProps } from "@/components";
import { Box } from "@/layout";
import type { Theme } from "@/types";

const meta: Meta<typeof ThemeSelector> = {
  title: "Components/ThemeSelector",
  component: ThemeSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

const DecoratedThemeSelector = (props: Partial<ThemeSelectorProps>) => {
  const [theme, setTheme] = useState<Theme>("system");

  return (
    <Box className="w-48">
      <ThemeSelector {...props} setTheme={setTheme} theme={theme} />
    </Box>
  );
};

export const Default: Story = {
  render: () => <DecoratedThemeSelector />,
};

export const Horizontal: Story = {
  render: () => <DecoratedThemeSelector variant="horizontal" />,
};

export const Stacked: Story = {
  render: () => <DecoratedThemeSelector variant="stacked" />,
};

export const StackedWithButtonStyle: Story = {
  render: () => (
    <DecoratedThemeSelector buttonClassName="bg-purple-100 hover:bg-purple-200 px-6 w-45" variant="stacked" />
  ),
};
