import { RotateCcw } from "lucide-react";

import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Code } from "@/typography";

import { ErrorOverlay } from "./ErrorOverlay";

interface ErrorFallbackProps {
  error: Error;
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <ErrorOverlay message="Oops! Something went wrong.">
      <Flex direction="col" align="center" className="mt-8">
        <Box variant="muted" width="full" className="mb-8 p-4">
          <Code variant="inherit" align="center" size="xs">
            {error.message}
          </Code>
        </Box>
        <Button variant="primary" icon={<RotateCcw />} onClick={handleRetry}>
          Reload
        </Button>
      </Flex>
    </ErrorOverlay>
  );
};
