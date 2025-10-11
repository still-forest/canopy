import { CircleX } from "lucide-react";
import { Interstitial, type InterstitialProps } from "./Interstitial";

export interface ErrorOverlayProps extends InterstitialProps {}

export const ErrorOverlay = ({ message = "Something went wrong.", children, ...props }: ErrorOverlayProps) => {
  return (
    <Interstitial iconComponent={CircleX} message={message} variant="error" {...props}>
      {children}
    </Interstitial>
  );
};
