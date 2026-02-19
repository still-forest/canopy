import type { ReactNode, RefObject } from "react";
import { cn } from "@/utils";

type TextListProps = React.ComponentProps<"ul"> & {
  position?: "inside" | "outside";
  variant?: "ordered" | "unordered" | "none";
  children: ReactNode;
};
type TextListItemProps = React.ComponentProps<"li"> & {
  asChild?: boolean;
  children: ReactNode;
};

type TextListComponent = React.FC<TextListProps> & {
  Item: React.FC<TextListItemProps>;
};

const TextList: TextListComponent = ({
  children,
  className,
  variant = "unordered",
  position = "outside",
  ref,
  ...props
}: TextListProps) => {
  const classNames = cn(
    {
      "list-decimal": variant === "ordered",
      "list-disc": variant === "unordered",
      "list-none": variant === "none",
    },
    {
      "list-inside": position === "inside",
      "list-outside": position === "outside",
    },
    {
      "ml-4": position === "outside" && variant === "unordered",
      "ml-6": position === "outside" && variant === "ordered",
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
