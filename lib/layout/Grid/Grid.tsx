import React from "react";

import type {
  Gap,
  GridAlign,
  GridAlignContent,
  GridCols,
  GridFlow,
  GridJustify,
  GridJustifyItems,
  GridRows,
  Responsive,
} from "@/types";
import { cn, responsiveClasses } from "@/utils";
import { GridItem } from "./GridItem";
import {
  GAP_CLASSES,
  GAP_X_CLASSES,
  GAP_Y_CLASSES,
  GRID_ALIGN_CLASSES,
  GRID_ALIGN_CONTENT_CLASSES,
  GRID_COLS_CLASSES,
  GRID_FLOW_CLASSES,
  GRID_JUSTIFY_CLASSES,
  GRID_JUSTIFY_ITEMS_CLASSES,
  GRID_ROWS_CLASSES,
} from "./gridClasses";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** Number of columns. Accepts a token or a mobile-first breakpoint map. */
  cols?: Responsive<GridCols>;
  rows?: Responsive<GridRows>;
  flow?: Responsive<GridFlow>;
  gap?: Responsive<Gap>;
  gapX?: Responsive<Gap>;
  gapY?: Responsive<Gap>;
  /** Aligns items within their track on the block axis (`align-items`). */
  align?: Responsive<GridAlign>;
  /** Distributes tracks along the inline axis (`justify-content`). */
  justify?: Responsive<GridJustify>;
  /** Distributes tracks along the block axis (`align-content`). */
  alignContent?: Responsive<GridAlignContent>;
  /** Aligns items within their track on the inline axis (`justify-items`). */
  justifyItems?: Responsive<GridJustifyItems>;
}

const GridComponent = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      as: Component = "div",
      cols,
      rows,
      gap,
      gapX,
      gapY,
      flow,
      align,
      justify,
      alignContent,
      justifyItems,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        className={cn(
          "grid",
          responsiveClasses(cols, GRID_COLS_CLASSES),
          responsiveClasses(rows, GRID_ROWS_CLASSES),
          responsiveClasses(gap, GAP_CLASSES),
          responsiveClasses(gapX, GAP_X_CLASSES),
          responsiveClasses(gapY, GAP_Y_CLASSES),
          responsiveClasses(flow, GRID_FLOW_CLASSES),
          responsiveClasses(align, GRID_ALIGN_CLASSES),
          responsiveClasses(justify, GRID_JUSTIFY_CLASSES),
          responsiveClasses(alignContent, GRID_ALIGN_CONTENT_CLASSES),
          responsiveClasses(justifyItems, GRID_JUSTIFY_ITEMS_CLASSES),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
GridComponent.displayName = "Grid";

const Grid = Object.assign(GridComponent, { Item: GridItem }) as typeof GridComponent & { Item: typeof GridItem };

export { Grid };
