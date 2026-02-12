import { Computer, MonitorCog, Moon, Sun } from "lucide-react";
import { Tooltip } from "@/components";
import { Button } from "@/forms";
import { Flex } from "@/layout";
import type { Theme } from "@/types";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface ThemeSelectorProps {
  variant?: "horizontal" | "stacked";
  theme: Theme;
  setTheme: (theme: Theme) => void;
  className?: string;
  containerClassName?: string;
  buttonClassName?: string;
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

const StackedThemeSelector = ({
  theme,
  setTheme,
  className,
  containerClassName,
  buttonClassName,
  ...props
}: ThemeSelectorProps) => {
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(nextTheme);
  };
  const icon = StackedThemes.find((t) => t.theme === theme)?.icon;
  const label = StackedThemes.find((t) => t.theme === theme)?.label;

  return (
    <span className={cn(containerClassName)} {...props}>
      <Button className={cn("p-1 w-full", buttonClassName)} onClick={toggleTheme} variant="unstyled">
        {icon}
        <Text className={className} size="md" truncate>
          {label}
        </Text>
      </Button>
    </span>
  );
};

export const ThemeSelector = ({
  variant = "horizontal",
  theme,
  setTheme,
  className,
  containerClassName,
  buttonClassName,
  ...props
}: ThemeSelectorProps) => {
  const getClassName = (prospectiveTheme: Theme) => {
    return theme === prospectiveTheme ? "text-primary/75" : "text-primary/25 hover:text-primary";
  };

  if (variant === "stacked") {
    return (
      <StackedThemeSelector
        buttonClassName={buttonClassName}
        className={className}
        containerClassName={containerClassName}
        setTheme={setTheme}
        theme={theme}
        {...props}
      />
    );
  }

  return (
    <Flex className={containerClassName} gap="4">
      <Tooltip>
        <Tooltip.Trigger>
          <MonitorCog
            className={cn(getClassName("system"), buttonClassName)}
            onClick={() => setTheme("system")}
            size={32}
          />
        </Tooltip.Trigger>
        <Tooltip.Content>Use system theme</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Sun className={cn(getClassName("light"), buttonClassName)} onClick={() => setTheme("light")} size={32} />
        </Tooltip.Trigger>
        <Tooltip.Content>Use light theme</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Moon className={cn(getClassName("dark"), buttonClassName)} onClick={() => setTheme("dark")} size={32} />
        </Tooltip.Trigger>
        <Tooltip.Content>Use dark theme</Tooltip.Content>
      </Tooltip>
    </Flex>
  );
};
