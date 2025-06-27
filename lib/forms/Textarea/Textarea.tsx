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
    <Flex direction="col" gap="2" className="w-full">
      {label && <Label htmlFor={name}>{label}</Label>}
      <BaseTextarea
        placeholder={placeholder}
        id={name}
        name={name}
        aria-label={label || name}
        className={className}
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
