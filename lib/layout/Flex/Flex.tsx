import React from "react";

import type {
  Breakpoint,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  FlexWrap,
  Gap,
  ResponsiveFlexAlign,
  ResponsiveFlexDirection,
  ResponsiveFlexGrow,
  ResponsiveFlexJustify,
  ResponsiveFlexWrap,
  ResponsiveGap,
} from "@/types";
import { cn } from "@/utils";
import { FlexItem } from "./FlexItem";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: ResponsiveFlexDirection;
  align?: ResponsiveFlexAlign;
  justify?: ResponsiveFlexJustify;
  grow?: ResponsiveFlexGrow;
  wrap?: ResponsiveFlexWrap;
  gap?: ResponsiveGap;
  gapX?: ResponsiveGap;
  gapY?: ResponsiveGap;
}

// Explicit class mappings for Tailwind CSS compiler
const directionClassMap: Record<FlexDirection, Record<Breakpoint, string>> = {
  row: {
    base: "flex-row",
    sm: "sm:flex-row",
    md: "md:flex-row",
    lg: "lg:flex-row",
    xl: "xl:flex-row",
    "2xl": "2xl:flex-row",
  },
  col: {
    base: "flex-col",
    sm: "sm:flex-col",
    md: "md:flex-col",
    lg: "lg:flex-col",
    xl: "xl:flex-col",
    "2xl": "2xl:flex-col",
  },
  "row-reverse": {
    base: "flex-row-reverse",
    sm: "sm:flex-row-reverse",
    md: "md:flex-row-reverse",
    lg: "lg:flex-row-reverse",
    xl: "xl:flex-row-reverse",
    "2xl": "2xl:flex-row-reverse",
  },
  "col-reverse": {
    base: "flex-col-reverse",
    sm: "sm:flex-col-reverse",
    md: "md:flex-col-reverse",
    lg: "lg:flex-col-reverse",
    xl: "xl:flex-col-reverse",
    "2xl": "2xl:flex-col-reverse",
  },
};

const alignClassMap: Record<FlexAlign, Record<Breakpoint, string>> = {
  start: {
    base: "items-start",
    sm: "sm:items-start",
    md: "md:items-start",
    lg: "lg:items-start",
    xl: "xl:items-start",
    "2xl": "2xl:items-start",
  },
  center: {
    base: "items-center",
    sm: "sm:items-center",
    md: "md:items-center",
    lg: "lg:items-center",
    xl: "xl:items-center",
    "2xl": "2xl:items-center",
  },
  end: {
    base: "items-end",
    sm: "sm:items-end",
    md: "md:items-end",
    lg: "lg:items-end",
    xl: "xl:items-end",
    "2xl": "2xl:items-end",
  },
  stretch: {
    base: "items-stretch",
    sm: "sm:items-stretch",
    md: "md:items-stretch",
    lg: "lg:items-stretch",
    xl: "xl:items-stretch",
    "2xl": "2xl:items-stretch",
  },
  baseline: {
    base: "items-baseline",
    sm: "sm:items-baseline",
    md: "md:items-baseline",
    lg: "lg:items-baseline",
    xl: "xl:items-baseline",
    "2xl": "2xl:items-baseline",
  },
};

