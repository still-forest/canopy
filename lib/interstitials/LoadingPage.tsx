import { Loader } from "@/components/Loader";
import { cn } from "@/utils";
import { Interstitial, type InterstitialProps } from "./Interstitial";

const DefaultIconComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return <Loader className="text-info" data-testid="icon" {...props} />;
};

export const LoadingPage = ({
  iconComponent,
  message,
  iconSize = "5xl",
  iconClassName,
  ...props
}: InterstitialProps) => {
  const IconComponent = iconComponent ? iconComponent : DefaultIconComponent;

  return (
    <Interstitial
      headline={message}
      headlineLevel="4"
      headlineWeight="normal"
      iconClassName={cn("text-info", iconClassName)}
      iconComponent={IconComponent}
      iconSize={iconSize}
      {...props}
    />
  );
};
