import { Container, type ContainerProps } from "@/layout";
import { cn } from "@/utils";

interface HeaderProps extends ContainerProps {
  children: React.ReactNode;
  sticky?: boolean;
}

export const Header = ({ children, sticky = false, className, ...props }: HeaderProps) => {
  return (
    <Container as="header" className={cn("top-0 ", sticky && "z-50 sticky", className)} justify="between" {...props}>
      {children}
    </Container>
  );
};
