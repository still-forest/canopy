import { Home } from "lucide-react";

import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Text } from "@/typography";

import { Interstitial } from "./Interstitial";

interface NotFoundErrorPageProps {
  onClick?: () => void;
}

export const NotFoundErrorPage = ({ onClick }: NotFoundErrorPageProps) => {
  return (
    <Interstitial icon="file_question" message="404: Synergy Not Found.">
      <Flex direction="col" align="center" className="mt-8">
        <Box variant="muted" className="mb-8 w-full p-4">
          <Text variant="inherit" family="mono" align="center" size="xs">
            Please realign strategic vision, optimize bandwidth, and ping stakeholders for a paradigm shift.
          </Text>
        </Box>
        <Button variant="primary" icon={<Home />} onClick={onClick}>
          Home
        </Button>
      </Flex>
    </Interstitial>
  );
};
