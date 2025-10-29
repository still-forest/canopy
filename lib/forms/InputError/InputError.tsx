import { Text } from "@/typography";

interface InputErrorProps {
  id?: string;
  message: string;
}

export const InputError = ({ id, message }: InputErrorProps) => {
  return (
    <Text id={id} size="xs" variant="destructive">
      {message}
    </Text>
  );
};