const justifyClassMap: Record<FlexJustify, Record<Breakpoint, string>> = {
  start: {
    base: "justify-start",
    sm: "sm:justify-start",
    md: "md:justify-start",
    lg: "lg:justify-start",
    xl: "xl:justify-start",
    "2xl": "2xl:justify-start",
  },
  center: {
    base: "justify-center",
    sm: "sm:justify-center",
    md: "md:justify-center",
    lg: "lg:justify-center",
    xl: "xl:justify-center",
    "2xl": "2xl:justify-center",
  },
  end: {
    base: "justify-end",
    sm: "sm:justify-end",
    md: "md:justify-end",
    lg: "lg:justify-end",
    xl: "xl:justify-end",
    "2xl": "2xl:justify-end",
  },
  between: {
    base: "justify-between",
    sm: "sm:justify-between",
    md: "md:justify-between",
    lg: "lg:justify-between",
    xl: "xl:justify-between",
    "2xl": "2xl:justify-between",
  },
  around: {
    base: "justify-around",
    sm: "sm:justify-around",
    md: "md:justify-around",
    lg: "lg:justify-around",
    xl: "xl:justify-around",
    "2xl": "2xl:justify-around",
  },
  evenly: {
    base: "justify-evenly",
    sm: "sm:justify-evenly",
    md: "md:justify-evenly",
    lg: "lg:justify-evenly",
    xl: "xl:justify-evenly",
    "2xl": "2xl:justify-evenly",
  },
  stretch: {
    base: "justify-stretch",
    sm: "sm:justify-stretch",
    md: "md:justify-stretch",
    lg: "lg:justify-stretch",
    xl: "xl:justify-stretch",
    "2xl": "2xl:justify-stretch",
  },
  baseline: {
    base: "justify-baseline",
    sm: "sm:justify-baseline",
    md: "md:justify-baseline",
    lg: "lg:justify-baseline",
    xl: "xl:justify-baseline",
    "2xl": "2xl:justify-baseline",
  },
  normal: {
    base: "justify-normal",
    sm: "sm:justify-normal",
    md: "md:justify-normal",
    lg: "lg:justify-normal",
    xl: "xl:justify-normal",
    "2xl": "2xl:justify-normal",
  },
};

const growClassMap: Record<string, Record<Breakpoint, string>> = {
  true: {
    base: "grow-1",
    sm: "sm:grow-1",
    md: "md:grow-1",
    lg: "lg:grow-1",
    xl: "xl:grow-1",
    "2xl": "2xl:grow-1",
  },
  false: {
    base: "grow-0",
    sm: "sm:grow-0",
    md: "md:grow-0",
    lg: "lg:grow-0",
    xl: "xl:grow-0",
    "2xl": "2xl:grow-0",
  },
  "0": {
    base: "grow-0",
    sm: "sm:grow-0",
    md: "md:grow-0",
    lg: "lg:grow-0",
    xl: "xl:grow-0",
    "2xl": "2xl:grow-0",
  },
  "1": {
    base: "grow-1",
    sm: "sm:grow-1",
    md: "md:grow-1",
    lg: "lg:grow-1",
    xl: "xl:grow-1",
    "2xl": "2xl:grow-1",
  },
  "2": {
    base: "grow-2",
    sm: "sm:grow-2",
    md: "md:grow-2",
    lg: "lg:grow-2",
    xl: "xl:grow-2",
    "2xl": "2xl:grow-2",
  },
  "3": {
    base: "grow-3",
    sm: "sm:grow-3",
    md: "md:grow-3",
    lg: "lg:grow-3",
    xl: "xl:grow-3",
    "2xl": "2xl:grow-3",
  },
  "4": {
    base: "grow-4",
    sm: "sm:grow-4",
    md: "md:grow-4",
    lg: "lg:grow-4",
    xl: "xl:grow-4",
    "2xl": "2xl:grow-4",
  },
  "5": {
    base: "grow-5",
    sm: "sm:grow-5",
    md: "md:grow-5",
    lg: "lg:grow-5",
    xl: "xl:grow-5",
    "2xl": "2xl:grow-5",
  },
  "6": {
    base: "grow-6",
    sm: "sm:grow-6",
    md: "md:grow-6",
    lg: "lg:grow-6",
    xl: "xl:grow-6",
    "2xl": "2xl:grow-6",
  },
  "7": {
    base: "grow-7",
    sm: "sm:grow-7",
    md: "md:grow-7",
    lg: "lg:grow-7",
    xl: "xl:grow-7",
    "2xl": "2xl:grow-7",
  },
  "8": {
    base: "grow-8",
    sm: "sm:grow-8",
    md: "md:grow-8",
    lg: "lg:grow-8",
    xl: "xl:grow-8",
    "2xl": "2xl:grow-8",
  },
  "9": {
    base: "grow-9",
    sm: "sm:grow-9",
    md: "md:grow-9",
    lg: "lg:grow-9",
    xl: "xl:grow-9",
    "2xl": "2xl:grow-9",
  },
  "10": {
    base: "grow-10",
    sm: "sm:grow-10",
    md: "md:grow-10",
    lg: "lg:grow-10",
    xl: "xl:grow-10",
    "2xl": "2xl:grow-10",
  },
  "11": {
    base: "grow-11",
    sm: "sm:grow-11",
    md: "md:grow-11",
    lg: "lg:grow-11",
    xl: "xl:grow-11",
    "2xl": "2xl:grow-11",
  },
  "12": {
    base: "grow-12",
    sm: "sm:grow-12",
    md: "md:grow-12",
    lg: "lg:grow-12",
    xl: "xl:grow-12",
    "2xl": "2xl:grow-12",
  },
};

