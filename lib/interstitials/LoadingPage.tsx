import { Loader } from "@/components/Loader";
import { cn } from "@/utils/cn";
import { Interstitial, type InterstitialProps } from "./Interstitial";

const DefaultIconComponent = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return <Loader className={cn("text-info size-12", className)} {...props} />;
};

export const LoadingPage = ({ message, icon, ...props }: InterstitialProps) => {
  const Icon = icon ? icon : <DefaultIconComponent />;

  return (
    <Interstitial
      headline={message}
      headlineClassName="text-xl font-normal mt-4"
      icon={Icon}
      variant="info"
      {...props}
    />
  );
};
