import type React from "react";
import { forwardRef } from "react";
import { Flex } from "@/layout";
import { cn } from "@/utils";
import { Button, type ButtonProps } from "./Button";

export interface ButtonGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className = "", ...props }: ButtonGroupProps) => (
  <Flex className={className} {...props}>
    {children}
  </Flex>
);

ButtonGroup.Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }, ref) => {
  return (
    <Button
      className={cn("border-1 not-first:-ml-[0.5px] not-first:rounded-l-none not-last:rounded-r-none ", className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  );
});
ButtonGroup.Button.displayName = "ButtonGroupButton";
