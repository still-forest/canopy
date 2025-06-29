import { Text } from "@/typography";

export const InputError = ({ message }: { message: string }) => {
  return (
    <Text variant="destructive" size="xs">
      {message}
    </Text>
  );
};
