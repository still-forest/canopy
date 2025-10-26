import { cn, Flex, Text } from "@still-forest/canopy";
import type { ComponentProps } from "react";

type BulletListProps = ComponentProps<typeof Flex>;
type BulletListItemProps = ComponentProps<typeof Text>;

type BulletListComponent = React.FC<BulletListProps> & {
  Item: React.FC<BulletListItemProps>;
};

const BulletList: BulletListComponent = ({ children, className, ...props }: BulletListProps) => {
  return (
    <Flex as="ul" className={cn("list-disc gap-2 ml-4", className)} direction="col" {...props}>
      {children}
    </Flex>
  );
};

const BulletListItem = ({ children, ...props }: BulletListItemProps) => {
  return (
    <Text as="li" {...props}>
      {children}
    </Text>
  );
};

BulletList.Item = BulletListItem;

export { BulletList };
