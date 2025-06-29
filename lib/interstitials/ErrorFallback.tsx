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
      <Flex align="center" className="mt-8" direction="col">
        <Box className="mb-8 p-4" variant="muted" width="full">
          <Code align="center" size="xs" variant="inherit">
            {error.message || "Unknown error occurred"}
          </Code>
        </Box>
        <Button icon={<RotateCcw />} onClick={onRetry} variant="primary">
          Reload
        </Button>
      </Flex>
    </ErrorOverlay>
  );
};
