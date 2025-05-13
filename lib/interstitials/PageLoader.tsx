import { Loader2 } from "lucide-react";
import { Flex } from "@/layout";
import { Heading } from "@/typography";

interface PageLoaderProps {
  iconComponent?: React.ElementType;
  message?: string;
}

const DefaultIconComponent = () => {
  return <Loader2 className="animate-spin text-info" size={64} />;
};

export const PageLoader = ({ iconComponent, message }: PageLoaderProps) => {
  const IconComponent = iconComponent ? iconComponent : DefaultIconComponent;

  return (
    <Flex align="center" justify="center" className="h-full w-full">
      <Flex direction="col" justify="center">
        <Flex align="center" justify="center" gapX="4" className="my-6">
          <IconComponent />
        </Flex>
        <Flex direction="col" justify="center" className="max-w-[500px]">
          {message ? (
            <Heading level="4" align="center" weight="normal">
              {message}
            </Heading>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};
