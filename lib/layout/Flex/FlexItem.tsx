import { cn } from "@/utils";

type FlexType = "1" | "auto" | "initial" | "none";

interface FlexItemProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType<any>;
  flex?: FlexType; // shorthand for flex-grow, flex-shrink and flex-basis combined
}

const FlexItem = ({ flex, className, as, children, ...props }: FlexItemProps) => {
  const Component = as || "div";
  return (
    <Component
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
    </Component>
  );
};

export { FlexItem };
