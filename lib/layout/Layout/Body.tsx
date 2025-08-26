import { Container, Flex, type FlexProps } from "@/layout";
import { layoutClasses } from "@/layout/style";
import { cn } from "@/utils";

interface BodyProps extends FlexProps {
  withContainer?: boolean;
}

export const Body = ({ children, className, withContainer = false, ...props }: BodyProps) => {
  const classes = cn("flex-1 grow", layoutClasses, className);

  if (withContainer) {
    return (
      <Container as="main" className={classes} display="block" {...props}>
        {children}
      </Container>
    );
  }

  return (
    <Flex.Item as="main" className={classes} {...props}>
      {children}
    </Flex.Item>
  );
};
