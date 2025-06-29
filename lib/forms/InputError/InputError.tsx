import { Text } from "@/typography";

export const InputError = ({ message }: { message: string }) => {
  return (
    <Text size="xs" variant="destructive">
      {message}
    </Text>
  );
};
