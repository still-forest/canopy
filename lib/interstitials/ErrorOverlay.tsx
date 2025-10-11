import { CircleX } from "lucide-react";
import { Interstitial } from "./Interstitial";

interface ErrorOverlayProps {
  message?: string;
  children?: React.ReactNode;
  fullScreen?: boolean;
}

export const ErrorOverlay = ({
  message = "Something went wrong.",
  children,
  fullScreen = false,
}: ErrorOverlayProps) => {
  return (
    <Interstitial fullScreen={fullScreen} iconComponent={CircleX} message={message} variant="error">
      {children}
    </Interstitial>
  );
};
