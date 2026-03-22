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
