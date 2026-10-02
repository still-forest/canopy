import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/utils/cn";
import "./GridLayout.css";

/**
 * @deprecated Use {@link Grid} instead, which supports responsive `cols`, `gap`
 * and alignment rather than a fixed 12-column, `gap-4` container:
 *
 * ```tsx
 * <Grid cols="12" gap="4">
 *   <Grid.Item colSpan={{ base: "12", md: "6" }} />
 * </Grid>
 * ```
 *
 * Note that `Grid` takes string tokens (`colSpan="6"`) where `GridLayout` takes
 * numbers (`span={6}`).
 */
const GridLayout = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("grid-layout", className)} {...props}>
      {children}
    </div>
  );
};

type Span = number | [col: number, row: number];

const col = (s: Span | undefined): number | undefined => (s == null ? undefined : Array.isArray(s) ? s[0] : s);
const row = (s: Span | undefined): number | undefined => (s == null ? undefined : Array.isArray(s) ? s[1] : undefined);

export interface ItemProps extends ComponentProps<"div"> {
  span: Span;
  sm?: Span;
  md?: Span;
  lg?: Span;
}

/**
 * @deprecated Use {@link Grid.Item} instead. `span={12} md={6}` becomes
 * `colSpan={{ base: "12", md: "6" }}`.
 */
const Item = ({ children, className, span, sm, md, lg, style, ...props }: ItemProps) => (
  <div
    className={cn("grid-layout-item", className)}
    style={
      {
        "--span": col(span),
        "--sm": col(sm),
        "--md": col(md),
        "--lg": col(lg),
        "--row": row(span),
        "--sm-row": row(sm),
        "--md-row": row(md),
        "--lg-row": row(lg),
        ...style,
      } as CSSProperties
    }
    {...props}
  >
    {children}
  </div>
);

GridLayout.Item = Item;

export { GridLayout };
