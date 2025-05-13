import { InterstitialBase } from "./InterstitialBase";

interface ErrorOverlayProps {
  message?: string;
}

export const ErrorOverlay = ({ message }: ErrorOverlayProps) => {
  return <InterstitialBase icon="circle_x" message={message} />;
};
