import { Interstitial } from "./Interstitial";

interface ErrorOverlayProps {
  message?: string;
}

export const ErrorOverlay = ({ message }: ErrorOverlayProps) => {
  return <Interstitial icon="circle_x" message={message} />;
};
