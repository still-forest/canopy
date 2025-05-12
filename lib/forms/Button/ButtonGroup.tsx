import type React from "react";
import { Flex } from "@/primitives/main";
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
    <Button className={cn("not-first:-ml-1 not-last:rounded-r-none not-first:rounded-l-none", className)} {...props}>
      {children}
    </Button>
  );
};
