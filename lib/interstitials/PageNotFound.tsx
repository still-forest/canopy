import { CircleChevronLeft, FileQuestion } from "lucide-react";

import { Button } from "@/forms/Button";
import { Flex } from "@/layout/Flex";

import { Interstitial } from "./Interstitial";

interface PageNotFoundProps {
  message?: string;
  backIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  backLabel?: string;
  onBack?: () => void;
}

export const PageNotFound = ({
  onBack,
  message = "404: Not found",
  backIcon = CircleChevronLeft,
  backLabel = "Back",
}: PageNotFoundProps) => {
  const BackIcon = backIcon;

  return (
    <Interstitial iconComponent={FileQuestion} message={message} variant="warning">
      <Flex align="center" className="mt-8" direction="col">
        {onBack && (
          <Button icon={<BackIcon />} onClick={onBack} variant="primary">
            {backLabel}
          </Button>
        )}
      </Flex>
    </Interstitial>
  );
};
