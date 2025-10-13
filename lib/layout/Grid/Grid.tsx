import React from "react";

import type {
  Breakpoint,
  Gap,
  GridCols,
  GridFlow,
  GridRows,
  ResponsiveGap,
  ResponsiveGridCols,
  ResponsiveGridFlow,
  ResponsiveGridRows,
} from "@/types";
import { cn } from "@/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: ResponsiveGridCols;
  rows?: ResponsiveGridRows;
  flow?: ResponsiveGridFlow;
  gap?: ResponsiveGap;
  gapX?: ResponsiveGap;
  gapY?: ResponsiveGap;
}

// Explicit class mappings for Tailwind CSS compiler
const colsClassMap: Record<GridCols, Record<Breakpoint, string>> = {
  "1": {
    base: "grid-cols-1",
    sm: "sm:grid-cols-1",
    md: "md:grid-cols-1",
    lg: "lg:grid-cols-1",
    xl: "xl:grid-cols-1",
    "2xl": "2xl:grid-cols-1",
  },
  "2": {
    base: "grid-cols-2",
    sm: "sm:grid-cols-2",
    md: "md:grid-cols-2",
    lg: "lg:grid-cols-2",
    xl: "xl:grid-cols-2",
    "2xl": "2xl:grid-cols-2",
  },
  "3": {
    base: "grid-cols-3",
    sm: "sm:grid-cols-3",
    md: "md:grid-cols-3",
    lg: "lg:grid-cols-3",
    xl: "xl:grid-cols-3",
    "2xl": "2xl:grid-cols-3",
  },
  "4": {
    base: "grid-cols-4",
    sm: "sm:grid-cols-4",
    md: "md:grid-cols-4",
    lg: "lg:grid-cols-4",
    xl: "xl:grid-cols-4",
    "2xl": "2xl:grid-cols-4",
  },
  "5": {
    base: "grid-cols-5",
    sm: "sm:grid-cols-5",
    md: "md:grid-cols-5",
    lg: "lg:grid-cols-5",
    xl: "xl:grid-cols-5",
    "2xl": "2xl:grid-cols-5",
  },
  "6": {
    base: "grid-cols-6",
    sm: "sm:grid-cols-6",
    md: "md:grid-cols-6",
    lg: "lg:grid-cols-6",
    xl: "xl:grid-cols-6",
    "2xl": "2xl:grid-cols-6",
  },
  "7": {
    base: "grid-cols-7",
    sm: "sm:grid-cols-7",
    md: "md:grid-cols-7",
    lg: "lg:grid-cols-7",
    xl: "xl:grid-cols-7",
    "2xl": "2xl:grid-cols-7",
  },
  "8": {
    base: "grid-cols-8",
    sm: "sm:grid-cols-8",
    md: "md:grid-cols-8",
    lg: "lg:grid-cols-8",
    xl: "xl:grid-cols-8",
    "2xl": "2xl:grid-cols-8",
  },
  "9": {
    base: "grid-cols-9",
    sm: "sm:grid-cols-9",
    md: "md:grid-cols-9",
    lg: "lg:grid-cols-9",
    xl: "xl:grid-cols-9",
    "2xl": "2xl:grid-cols-9",
  },
  "10": {
    base: "grid-cols-10",
    sm: "sm:grid-cols-10",
    md: "md:grid-cols-10",
    lg: "lg:grid-cols-10",
    xl: "xl:grid-cols-10",
    "2xl": "2xl:grid-cols-10",
  },
  "11": {
    base: "grid-cols-11",
    sm: "sm:grid-cols-11",
    md: "md:grid-cols-11",
    lg: "lg:grid-cols-11",
    xl: "xl:grid-cols-11",
    "2xl": "2xl:grid-cols-11",
  },
  "12": {
    base: "grid-cols-12",
    sm: "sm:grid-cols-12",
    md: "md:grid-cols-12",
    lg: "lg:grid-cols-12",
    xl: "xl:grid-cols-12",
    "2xl": "2xl:grid-cols-12",
  },
  none: {
    base: "grid-cols-none",
    sm: "sm:grid-cols-none",
    md: "md:grid-cols-none",
    lg: "lg:grid-cols-none",
    xl: "xl:grid-cols-none",
    "2xl": "2xl:grid-cols-none",
  },
};

