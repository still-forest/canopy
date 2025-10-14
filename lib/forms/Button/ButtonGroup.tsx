import type React from "react";
import { Flex } from "@/layout";
import { cn } from "@/utils";
import { Button, type ButtonProps } from "./Button";

export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className = "" }: ButtonGroupProps) => (
  <Flex className={className}>{children}</Flex>
);

ButtonGroup.Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn("border-1 not-first:-ml-[0.5px] not-first:rounded-l-none not-last:rounded-r-none ", className)}
      {...props}
    >
      {children}
    </Button>
  );
};
