import React from "react";

import type {
  ResponsiveFlexAlign,
  ResponsiveFlexDirection,
  ResponsiveFlexGrow,
  ResponsiveFlexJustify,
  ResponsiveFlexWrap,
  ResponsiveGap,
} from "@/types";
import { cn } from "@/utils";
import { getResponsiveClasses } from "@/utils/responsive";
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

const FlexComponent = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, as: Component = "div", direction, align, justify, grow, wrap, gap, gapX, gapY, ...props }, ref) => {
    // Generate responsive classes for each property
    const directionClasses = getResponsiveClasses(direction, (d) => `flex-${d}`);

    const alignClasses = getResponsiveClasses(align, (a) => `items-${a}`);

    const justifyClasses = getResponsiveClasses(justify, (j) => `justify-${j}`);

    const growClasses = getResponsiveClasses(grow, (g) => {
      // Handle boolean aliases for grow
      if (g === true || g === "1") return "grow-1";
      if (g === false || g === "0") return "grow-0";
      return `grow-${g}`;
    });

    const wrapClasses = getResponsiveClasses(wrap, (w) => `flex-${w}`);

    const gapClasses = getResponsiveClasses(gap, (g) => `gap-${g}`);
    const gapXClasses = getResponsiveClasses(gapX, (g) => `gap-x-${g}`);
    const gapYClasses = getResponsiveClasses(gapY, (g) => `gap-y-${g}`);

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
