import { Loader, type LoaderProps } from "@/components/Loader";
import { Flex } from "@/layout";
import { cn } from "@/utils";
import { Interstitial } from "./Interstitial";

interface PageLoaderProps {
  iconComponent?: React.ElementType;
  message?: string;
  containerClassName?: string;
  iconSize?: LoaderProps["size"];
  fullScreen?: boolean;
  iconClassName?: string;
}

const DefaultIconComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return <Loader className="text-info" data-testid="icon" {...props} />;
};

export const PageLoader = ({
  iconComponent,
  message,
  containerClassName,
  iconSize = "5xl",
  fullScreen = false,
  iconClassName,
}: PageLoaderProps) => {
  const IconComponent = iconComponent ? iconComponent : DefaultIconComponent;

  return (
    <Flex className={cn("w-full h-full", fullScreen && "h-screen", containerClassName)}>
      <Interstitial
        iconClassName={cn("text-info", iconClassName)}
        iconComponent={IconComponent}
        iconSize={iconSize}
        message={message}
      />
    </Flex>
  );
};
