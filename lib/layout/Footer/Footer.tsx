import { Container, type ContainerProps } from "@/layout";
import { cn } from "@/utils";

interface FooterProps extends ContainerProps {
  children: React.ReactNode;
}

export const Footer = ({ children, className, ...props }: FooterProps) => {
  return (
    <Container as="footer" className={cn("bottom-0 mt-auto pb-2", className)} justify="between" {...props}>
      {children}
    </Container>
  );
};
