import { Flex } from "@/layout";
import { Text } from "@/typography";

export const FooterContent = ({ children }: { children?: React.ReactNode }) => (
  <Flex align="center" justify="between">
    <Text size="sm" variant="muted">
      © 2026 Still Forest LLC.
    </Text>
    {children}
  </Flex>
);
