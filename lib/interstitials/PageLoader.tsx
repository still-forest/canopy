import { Loader } from "@/components/Loader";
import { cn } from "@/utils";
import { Interstitial, type InterstitialProps } from "./Interstitial";

interface PageLoaderProps extends InterstitialProps {}

const DefaultIconComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return <Loader aria-label="Loading" className="text-info" data-testid="icon" {...props} />;
};

export const PageLoader = ({ iconComponent, message, iconSize = "5xl", iconClassName, ...props }: PageLoaderProps) => {
  const IconComponent = iconComponent ? iconComponent : DefaultIconComponent;

  return (
    <Interstitial
      iconClassName={cn("text-info", iconClassName)}
      iconComponent={IconComponent}
      iconSize={iconSize}
      message={message}
      {...props}
    />
  );
};
