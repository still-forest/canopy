import { FileQuestion, Home } from "lucide-react";

import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Code } from "@/typography";

import { Interstitial } from "./Interstitial";

interface NotFoundErrorPageProps {
  goHome?: () => void;
}

export const NotFoundErrorPage = ({ goHome }: NotFoundErrorPageProps) => {
  return (
    <Interstitial variant="warning" iconComponent={FileQuestion} message="404: Synergy Not Found.">
      <Flex direction="col" align="center" className="mt-8">
        <Box variant="muted" className="mb-8 w-full p-4">
          <Code variant="inherit" align="center" size="xs">
            Please realign strategic vision, optimize bandwidth, and ping stakeholders for a paradigm shift.
          </Code>
        </Box>
        {goHome && (
          <Button variant="primary" icon={<Home />} onClick={goHome}>
            Home
          </Button>
        )}
      </Flex>
    </Interstitial>
  );
};
