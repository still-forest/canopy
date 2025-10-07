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
}

const DefaultIconComponent = ({ iconSize = "8xl" }: { iconSize?: LoaderProps["size"] }) => {
  return <Loader className="text-info" data-testid="icon" size={iconSize} />;
};

export const PageLoader = ({
  iconComponent,
  message,
  containerClassName,
  iconSize = "5xl",
  fullScreen = false,
}: PageLoaderProps) => {
  const IconComponent = iconComponent ? iconComponent : DefaultIconComponent;

  return (
    <Flex className={cn("w-full h-full", fullScreen && "h-screen", containerClassName)}>
      <Interstitial iconComponent={IconComponent} iconSize={iconSize} message={message} />
    </Flex>
  );
};
