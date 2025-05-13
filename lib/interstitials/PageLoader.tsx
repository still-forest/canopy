import { Loader2 } from "lucide-react";

import { Flex, Heading } from "@/primitives";

interface Props {
  message?: string;
}

export const PageLoader = ({ message }: Props) => {
  return (
    <Flex align="center" justify="center" className="h-full w-full">
      <Flex direction="col" justify="center">
        <Flex align="center" justify="center" gapX="4" className="my-6">
          <Loader2 className="animate-spin text-info" size={64} />
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
