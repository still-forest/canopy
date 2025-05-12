import { Badge } from "@src/components";
import { Box, Flex, Text } from "@/main";

interface Props {
  icon: string;
  title: string;
  time: string;
  badge?: {
    text: string;
    variant: "default" | "primary" | "outline";
  };
}

const ActivityItem = ({ icon, title, time, badge }: Props) => (
  <Flex direction="row" align="center" justify="between" className="border-b p-4 last:border-b-0">
    <Flex direction="row" align="center" gap="3">
      <Box className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
        <Text size="sm">{icon}</Text>
      </Box>
      <Box>
        <Text weight="medium">{title}</Text>
        <Text size="sm" variant="muted">
          {time}
        </Text>
      </Box>
    </Flex>

    {badge && <Badge variant={badge.variant}>{badge.text}</Badge>}
  </Flex>
);

export { ActivityItem };
