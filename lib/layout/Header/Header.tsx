import { Container, type ContainerProps } from "@/layout";
import { cn } from "@/utils";

interface HeaderProps extends ContainerProps {
  children: React.ReactNode;
  sticky?: boolean;
}

export const Header = ({ children, sticky = true, className, ...props }: HeaderProps) => {
  return (
    <Container
      as="header"
      className={cn("sticky top-0 z-50 flex items-center justify-between", sticky && "sticky", className)}
      {...props}
    >
      {children}
    </Container>
  );
};
