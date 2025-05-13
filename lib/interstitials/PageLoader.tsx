import { Loader2 } from "lucide-react";
import { Interstitial } from "./Interstitial";

interface PageLoaderProps {
  iconComponent?: React.ElementType;
  message?: string;
}

const DefaultIconComponent = () => {
  return <Loader2 className="animate-spin text-info" size={64} data-testid="icon" />;
};

export const PageLoader = ({ iconComponent, message }: PageLoaderProps) => {
  const IconComponent = iconComponent ? iconComponent : DefaultIconComponent;

  return <Interstitial iconComponent={IconComponent} message={message} />;
};
