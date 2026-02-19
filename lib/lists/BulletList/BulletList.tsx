import type { ComponentProps } from "react";
import { Text } from "@/typography";
import { cn } from "@/utils";

type BulletListProps = ComponentProps<"ul">;
type BulletListItemProps = ComponentProps<typeof Text>;

type BulletListComponent = React.FC<BulletListProps> & {
  Item: React.FC<BulletListItemProps>;
};

const BulletList: BulletListComponent = ({ children, className, ...props }: BulletListProps) => {
  return (
    <ul className={cn("list-disc flex flex-col gap-2 ml-4", className)} {...props}>
      {children}
    </ul>
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
