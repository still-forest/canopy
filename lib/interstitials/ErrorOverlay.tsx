import { CircleX } from "lucide-react";
import { Interstitial, type InterstitialProps } from "./Interstitial";

export interface ErrorOverlayProps extends InterstitialProps {}

export const ErrorOverlay = ({ headline = "Something went wrong", message, children, ...props }: ErrorOverlayProps) => {
  return (
    <Interstitial headline={headline} iconComponent={CircleX} message={message} variant="error" {...props}>
      {children}
    </Interstitial>
  );
};
