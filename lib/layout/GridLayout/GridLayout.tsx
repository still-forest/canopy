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

type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type RowSpan = 1 | 2 | 3 | 4 | 5 | 6;

interface ItemProps extends ComponentProps<"div"> {
  span: ColSpan;
  sm?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  rowSpan?: RowSpan;
  smRowSpan?: RowSpan;
  mdRowSpan?: RowSpan;
  lgRowSpan?: RowSpan;
}

const Item = ({
  children,
  className,
  span,
  sm,
  md,
  lg,
  rowSpan,
  smRowSpan,
  mdRowSpan,
  lgRowSpan,
  style,
  ...props
}: ItemProps) => (
  <div
    className={cn(
      "col-span-(--span) sm:col-span-(--sm) md:col-span-(--md) lg:col-span-(--lg)",
      rowSpan && "row-span-(--row-span) sm:row-span-(--sm-row) md:row-span-(--md-row) lg:row-span-(--lg-row)",
      className,
    )}
    style={
      {
        "--span": span,
        "--sm": sm ?? span,
        "--md": md ?? sm ?? span,
        "--lg": lg ?? md ?? sm ?? span,
        ...(rowSpan && {
          "--row-span": rowSpan,
          "--sm-row": smRowSpan ?? rowSpan,
          "--md-row": mdRowSpan ?? smRowSpan ?? rowSpan,
          "--lg-row": lgRowSpan ?? mdRowSpan ?? smRowSpan ?? rowSpan,
        }),
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
