import React from "react";

import type { ResponsiveGap, ResponsiveGridCols, ResponsiveGridFlow, ResponsiveGridRows } from "@/types";
import { cn } from "@/utils";
import { getResponsiveClasses } from "@/utils/responsive";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: ResponsiveGridCols;
  rows?: ResponsiveGridRows;
  flow?: ResponsiveGridFlow;
  gap?: ResponsiveGap;
  gapX?: ResponsiveGap;
  gapY?: ResponsiveGap;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, as: Component = "div", cols, rows, gap, gapX, gapY, flow, ...props }, ref) => {
    // Generate responsive classes for each property
    const colsClasses = getResponsiveClasses(cols, (c) => `grid-cols-${c}`);

    const rowsClasses = getResponsiveClasses(rows, (r) => `grid-rows-${r}`);

    const flowClasses = getResponsiveClasses(flow, (f) => `grid-flow-${f}`);

    const gapClasses = getResponsiveClasses(gap, (g) => `gap-${g}`);
    const gapXClasses = getResponsiveClasses(gapX, (g) => `gap-x-${g}`);
    const gapYClasses = getResponsiveClasses(gapY, (g) => `gap-y-${g}`);

    return (
      <Component
        className={cn(
          "grid",
          ...colsClasses,
          ...rowsClasses,
          ...flowClasses,
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
Grid.displayName = "Grid";

export { Grid };
