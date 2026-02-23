import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import "./Container.css";

export interface ContainerProps {
  as?: "div" | "header" | "main" | "footer" | "section";
  align?: "center" | "start" | "end";
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
  width?: "sm" | "md" | "lg" | "xl" | "full";
  direction?: "col" | "row";
  gap?: "2" | "4" | "8" | "12" | "16" | "20" | "24" | "28" | "32" | "36" | "40";
  centered?: boolean;
  className?: string;
  children: ReactNode;
}

export const Container = ({
  as,
  children,
  align,
  justify,
  width = "full",
  direction = "col",
  gap,
  centered,
  className,
  ...props
}: ContainerProps) => {
  const Comp = as || "div";
  const classNames = cn("layout-container", className, {
    "layout-container--sm": width === "sm",
    "layout-container--md": width === "md",
    "layout-container--lg": width === "lg",
    "layout-container--xl": width === "xl",
    "layout-container--centered": centered,
    "items-start": align === "start",
    "items-center": align === "center",
    "items-end": align === "end",
    "justify-start": justify === "start",
    "justify-center": justify === "center",
    "justify-end": justify === "end",
    "justify-between": justify === "between",
    "justify-around": justify === "around",
    "justify-evenly": justify === "evenly",
    "flex-row": direction === "row",
    "gap-2": gap === "2",
    "gap-4": gap === "4",
    "gap-8": gap === "8",
    "gap-12": gap === "12",
    "gap-16": gap === "16",
    "gap-20": gap === "20",
    "gap-24": gap === "24",
    "gap-28": gap === "28",
    "gap-32": gap === "32",
    "gap-36": gap === "36",
    "gap-40": gap === "40",
  });

  return (
    <Comp className={classNames} data-slot="container" {...props}>
      {children}
    </Comp>
  );
};
