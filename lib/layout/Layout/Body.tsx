import { Container, Flex, type FlexProps } from "@/layout";
import { layoutClasses } from "@/layout/style";
import { cn } from "@/utils";

interface BodyProps extends FlexProps {
  withContainer?: boolean;
}

export const Body = ({ children, className, withContainer = false, ...props }: BodyProps) => {
  const BodyComponent = withContainer ? Container : Flex.Item;

  return (
    <BodyComponent as="section" className={cn("flex-1 grow", layoutClasses, withContainer && "mx-auto", className)} {...props}>
      {children}
    </BodyComponent>
  );
};
