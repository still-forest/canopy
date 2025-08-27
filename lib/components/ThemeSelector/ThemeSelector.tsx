import { Computer, MonitorCog, Moon, Sun } from "lucide-react";
import { Tooltip } from "@/components";
import { Button } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

export type Theme = "system" | "light" | "dark";

export interface ThemeSelectorProps {
  variant?: "horizontal" | "stacked";
  theme: Theme;
  setTheme: (theme: Theme) => void;
  className?: string;
}

const StackedThemes = [
  {
    theme: "light",
    icon: <Sun />,
    label: "Light mode",
  },
  {
    theme: "dark",
    icon: <Moon />,
    label: "Dark mode",
  },
  {
    theme: "system",
    icon: <Computer />,
    label: "System theme",
  },
];

const StackedThemeSelector = ({ theme, setTheme, className }: ThemeSelectorProps) => {
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(nextTheme);
  };
  const icon = StackedThemes.find((t) => t.theme === theme)?.icon;
  const label = StackedThemes.find((t) => t.theme === theme)?.label;
  console.log(className);

  return (
    <Button className={className} onClick={toggleTheme} variant="unstyled">
      {icon}
      <Text size="base" truncate>
        {label}
      </Text>
    </Button>
  );
};

export const ThemeSelector = ({ variant = "horizontal", theme, setTheme, className }: ThemeSelectorProps) => {
  const getClassName = (prospectiveTheme: Theme) => {
    return theme === prospectiveTheme ? "text-primary/75" : "text-primary/25 hover:text-primary";
  };

  if (variant === "stacked") {
    return <StackedThemeSelector className={className} setTheme={setTheme} theme={theme} />;
  }

  return (
    <Flex gap="4">
      <Tooltip>
        <Tooltip.Trigger>
          <MonitorCog className={getClassName("system")} onClick={() => setTheme("system")} size={32} />
        </Tooltip.Trigger>
        <Tooltip.Content>Use system theme</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Sun className={getClassName("light")} onClick={() => setTheme("light")} size={32} />
        </Tooltip.Trigger>
        <Tooltip.Content>Use light theme</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Moon className={getClassName("dark")} onClick={() => setTheme("dark")} size={32} />
        </Tooltip.Trigger>
        <Tooltip.Content>Use dark theme</Tooltip.Content>
      </Tooltip>
    </Flex>
  );
};
