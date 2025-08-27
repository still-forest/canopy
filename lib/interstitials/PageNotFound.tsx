import { FileQuestion, Home } from "lucide-react";

import { Button } from "@/forms/Button";
import { Flex } from "@/layout/Flex";

import { Interstitial } from "./Interstitial";

interface PageNotFoundProps {
  message?: string;
  goHome?: () => void;
}

export const PageNotFound = ({ goHome, message = "404: Not found" }: PageNotFoundProps) => {
  return (
    <Interstitial iconComponent={FileQuestion} message={message} variant="warning">
      <Flex align="center" className="mt-8" direction="col">
        {goHome && (
          <Button icon={<Home />} onClick={goHome} variant="primary">
            Home
          </Button>
        )}
      </Flex>
    </Interstitial>
  );
};
