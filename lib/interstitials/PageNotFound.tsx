import { FileQuestion, Home } from "lucide-react";

import { Button } from "@/forms";
import { Flex } from "@/layout";

import { Interstitial } from "./Interstitial";

interface PageNotFoundProps {
  message?: string;
  goHome?: () => void;
}

export const PageNotFound = ({ goHome, message = "404: Not found" }: PageNotFoundProps) => {
  return (
    <Interstitial variant="warning" iconComponent={FileQuestion} message={message}>
      <Flex direction="col" align="center" className="mt-8">
        {goHome && (
          <Button variant="primary" icon={<Home />} onClick={goHome}>
            Home
          </Button>
        )}
      </Flex>
    </Interstitial>
  );
};
