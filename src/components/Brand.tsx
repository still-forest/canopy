import { Trees } from "lucide-react";
import { Flex } from "@/layout";
import { Heading } from "@/typography";

export const Brand = () => (
  <Flex align="center" className="gap-2">
    <Flex align="center" className="aspect-square size-8 rounded-lg bg-brand text-sidebar" justify="center">
      <Trees className="size-6" />
    </Flex>
    <Heading className="ml-2" family="brand" level="1">
      Canopy
    </Heading>
  </Flex>
);
