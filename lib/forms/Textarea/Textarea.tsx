import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  name: string;
  label?: string;
  placeholder?: string;
  note?: string;
  className?: string;
  error?: string;
}

export function Textarea({ label, name, note, placeholder, className, error, ...props }: TextareaProps) {
  return (
    <Flex className="w-full" direction="col" gap="2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <BaseTextarea
        aria-label={label || name}
        className={className}
        id={name}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {note && (
        <Text size="sm" variant="muted">
          {note}
        </Text>
      )}
      {error && <InputError message={error} />}
    </Flex>
  );
}
