import { CircleX, RotateCcw } from "lucide-react";

import { Button } from "@/forms";
import { Box, Flex } from "@/layout";
import { Text } from "@/typography";

import { Interstitial } from "./Interstitial";

interface ErrorFallbackProps {
  error: Error;
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <Interstitial variant="error" iconComponent={CircleX} message="Oops! Something went wrong.">
      <Flex direction="col" align="center" className="mt-8">
        <Box variant="muted" width="full" className="mb-8 p-4">
          <Text variant="inherit" family="mono" align="center" size="xs">
            {error.message}
          </Text>
        </Box>
        <Button variant="primary" icon={<RotateCcw />} onClick={handleRetry}>
          Reload
        </Button>
      </Flex>
    </Interstitial>
  );
};
