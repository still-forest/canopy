import { Box, Flex, Heading, Text } from "@/main";

const Header = () => (
  <Box as="header" className="border-b">
    <Flex direction="row" align="center" justify="between" className="container mx-auto h-14 px-4">
      <Flex direction="row" align="center" gap="6">
        <Flex direction="row" align="center" gap="2">
          <Heading level="1" size="lg">
            Canopy
          </Heading>
        </Flex>
        <Flex as="nav" direction="row" gap="4">
          <Text weight="medium">Dashboard</Text>
          <Text variant="muted">Analytics</Text>
          <Text variant="muted">Settings</Text>
        </Flex>
      </Flex>

      <Flex direction="row" align="center" gap="4">
        <Flex direction="row" align="center" gap="1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Some circle</title>
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <Text size="sm">Notifications</Text>
        </Flex>
        <Box className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
          <Text size="sm" weight="medium">
            JD
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Box>
);

export { Header };
