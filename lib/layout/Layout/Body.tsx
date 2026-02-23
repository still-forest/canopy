import { Flex, type FlexProps } from "@/layout";
import { cn } from "@/utils";

export const Body = ({ children, className, as: _as, ...props }: FlexProps) => {
  const classes = cn("flex-1 grow", className);

  return (
    <Flex.Item as="main" className={classes} {...props}>
      {children}
    </Flex.Item>
  );
};
