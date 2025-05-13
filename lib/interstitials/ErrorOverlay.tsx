import { CircleX } from "lucide-react";
import { Interstitial } from "./Interstitial";

interface ErrorOverlayProps {
  message?: string;
  children?: React.ReactNode;
}

export const ErrorOverlay = ({ message = "Something went wrong.", children }: ErrorOverlayProps) => {
  return (
    <Interstitial variant="error" iconComponent={CircleX} message={message}>
      {children}
    </Interstitial>
  );
};
