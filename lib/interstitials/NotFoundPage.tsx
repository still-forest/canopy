import { CircleChevronLeft, FileQuestion } from "lucide-react";

import { Button } from "@/forms/buttons/Button";
import { Flex } from "@/layout/Flex";

import { Interstitial, type InterstitialProps } from "./Interstitial";

interface NotFoundPageProps extends InterstitialProps {
  backIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  backLabel?: string;
  onBack?: () => void;
}

export const NotFoundPage = ({
  onBack,
  headline = "Page not found",
  message = "The page you are looking for does not exist.",
  backIcon = CircleChevronLeft,
  backLabel = "Back",
  ...props
}: NotFoundPageProps) => {
  const BackIcon = backIcon;

  return (
    <Interstitial headline={headline} iconComponent={FileQuestion} message={message} variant="warning" {...props}>
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
