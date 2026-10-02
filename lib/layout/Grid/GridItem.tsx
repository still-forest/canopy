import React from "react";

import type { GridLine, GridSpan, Responsive } from "@/types";
import { cn, responsiveClasses } from "@/utils";
import { COL_SPAN_CLASSES, COL_START_CLASSES, ROW_SPAN_CLASSES, ROW_START_CLASSES } from "./gridClasses";

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** Columns to span. Accepts a token or a mobile-first breakpoint map. */
  colSpan?: Responsive<GridSpan>;
  rowSpan?: Responsive<GridSpan>;
  /** Column line the item starts at. */
  colStart?: Responsive<GridLine>;
  rowStart?: Responsive<GridLine>;
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, as: Component = "div", colSpan, rowSpan, colStart, rowStart, ...props }, ref) => {
    return (
      <Component
        className={cn(
          responsiveClasses(colSpan, COL_SPAN_CLASSES),
          responsiveClasses(rowSpan, ROW_SPAN_CLASSES),
          responsiveClasses(colStart, COL_START_CLASSES),
          responsiveClasses(rowStart, ROW_START_CLASSES),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
GridItem.displayName = "Grid.Item";

export { GridItem };