const rowsClassMap: Record<GridRows, Record<Breakpoint, string>> = {
  "1": {
    base: "grid-rows-1",
    sm: "sm:grid-rows-1",
    md: "md:grid-rows-1",
    lg: "lg:grid-rows-1",
    xl: "xl:grid-rows-1",
    "2xl": "2xl:grid-rows-1",
  },
  "2": {
    base: "grid-rows-2",
    sm: "sm:grid-rows-2",
    md: "md:grid-rows-2",
    lg: "lg:grid-rows-2",
    xl: "xl:grid-rows-2",
    "2xl": "2xl:grid-rows-2",
  },
  "3": {
    base: "grid-rows-3",
    sm: "sm:grid-rows-3",
    md: "md:grid-rows-3",
    lg: "lg:grid-rows-3",
    xl: "xl:grid-rows-3",
    "2xl": "2xl:grid-rows-3",
  },
  "4": {
    base: "grid-rows-4",
    sm: "sm:grid-rows-4",
    md: "md:grid-rows-4",
    lg: "lg:grid-rows-4",
    xl: "xl:grid-rows-4",
    "2xl": "2xl:grid-rows-4",
  },
  "5": {
    base: "grid-rows-5",
    sm: "sm:grid-rows-5",
    md: "md:grid-rows-5",
    lg: "lg:grid-rows-5",
    xl: "xl:grid-rows-5",
    "2xl": "2xl:grid-rows-5",
  },
  "6": {
    base: "grid-rows-6",
    sm: "sm:grid-rows-6",
    md: "md:grid-rows-6",
    lg: "lg:grid-rows-6",
    xl: "xl:grid-rows-6",
    "2xl": "2xl:grid-rows-6",
  },
  "7": {
    base: "grid-rows-7",
    sm: "sm:grid-rows-7",
    md: "md:grid-rows-7",
    lg: "lg:grid-rows-7",
    xl: "xl:grid-rows-7",
    "2xl": "2xl:grid-rows-7",
  },
  "8": {
    base: "grid-rows-8",
    sm: "sm:grid-rows-8",
    md: "md:grid-rows-8",
    lg: "lg:grid-rows-8",
    xl: "xl:grid-rows-8",
    "2xl": "2xl:grid-rows-8",
  },
  "9": {
    base: "grid-rows-9",
    sm: "sm:grid-rows-9",
    md: "md:grid-rows-9",
    lg: "lg:grid-rows-9",
    xl: "xl:grid-rows-9",
    "2xl": "2xl:grid-rows-9",
  },
  "10": {
    base: "grid-rows-10",
    sm: "sm:grid-rows-10",
    md: "md:grid-rows-10",
    lg: "lg:grid-rows-10",
    xl: "xl:grid-rows-10",
    "2xl": "2xl:grid-rows-10",
  },
  "11": {
    base: "grid-rows-11",
    sm: "sm:grid-rows-11",
    md: "md:grid-rows-11",
    lg: "lg:grid-rows-11",
    xl: "xl:grid-rows-11",
    "2xl": "2xl:grid-rows-11",
  },
  "12": {
    base: "grid-rows-12",
    sm: "sm:grid-rows-12",
    md: "md:grid-rows-12",
    lg: "lg:grid-rows-12",
    xl: "xl:grid-rows-12",
    "2xl": "2xl:grid-rows-12",
  },
  "13": {
    base: "grid-rows-13",
    sm: "sm:grid-rows-13",
    md: "md:grid-rows-13",
    lg: "lg:grid-rows-13",
    xl: "xl:grid-rows-13",
    "2xl": "2xl:grid-rows-13",
  },
  "14": {
    base: "grid-rows-14",
    sm: "sm:grid-rows-14",
    md: "md:grid-rows-14",
    lg: "lg:grid-rows-14",
    xl: "xl:grid-rows-14",
    "2xl": "2xl:grid-rows-14",
  },
  "15": {
    base: "grid-rows-15",
    sm: "sm:grid-rows-15",
    md: "md:grid-rows-15",
    lg: "lg:grid-rows-15",
    xl: "xl:grid-rows-15",
    "2xl": "2xl:grid-rows-15",
  },
  "16": {
    base: "grid-rows-16",
    sm: "sm:grid-rows-16",
    md: "md:grid-rows-16",
    lg: "lg:grid-rows-16",
    xl: "xl:grid-rows-16",
    "2xl": "2xl:grid-rows-16",
  },
  "17": {
    base: "grid-rows-17",
    sm: "sm:grid-rows-17",
    md: "md:grid-rows-17",
    lg: "lg:grid-rows-17",
    xl: "xl:grid-rows-17",
    "2xl": "2xl:grid-rows-17",
  },
  "18": {
    base: "grid-rows-18",
    sm: "sm:grid-rows-18",
    md: "md:grid-rows-18",
    lg: "lg:grid-rows-18",
    xl: "xl:grid-rows-18",
    "2xl": "2xl:grid-rows-18",
  },
  "19": {
    base: "grid-rows-19",
    sm: "sm:grid-rows-19",
    md: "md:grid-rows-19",
    lg: "lg:grid-rows-19",
    xl: "xl:grid-rows-19",
    "2xl": "2xl:grid-rows-19",
  },
  "20": {
    base: "grid-rows-20",
    sm: "sm:grid-rows-20",
    md: "md:grid-rows-20",
    lg: "lg:grid-rows-20",
    xl: "xl:grid-rows-20",
    "2xl": "2xl:grid-rows-20",
  },
  "21": {
    base: "grid-rows-21",
    sm: "sm:grid-rows-21",
    md: "md:grid-rows-21",
    lg: "lg:grid-rows-21",
    xl: "xl:grid-rows-21",
    "2xl": "2xl:grid-rows-21",
  },
  "22": {
    base: "grid-rows-22",
    sm: "sm:grid-rows-22",
    md: "md:grid-rows-22",
    lg: "lg:grid-rows-22",
    xl: "xl:grid-rows-22",
    "2xl": "2xl:grid-rows-22",
  },
  "23": {
    base: "grid-rows-23",
    sm: "sm:grid-rows-23",
    md: "md:grid-rows-23",
    lg: "lg:grid-rows-23",
    xl: "xl:grid-rows-23",
    "2xl": "2xl:grid-rows-23",
  },
  "24": {
    base: "grid-rows-24",
    sm: "sm:grid-rows-24",
    md: "md:grid-rows-24",
    lg: "lg:grid-rows-24",
    xl: "xl:grid-rows-24",
    "2xl": "2xl:grid-rows-24",
  },
  none: {
    base: "grid-rows-none",
    sm: "sm:grid-rows-none",
    md: "md:grid-rows-none",
    lg: "lg:grid-rows-none",
    xl: "xl:grid-rows-none",
    "2xl": "2xl:grid-rows-none",
  },
};

