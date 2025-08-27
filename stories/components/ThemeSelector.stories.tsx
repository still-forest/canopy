import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { type Theme, ThemeSelector, type ThemeSelectorProps } from "@/components";
import { Box } from "@/layout";

const meta: Meta<typeof ThemeSelector> = {
  title: "Components/ThemeSelector",
  component: ThemeSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

let theme: Theme = "system";

const defaultArgs: ThemeSelectorProps = {
  theme,
  setTheme: (prospectiveTheme: Theme) => {
    theme = prospectiveTheme;
  },
};

const DecoratedThemeSelector = (props: ThemeSelectorProps) => {
  const [theme, setTheme] = useState<Theme>(props.theme);

  return (
    <Box className="w-48">
      <ThemeSelector {...props} setTheme={setTheme} theme={theme} />
    </Box>
  );
};

export const Default: Story = {
  render: () => <DecoratedThemeSelector {...defaultArgs} />,
};

export const Horizontal: Story = {
  render: () => <DecoratedThemeSelector {...defaultArgs} variant="horizontal" />,
};

export const Stacked: Story = {
  render: () => <DecoratedThemeSelector {...defaultArgs} variant="stacked" />,
};

export const StackedWithButtonStyle: Story = {
  render: () => (
    <DecoratedThemeSelector
      {...defaultArgs}
      buttonClassName="bg-purple-100 hover:bg-purple-200 px-6 w-45"
      variant="stacked"
    />
  ),
};
