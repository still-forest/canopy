import { CircleX } from "lucide-react";
import { Interstitial, type InterstitialProps } from "./Interstitial";

export interface ErrorPageProps extends InterstitialProps {}

export const ErrorPage = ({ headline = "Something went wrong", message, children, ...props }: ErrorPageProps) => {
  return (
    <Interstitial headline={headline} iconComponent={CircleX} message={message} variant="error" {...props}>
      {children}
    </Interstitial>
  );
};