const wrapClassMap: Record<FlexWrap, Record<Breakpoint, string>> = {
  nowrap: {
    base: "flex-nowrap",
    sm: "sm:flex-nowrap",
    md: "md:flex-nowrap",
    lg: "lg:flex-nowrap",
    xl: "xl:flex-nowrap",
    "2xl": "2xl:flex-nowrap",
  },
  wrap: {
    base: "flex-wrap",
    sm: "sm:flex-wrap",
    md: "md:flex-wrap",
    lg: "lg:flex-wrap",
    xl: "xl:flex-wrap",
    "2xl": "2xl:flex-wrap",
  },
  "wrap-reverse": {
    base: "flex-wrap-reverse",
    sm: "sm:flex-wrap-reverse",
    md: "md:flex-wrap-reverse",
    lg: "lg:flex-wrap-reverse",
    xl: "xl:flex-wrap-reverse",
    "2xl": "2xl:flex-wrap-reverse",
  },
};

const gapClassMap: Record<Gap, Record<Breakpoint, string>> = {
  "0": {
    base: "gap-0",
    sm: "sm:gap-0",
    md: "md:gap-0",
    lg: "lg:gap-0",
    xl: "xl:gap-0",
    "2xl": "2xl:gap-0",
  },
  "1": {
    base: "gap-1",
    sm: "sm:gap-1",
    md: "md:gap-1",
    lg: "lg:gap-1",
    xl: "xl:gap-1",
    "2xl": "2xl:gap-1",
  },
  "2": {
    base: "gap-2",
    sm: "sm:gap-2",
    md: "md:gap-2",
    lg: "lg:gap-2",
    xl: "xl:gap-2",
    "2xl": "2xl:gap-2",
  },
  "3": {
    base: "gap-3",
    sm: "sm:gap-3",
    md: "md:gap-3",
    lg: "lg:gap-3",
    xl: "xl:gap-3",
    "2xl": "2xl:gap-3",
  },
  "4": {
    base: "gap-4",
    sm: "sm:gap-4",
    md: "md:gap-4",
    lg: "lg:gap-4",
    xl: "xl:gap-4",
    "2xl": "2xl:gap-4",
  },
  "5": {
    base: "gap-5",
    sm: "sm:gap-5",
    md: "md:gap-5",
    lg: "lg:gap-5",
    xl: "xl:gap-5",
    "2xl": "2xl:gap-5",
  },
  "6": {
    base: "gap-6",
    sm: "sm:gap-6",
    md: "md:gap-6",
    lg: "lg:gap-6",
    xl: "xl:gap-6",
    "2xl": "2xl:gap-6",
  },
  "7": {
    base: "gap-7",
    sm: "sm:gap-7",
    md: "md:gap-7",
    lg: "lg:gap-7",
    xl: "xl:gap-7",
    "2xl": "2xl:gap-7",
  },
  "8": {
    base: "gap-8",
    sm: "sm:gap-8",
    md: "md:gap-8",
    lg: "lg:gap-8",
    xl: "xl:gap-8",
    "2xl": "2xl:gap-8",
  },
  "9": {
    base: "gap-9",
    sm: "sm:gap-9",
    md: "md:gap-9",
    lg: "lg:gap-9",
    xl: "xl:gap-9",
    "2xl": "2xl:gap-9",
  },
  "10": {
    base: "gap-10",
    sm: "sm:gap-10",
    md: "md:gap-10",
    lg: "lg:gap-10",
    xl: "xl:gap-10",
    "2xl": "2xl:gap-10",
  },
  "11": {
    base: "gap-11",
    sm: "sm:gap-11",
    md: "md:gap-11",
    lg: "lg:gap-11",
    xl: "xl:gap-11",
    "2xl": "2xl:gap-11",
  },
  "12": {
    base: "gap-12",
    sm: "sm:gap-12",
    md: "md:gap-12",
    lg: "lg:gap-12",
    xl: "xl:gap-12",
    "2xl": "2xl:gap-12",
  },
  "13": {
    base: "gap-13",
    sm: "sm:gap-13",
    md: "md:gap-13",
    lg: "lg:gap-13",
    xl: "xl:gap-13",
    "2xl": "2xl:gap-13",
  },
  "14": {
    base: "gap-14",
    sm: "sm:gap-14",
    md: "md:gap-14",
    lg: "lg:gap-14",
    xl: "xl:gap-14",
    "2xl": "2xl:gap-14",
  },
  "15": {
    base: "gap-15",
    sm: "sm:gap-15",
    md: "md:gap-15",
    lg: "lg:gap-15",
    xl: "xl:gap-15",
    "2xl": "2xl:gap-15",
  },
  "16": {
    base: "gap-16",
    sm: "sm:gap-16",
    md: "md:gap-16",
    lg: "lg:gap-16",
    xl: "xl:gap-16",
    "2xl": "2xl:gap-16",
  },
};

