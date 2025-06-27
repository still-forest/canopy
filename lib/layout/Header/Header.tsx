import { Container, Flex } from "@/layout";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Flex justify="between" align="center">
        { children }
      </Flex>
    </Container>
  );
};