const flowClassMap: Record<GridFlow, Record<Breakpoint, string>> = {
  row: {
    base: "grid-flow-row",
    sm: "sm:grid-flow-row",
    md: "md:grid-flow-row",
    lg: "lg:grid-flow-row",
    xl: "xl:grid-flow-row",
    "2xl": "2xl:grid-flow-row",
  },
  col: {
    base: "grid-flow-col",
    sm: "sm:grid-flow-col",
    md: "md:grid-flow-col",
    lg: "lg:grid-flow-col",
    xl: "xl:grid-flow-col",
    "2xl": "2xl:grid-flow-col",
  },
  dense: {
    base: "grid-flow-dense",
    sm: "sm:grid-flow-dense",
    md: "md:grid-flow-dense",
    lg: "lg:grid-flow-dense",
    xl: "xl:grid-flow-dense",
    "2xl": "2xl:grid-flow-dense",
  },
  "row-dense": {
    base: "grid-flow-row-dense",
    sm: "sm:grid-flow-row-dense",
    md: "md:grid-flow-row-dense",
    lg: "lg:grid-flow-row-dense",
    xl: "xl:grid-flow-row-dense",
    "2xl": "2xl:grid-flow-row-dense",
  },
  "col-dense": {
    base: "grid-flow-col-dense",
    sm: "sm:grid-flow-col-dense",
    md: "md:grid-flow-col-dense",
    lg: "lg:grid-flow-col-dense",
    xl: "xl:grid-flow-col-dense",
    "2xl": "2xl:grid-flow-col-dense",
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

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, as: Component = "div", cols, rows, gap, gapX, gapY, flow, ...props }, ref) => {
    // Generate responsive classes using explicit class maps
    const colsClasses = getResponsiveClassesExplicit(cols, colsClassMap);
    const rowsClasses = getResponsiveClassesExplicit(rows, rowsClassMap);
    const flowClasses = getResponsiveClassesExplicit(flow, flowClassMap);
    const gapClasses = getResponsiveClassesExplicit(gap, gapClassMap);
    const gapXClasses = getResponsiveClassesExplicit(gapX, gapXClassMap);
    const gapYClasses = getResponsiveClassesExplicit(gapY, gapYClassMap);

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