const gapXClassMap: Record<Gap, Record<Breakpoint, string>> = {
  "0": {
    base: "gap-x-0",
    sm: "sm:gap-x-0",
    md: "md:gap-x-0",
    lg: "lg:gap-x-0",
    xl: "xl:gap-x-0",
    "2xl": "2xl:gap-x-0",
  },
  "1": {
    base: "gap-x-1",
    sm: "sm:gap-x-1",
    md: "md:gap-x-1",
    lg: "lg:gap-x-1",
    xl: "xl:gap-x-1",
    "2xl": "2xl:gap-x-1",
  },
  "2": {
    base: "gap-x-2",
    sm: "sm:gap-x-2",
    md: "md:gap-x-2",
    lg: "lg:gap-x-2",
    xl: "xl:gap-x-2",
    "2xl": "2xl:gap-x-2",
  },
  "3": {
    base: "gap-x-3",
    sm: "sm:gap-x-3",
    md: "md:gap-x-3",
    lg: "lg:gap-x-3",
    xl: "xl:gap-x-3",
    "2xl": "2xl:gap-x-3",
  },
  "4": {
    base: "gap-x-4",
    sm: "sm:gap-x-4",
    md: "md:gap-x-4",
    lg: "lg:gap-x-4",
    xl: "xl:gap-x-4",
    "2xl": "2xl:gap-x-4",
  },
  "5": {
    base: "gap-x-5",
    sm: "sm:gap-x-5",
    md: "md:gap-x-5",
    lg: "lg:gap-x-5",
    xl: "xl:gap-x-5",
    "2xl": "2xl:gap-x-5",
  },
  "6": {
    base: "gap-x-6",
    sm: "sm:gap-x-6",
    md: "md:gap-x-6",
    lg: "lg:gap-x-6",
    xl: "xl:gap-x-6",
    "2xl": "2xl:gap-x-6",
  },
  "7": {
    base: "gap-x-7",
    sm: "sm:gap-x-7",
    md: "md:gap-x-7",
    lg: "lg:gap-x-7",
    xl: "xl:gap-x-7",
    "2xl": "2xl:gap-x-7",
  },
  "8": {
    base: "gap-x-8",
    sm: "sm:gap-x-8",
    md: "md:gap-x-8",
    lg: "lg:gap-x-8",
    xl: "xl:gap-x-8",
    "2xl": "2xl:gap-x-8",
  },
  "9": {
    base: "gap-x-9",
    sm: "sm:gap-x-9",
    md: "md:gap-x-9",
    lg: "lg:gap-x-9",
    xl: "xl:gap-x-9",
    "2xl": "2xl:gap-x-9",
  },
  "10": {
    base: "gap-x-10",
    sm: "sm:gap-x-10",
    md: "md:gap-x-10",
    lg: "lg:gap-x-10",
    xl: "xl:gap-x-10",
    "2xl": "2xl:gap-x-10",
  },
  "11": {
    base: "gap-x-11",
    sm: "sm:gap-x-11",
    md: "md:gap-x-11",
    lg: "lg:gap-x-11",
    xl: "xl:gap-x-11",
    "2xl": "2xl:gap-x-11",
  },
  "12": {
    base: "gap-x-12",
    sm: "sm:gap-x-12",
    md: "md:gap-x-12",
    lg: "lg:gap-x-12",
    xl: "xl:gap-x-12",
    "2xl": "2xl:gap-x-12",
  },
  "13": {
    base: "gap-x-13",
    sm: "sm:gap-x-13",
    md: "md:gap-x-13",
    lg: "lg:gap-x-13",
    xl: "xl:gap-x-13",
    "2xl": "2xl:gap-x-13",
  },
  "14": {
    base: "gap-x-14",
    sm: "sm:gap-x-14",
    md: "md:gap-x-14",
    lg: "lg:gap-x-14",
    xl: "xl:gap-x-14",
    "2xl": "2xl:gap-x-14",
  },
  "15": {
    base: "gap-x-15",
    sm: "sm:gap-x-15",
    md: "md:gap-x-15",
    lg: "lg:gap-x-15",
    xl: "xl:gap-x-15",
    "2xl": "2xl:gap-x-15",
  },
  "16": {
    base: "gap-x-16",
    sm: "sm:gap-x-16",
    md: "md:gap-x-16",
    lg: "lg:gap-x-16",
    xl: "xl:gap-x-16",
    "2xl": "2xl:gap-x-16",
  },
};

