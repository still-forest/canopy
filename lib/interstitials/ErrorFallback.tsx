import { RotateCcw } from "lucide-react";

import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Code } from "@/typography";

import { ErrorOverlay } from "./ErrorOverlay";

interface ErrorFallbackProps {
  error: Error;
  onRetry?: () => void;
}

const defaultOnRetry = () => {
  try {
    window.location.reload();
  } catch {
    // JSDOM doesn’t support full navigation—no-op in tests
    console.warn("Page reload prevented in test environment");
  }
};

export const ErrorFallback = ({ error, onRetry = defaultOnRetry }: ErrorFallbackProps) => {
  return (
    <ErrorOverlay>
      <Flex direction="col" align="center" className="mt-8">
        <Box variant="muted" width="full" className="mb-8 p-4">
          <Code variant="inherit" align="center" size="xs">
            {error.message || "Unknown error occurred"}
          </Code>
        </Box>
        <Button variant="primary" icon={<RotateCcw />} onClick={onRetry}>
          Reload
        </Button>
      </Flex>
    </ErrorOverlay>
  );
};
