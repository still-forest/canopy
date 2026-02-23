import type { ReactNode, RefObject } from "react";
import { cn } from "@/utils/cn";
import "./TextList.css";

type TextListProps = React.ComponentProps<"ul"> & {
  variant?: "ordered" | "unordered" | "none";
  position?: "inside" | "outside";
  children: ReactNode;
};
type TextListItemProps = React.ComponentProps<"li"> & {
  children: ReactNode;
};

type TextListComponent = React.FC<TextListProps> & {
  Item: React.FC<TextListItemProps>;
};

const TextList: TextListComponent = ({
  children,
  className,
  variant = "unordered",
  position,
  ref,
  ...props
}: TextListProps) => {
  const classNames = cn(
    "textlist",
    {
      "textlist-ordered": variant === "ordered",
      "textlist-none": variant === "none",
      "textlist--inside": position === "inside",
      "textlist--outside": position === "outside",
    },
    className,
  );

  if (variant === "ordered") {
    return (
      <ol className={classNames} ref={ref as RefObject<HTMLOListElement>} {...props}>
        {children}
      </ol>
    );
  }

  return (
    <ul className={classNames} {...props}>
      {children}
    </ul>
  );
};

const TextListItem = ({ children, ...props }: TextListItemProps) => {
  return <li {...props}>{children}</li>;
};

TextList.Item = TextListItem;

export { TextList };