const gapYClassMap: Record<Gap, Record<Breakpoint, string>> = {
  "0": {
    base: "gap-y-0",
    sm: "sm:gap-y-0",
    md: "md:gap-y-0",
    lg: "lg:gap-y-0",
    xl: "xl:gap-y-0",
    "2xl": "2xl:gap-y-0",
  },
  "1": {
    base: "gap-y-1",
    sm: "sm:gap-y-1",
    md: "md:gap-y-1",
    lg: "lg:gap-y-1",
    xl: "xl:gap-y-1",
    "2xl": "2xl:gap-y-1",
  },
  "2": {
    base: "gap-y-2",
    sm: "sm:gap-y-2",
    md: "md:gap-y-2",
    lg: "lg:gap-y-2",
    xl: "xl:gap-y-2",
    "2xl": "2xl:gap-y-2",
  },
  "3": {
    base: "gap-y-3",
    sm: "sm:gap-y-3",
    md: "md:gap-y-3",
    lg: "lg:gap-y-3",
    xl: "xl:gap-y-3",
    "2xl": "2xl:gap-y-3",
  },
  "4": {
    base: "gap-y-4",
    sm: "sm:gap-y-4",
    md: "md:gap-y-4",
    lg: "lg:gap-y-4",
    xl: "xl:gap-y-4",
    "2xl": "2xl:gap-y-4",
  },
  "5": {
    base: "gap-y-5",
    sm: "sm:gap-y-5",
    md: "md:gap-y-5",
    lg: "lg:gap-y-5",
    xl: "xl:gap-y-5",
    "2xl": "2xl:gap-y-5",
  },
  "6": {
    base: "gap-y-6",
    sm: "sm:gap-y-6",
    md: "md:gap-y-6",
    lg: "lg:gap-y-6",
    xl: "xl:gap-y-6",
    "2xl": "2xl:gap-y-6",
  },
  "7": {
    base: "gap-y-7",
    sm: "sm:gap-y-7",
    md: "md:gap-y-7",
    lg: "lg:gap-y-7",
    xl: "xl:gap-y-7",
    "2xl": "2xl:gap-y-7",
  },
  "8": {
    base: "gap-y-8",
    sm: "sm:gap-y-8",
    md: "md:gap-y-8",
    lg: "lg:gap-y-8",
    xl: "xl:gap-y-8",
    "2xl": "2xl:gap-y-8",
  },
  "9": {
    base: "gap-y-9",
    sm: "sm:gap-y-9",
    md: "md:gap-y-9",
    lg: "lg:gap-y-9",
    xl: "xl:gap-y-9",
    "2xl": "2xl:gap-y-9",
  },
  "10": {
    base: "gap-y-10",
    sm: "sm:gap-y-10",
    md: "md:gap-y-10",
    lg: "lg:gap-y-10",
    xl: "xl:gap-y-10",
    "2xl": "2xl:gap-y-10",
  },
  "11": {
    base: "gap-y-11",
    sm: "sm:gap-y-11",
    md: "md:gap-y-11",
    lg: "lg:gap-y-11",
    xl: "xl:gap-y-11",
    "2xl": "2xl:gap-y-11",
  },
  "12": {
    base: "gap-y-12",
    sm: "sm:gap-y-12",
    md: "md:gap-y-12",
    lg: "lg:gap-y-12",
    xl: "xl:gap-y-12",
    "2xl": "2xl:gap-y-12",
  },
  "13": {
    base: "gap-y-13",
    sm: "sm:gap-y-13",
    md: "md:gap-y-13",
    lg: "lg:gap-y-13",
    xl: "xl:gap-y-13",
    "2xl": "2xl:gap-y-13",
  },
  "14": {
    base: "gap-y-14",
    sm: "sm:gap-y-14",
    md: "md:gap-y-14",
    lg: "lg:gap-y-14",
    xl: "xl:gap-y-14",
    "2xl": "2xl:gap-y-14",
  },
  "15": {
    base: "gap-y-15",
    sm: "sm:gap-y-15",
    md: "md:gap-y-15",
    lg: "lg:gap-y-15",
    xl: "xl:gap-y-15",
    "2xl": "2xl:gap-y-15",
  },
  "16": {
    base: "gap-y-16",
    sm: "sm:gap-y-16",
    md: "md:gap-y-16",
    lg: "lg:gap-y-16",
    xl: "xl:gap-y-16",
    "2xl": "2xl:gap-y-16",
  },
};

