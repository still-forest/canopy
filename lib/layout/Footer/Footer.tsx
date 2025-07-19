import { Container, type ContainerProps } from "@/layout";

interface FooterProps extends ContainerProps {
  children: React.ReactNode;
}

export const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <Container as="footer" className="bottom-0 mt-auto pb-2" justify="between" {...props}>
      {children}
    </Container>
  );
};
