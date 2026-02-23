import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/utils/cn";
import "./GridLayout.css";

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

const Item = ({ children, className, span, sm, md, lg, style, ...props }: ItemProps) => {
  const cols = {
    base: col(span)!,
    sm: col(sm) ?? col(span)!,
    md: col(md) ?? col(sm) ?? col(span)!,
    lg: col(lg) ?? col(md) ?? col(sm) ?? col(span)!,
  };

  const rows = {
    base: row(span),
    sm: row(sm) ?? row(span),
    md: row(md) ?? row(sm) ?? row(span),
    lg: row(lg) ?? row(md) ?? row(sm) ?? row(span),
  };

  const hasRows = rows.base !== undefined;

  return (
    <div
      className={cn(
        "col-span-(--span) sm:col-span-(--sm) md:col-span-(--md) lg:col-span-(--lg)",
        hasRows && "row-span-(--row-span) sm:row-span-(--sm-row) md:row-span-(--md-row) lg:row-span-(--lg-row)",
        className,
      )}
      style={
        {
          "--span": cols.base,
          "--sm": cols.sm,
          "--md": cols.md,
          "--lg": cols.lg,
          ...(hasRows && {
            "--row-span": rows.base,
            "--sm-row": rows.sm,
            "--md-row": rows.md,
            "--lg-row": rows.lg,
          }),
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};

GridLayout.Item = Item;
export { GridLayout };
