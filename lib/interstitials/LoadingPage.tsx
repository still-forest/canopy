import { Loader } from "@/components/Loader";
import { Interstitial, type InterstitialProps } from "./Interstitial";

const DefaultIconComponent = () => {
  return <Loader className="text-info size-12" />;
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
