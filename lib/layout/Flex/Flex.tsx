import React from "react";

import type { FlexAlign, FlexDirection, FlexGrow, FlexJustify, FlexWrap, Gap } from "@/types";
import { cn } from "@/utils";
import { FlexItem } from "./FlexItem";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  grow?: FlexGrow;
  wrap?: FlexWrap;
  gap?: Gap;
  gapX?: Gap;
  gapY?: Gap;
}

const FlexComponent = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, as: Component = "div", direction, align, justify, grow, wrap, gap, gapX, gapY, ...props }, ref) => {
    return (
      <Component
        className={cn(
          "flex",
          // Flex direction
          {
            "flex-row": direction === "row",
            "flex-row-reverse": direction === "row-reverse",
            "flex-col": direction === "col",
            "flex-col-reverse": direction === "col-reverse",
          },
          // Align items
          {
            "items-start": align === "start",
            "items-center": align === "center",
            "items-end": align === "end",
            "items-stretch": align === "stretch",
            "items-baseline": align === "baseline",
          },
          // Justify content
          {
            "justify-start": justify === "start",
            "justify-center": justify === "center",
            "justify-end": justify === "end",
            "justify-between": justify === "between",
            "justify-around": justify === "around",
            "justify-evenly": justify === "evenly",
            "justify-stretch": justify === "stretch",
            "justify-baseline": justify === "baseline",
            "justify-normal": justify === "normal",
          },
          // Grow
          {
            "grow-0": grow === "0" || grow === false,
            "grow-1": grow === "1" || grow === true,
            "grow-2": grow === "2",
            "grow-3": grow === "3",
            "grow-4": grow === "4",
            "grow-5": grow === "5",
            "grow-6": grow === "6",
            "grow-7": grow === "7",
            "grow-8": grow === "8",
            "grow-9": grow === "9",
            "grow-10": grow === "10",
            "grow-11": grow === "11",
            "grow-12": grow === "12",
          },
          // Wrap content
          {
            "flex-wrap": wrap === "wrap",
            "flex-wrap-reverse": wrap === "wrap-reverse",
            "flex-nowrap": wrap === "nowrap",
          },
          // Gap
          {
            "gap-0": gap === "0",
            "gap-1": gap === "1",
            "gap-2": gap === "2",
            "gap-3": gap === "3",
            "gap-4": gap === "4",
            "gap-5": gap === "5",
            "gap-6": gap === "6",
            "gap-7": gap === "7",
            "gap-8": gap === "8",
            "gap-9": gap === "9",
            "gap-10": gap === "10",
            "gap-11": gap === "11",
            "gap-12": gap === "12",
            "gap-13": gap === "13",
            "gap-14": gap === "14",
            "gap-15": gap === "15",
            "gap-16": gap === "16",
          },
          {
            "gap-x-0": gapX === "0",
            "gap-x-1": gapX === "1",
            "gap-x-2": gapX === "2",
            "gap-x-3": gapX === "3",
            "gap-x-4": gapX === "4",
            "gap-x-5": gapX === "5",
            "gap-x-6": gapX === "6",
            "gap-x-7": gapX === "7",
            "gap-x-8": gapX === "8",
            "gap-x-9": gapX === "9",
            "gap-x-10": gapX === "10",
            "gap-x-11": gapX === "11",
            "gap-x-12": gapX === "12",
            "gap-x-13": gapX === "13",
            "gap-x-14": gapX === "14",
            "gap-x-15": gapX === "15",
            "gap-x-16": gapX === "16",
          },
          {
            "gap-y-0": gapY === "0",
            "gap-y-1": gapY === "1",
            "gap-y-2": gapY === "2",
            "gap-y-3": gapY === "3",
            "gap-y-4": gapY === "4",
            "gap-y-5": gapY === "5",
            "gap-y-6": gapY === "6",
            "gap-y-7": gapY === "7",
            "gap-y-8": gapY === "8",
            "gap-y-9": gapY === "9",
            "gap-y-10": gapY === "10",
            "gap-y-11": gapY === "11",
            "gap-y-12": gapY === "12",
            "gap-y-13": gapY === "13",
            "gap-y-14": gapY === "14",
            "gap-y-15": gapY === "15",
            "gap-y-16": gapY === "16",
          },
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
