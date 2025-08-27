import { MonitorCog, Moon, Sun } from "lucide-react";
import { Tooltip } from "@/components";
import { Flex } from "@/layout";

export type Theme = "system" | "light" | "dark";

export interface ThemeSelectorProps {
  variant?: "horizontal" | "stacked";
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeSelector = ({ variant = "horizontal", theme, setTheme }: ThemeSelectorProps) => {
  const getClassName = (prospectiveTheme: Theme) => {
    return theme === prospectiveTheme ? "text-primary/75" : "text-primary/25 hover:text-primary";
  };

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
