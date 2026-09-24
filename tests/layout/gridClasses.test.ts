import { describe, expect, it } from "vitest";

import {
  COL_SPAN_CLASSES,
  COL_START_CLASSES,
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
  ROW_SPAN_CLASSES,
  ROW_START_CLASSES,
} from "@/layout/Grid/gridClasses";
import {
  BREAKPOINTS,
  GAPS,
  GRID_ALIGN_CONTENTS,
  GRID_ALIGNS,
  GRID_COLS,
  GRID_FLOWS,
  GRID_JUSTIFIES,
  GRID_JUSTIFY_ITEMS,
  GRID_LINES,
  GRID_ROWS,
  GRID_SPANS,
} from "@/types";
import type { ResponsiveClassMap } from "@/utils";

// [table, tokens, Tailwind utility prefix]
const TABLES: [ResponsiveClassMap<string>, readonly string[], string][] = [
  [GRID_COLS_CLASSES, GRID_COLS, "grid-cols"],
  [GRID_ROWS_CLASSES, GRID_ROWS, "grid-rows"],
  [GRID_FLOW_CLASSES, GRID_FLOWS, "grid-flow"],
  [GAP_CLASSES, GAPS, "gap"],
  [GAP_X_CLASSES, GAPS, "gap-x"],
  [GAP_Y_CLASSES, GAPS, "gap-y"],
  [GRID_ALIGN_CLASSES, GRID_ALIGNS, "items"],
  [GRID_JUSTIFY_CLASSES, GRID_JUSTIFIES, "justify"],
  [GRID_ALIGN_CONTENT_CLASSES, GRID_ALIGN_CONTENTS, "content"],
  [GRID_JUSTIFY_ITEMS_CLASSES, GRID_JUSTIFY_ITEMS, "justify-items"],
  [COL_SPAN_CLASSES, GRID_SPANS, "col-span"],
  [ROW_SPAN_CLASSES, GRID_SPANS, "row-span"],
  [COL_START_CLASSES, GRID_LINES, "col-start"],
  [ROW_START_CLASSES, GRID_LINES, "row-start"],
];

describe("gridClasses", () => {
  // Consuming apps generate utilities by scanning the built output for literal
  // class names, so a missing or misspelled entry means no CSS at all in the
  // consumer's build — something no render-based test can catch.
  it.each(TABLES)("covers every token at every breakpoint (%#: %s)", (table, tokens, utility) => {
    for (const breakpoint of BREAKPOINTS) {
      const prefix = breakpoint === "base" ? "" : `${breakpoint}:`;

      expect(Object.keys(table[breakpoint]).sort()).toEqual([...tokens].sort());

      for (const token of tokens) {
        expect(table[breakpoint][token]).toBe(`${prefix}${utility}-${token}`);
      }
    }
  });

  it("defines exactly the expected breakpoints, mobile-first", () => {
    expect(BREAKPOINTS).toEqual(["base", "sm", "md", "lg", "xl", "2xl"]);

    for (const [table] of TABLES) {
      expect(Object.keys(table)).toEqual([...BREAKPOINTS]);
    }
  });
});
