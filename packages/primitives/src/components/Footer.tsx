import { Box, Flex, Text } from "@/main";

const Footer = () => (
  <Box as="footer" className="mt-auto border-t">
    <Flex direction="row" align="center" justify="between" className="container mx-auto h-14 px-4">
      <Text size="sm" variant="muted">
        © 2025 John Szymanowski. All rights reserved.
      </Text>
      <Flex direction="row" gap="4">
        <Text size="sm" variant="muted">
          Privacy
        </Text>
        <Text size="sm" variant="muted">
          Terms
        </Text>
        <Text size="sm" variant="muted">
          Contact
        </Text>
      </Flex>
    </Flex>
  </Box>
);

export { Footer };
