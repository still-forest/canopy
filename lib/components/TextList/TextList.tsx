import { Slot as SlotPrimitive } from "radix-ui";
import type { ReactNode } from "react";
import { cn } from "@/utils";

type TextListProps = React.ComponentProps<"ul"> & {
  type?: "ordered" | "unordered" | "none";
  children: ReactNode;
};
type TextListItemProps = React.ComponentProps<"li"> & {
  asChild?: boolean;
  children: ReactNode;
};

type TextListComponent = React.FC<TextListProps> & {
  Item: React.FC<TextListItemProps>;
};

const TextList: TextListComponent = ({ children, className, type = "unordered", ...props }: TextListProps) => {
  return (
    <ul
      className={cn(
        {
          "list-decimal": type === "ordered",
          "list-disc": type === "unordered",
          "list-none": type === "none",
        },
        "list-inside",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

const TextListItem = ({ children, asChild, ...props }: TextListItemProps) => {
  const Comp = asChild ? SlotPrimitive.Slot : "li";

  return <Comp {...props}>{children}</Comp>;
};

TextList.Item = TextListItem;

export { TextList };
