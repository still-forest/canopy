import { Loader } from "@/components/Loader";
import { Interstitial, type InterstitialProps } from "./Interstitial";

const DefaultIconComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return <Loader className="text-info" {...props} />;
};

export const LoadingPage = ({ message, icon, ...props }: InterstitialProps) => {
  const Icon = icon ? icon : <DefaultIconComponent />;

  return <Interstitial headline={message} icon={Icon} variant="info" {...props} />;
};
