import React from "react";

import type { Gap, GridCols, GridFlow, GridRows } from "@/types";
import { cn } from "@/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: GridCols;
  rows?: GridRows;
  flow?: GridFlow;
  gap?: Gap;
  gapX?: Gap;
  gapY?: Gap;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, as: Component = "div", cols, rows, gap, gapX, gapY, flow, ...props }, ref) => {
    return (
      <Component
        className={cn(
          "grid",
          {
            "grid-cols-1": cols === "1",
            "grid-cols-2": cols === "2",
            "grid-cols-3": cols === "3",
            "grid-cols-4": cols === "4",
            "grid-cols-5": cols === "5",
            "grid-cols-6": cols === "6",
            "grid-cols-7": cols === "7",
            "grid-cols-8": cols === "8",
            "grid-cols-9": cols === "9",
            "grid-cols-10": cols === "10",
            "grid-cols-11": cols === "11",
            "grid-cols-12": cols === "12",
            "grid-cols-none": cols === "none",
          },
          {
            "grid-rows-1": rows === "1",
            "grid-rows-2": rows === "2",
            "grid-rows-3": rows === "3",
            "grid-rows-4": rows === "4",
            "grid-rows-5": rows === "5",
            "grid-rows-6": rows === "6",
            "grid-rows-7": rows === "7",
            "grid-rows-8": rows === "8",
            "grid-rows-9": rows === "9",
            "grid-rows-10": rows === "10",
            "grid-rows-11": rows === "11",
            "grid-rows-12": rows === "12",
            "grid-rows-13": rows === "13",
            "grid-rows-14": rows === "14",
            "grid-rows-15": rows === "15",
            "grid-rows-16": rows === "16",
            "grid-rows-17": rows === "17",
            "grid-rows-18": rows === "18",
            "grid-rows-19": rows === "19",
            "grid-rows-20": rows === "20",
            "grid-rows-21": rows === "21",
            "grid-rows-22": rows === "22",
            "grid-rows-23": rows === "23",
            "grid-rows-24": rows === "24",
            "grid-rows-none": rows === "none",
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
          {
            "grid-flow-row": flow === "row",
            "grid-flow-col": flow === "col",
            "grid-flow-dense": flow === "dense",
            "grid-flow-row-dense": flow === "row-dense",
            "grid-flow-col-dense": flow === "col-dense",
          },
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
