import type { ReactNode } from "react";
import { Label } from "@/forms";
import { Flex } from "@/layout";
import { cn } from "@/utils";

interface InputGroupProps {
  label?: string;
  labelFor?: string;
  className?: string;
  labelClassName?: string;
  children: ReactNode;
}

export const LegacyInputGroup = ({
  label,
  labelFor,
  className = "",
  labelClassName = "",
  children,
}: InputGroupProps) => (
  <Flex direction="col" gap="2">
    {label && (
      <Label className={labelClassName} htmlFor={labelFor}>
        {label}
      </Label>
    )}
    <Flex
      className={cn("rounded-md border border-input bg-input/30 dark:bg-input/30 p-2 shadow-xs", className)}
      gapY="1"
    >
      {children}
    </Flex>
  </Flex>
);