function getResponsiveClassesExplicit<T extends string | boolean | number>(
  value: T | Partial<Record<Breakpoint, T>> | undefined,
  classMap: Record<string, Record<Breakpoint, string>>,
): string[] {
  if (value === undefined || value === null) {
    return [];
  }

  // Handle primitive value (backwards compatible)
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    const key = String(value);
    return classMap[key] ? [classMap[key].base] : [];
  }

  // Handle responsive object
  const classes: string[] = [];
  const breakpointOrder: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"];

  for (const breakpoint of breakpointOrder) {
    const val = (value as Partial<Record<Breakpoint, T>>)[breakpoint];
    if (val !== undefined) {
      const key = String(val);
      if (classMap[key]) {
        classes.push(classMap[key][breakpoint]);
      }
    }
  }

  return classes;
}

const FlexComponent = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, as: Component = "div", direction, align, justify, grow, wrap, gap, gapX, gapY, ...props }, ref) => {
    // Generate responsive classes using explicit class maps
    const directionClasses = getResponsiveClassesExplicit(direction, directionClassMap);
    const alignClasses = getResponsiveClassesExplicit(align, alignClassMap);
    const justifyClasses = getResponsiveClassesExplicit(justify, justifyClassMap);
    const growClasses = getResponsiveClassesExplicit(grow, growClassMap);
    const wrapClasses = getResponsiveClassesExplicit(wrap, wrapClassMap);
    const gapClasses = getResponsiveClassesExplicit(gap, gapClassMap);
    const gapXClasses = getResponsiveClassesExplicit(gapX, gapXClassMap);
    const gapYClasses = getResponsiveClassesExplicit(gapY, gapYClassMap);

    return (
      <Component
        className={cn(
          "flex",
          ...directionClasses,
          ...alignClasses,
          ...justifyClasses,
          ...growClasses,
          ...wrapClasses,
          ...gapClasses,
          ...gapXClasses,
          ...gapYClasses,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

const Flex = Object.assign(FlexComponent, { Item: FlexItem }) as typeof FlexComponent & { Item: typeof FlexItem };

export { Flex };
