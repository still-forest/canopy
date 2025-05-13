import { Interstitial } from "./Interstitial";

interface ErrorOverlayProps {
  message?: string;
  children?: React.ReactNode;
}

export const ErrorOverlay = ({ message, children }: ErrorOverlayProps) => {
  return (
    <Interstitial variant="error" icon="circle_x" message={message}>
      {children}
    </Interstitial>
  );
};
