import { cn } from "@/utils";

type FlexType = "1" | "auto" | "initial" | "none";

interface FlexItemProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  flex?: FlexType; // shorthand for flex-grow, flex-shrink and flex-basis combined
}

const FlexItem = ({ flex, className, children, ...props }: FlexItemProps) => (
  <div
    className={cn(
      {
        "flex-1": flex === "1",
        "flex-auto": flex === "auto",
        "flex-initial": flex === "initial",
        "flex-none": flex === "none",
      },
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export { FlexItem };
