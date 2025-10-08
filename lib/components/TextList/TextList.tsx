import { Slot as SlotPrimitive } from "@radix-ui/react-slot";
import type { ReactNode } from "react";
import type { TypographyVariant } from "@/types";
import { cn } from "@/utils";

type TextListProps = React.ComponentProps<"ul"> & {
  type?: "ordered" | "unordered" | "none";
  position?: "inside" | "outside";
  variant?: TypographyVariant;
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
  position = "outside",
  type = "unordered",
  variant = "muted",
  ...props
}: TextListProps) => {
  return (
    <ul
      className={cn(
        {
          "list-decimal": type === "ordered",
          "list-disc": type === "unordered",
          "list-none": type === "none",
        },
        {
          "list-inside": position === "inside",
          "list-outside": position === "outside",
        },
        {
          "ml-4": position === "outside" && type === "unordered",
          "ml-6": position === "outside" && type === "ordered",
        },
        {
          "marker:text-foreground": variant === "default",
          "marker:text-inherit": variant === "inherit",
          "marker:text-muted": variant === "muted",
          "marker:text-accent": variant === "accent",
          // Action colors
          "marker:text-primary": variant === "primary",
          "marker:text-secondary": variant === "secondary",
          // Brand color
          "marker:text-brand": variant === "brand",
          // Accent colors (rich color variants)
          "marker:text-info": variant === "info",
          "marker:text-warning": variant === "warning",
          "marker:text-destructive": variant === "destructive",
          "marker:text-success": variant === "success",
        },
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

  return (
    <Comp role="listitem" {...props}>
      {children}
    </Comp>
  );
};

TextList.Item = TextListItem;

export { TextList };
