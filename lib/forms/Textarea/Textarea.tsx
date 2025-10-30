import { Hint } from "@/components";
import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  name: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  hint?: string;
  note?: string;
  className?: string;
  error?: string;
}

export function Textarea({
  label,
  name,
  note,
  placeholder,
  className,
  error,
  labelClassName,
  hint,
  ...props
}: TextareaProps) {
  return (
    <Flex className="w-full" direction="col" gap="2">
      <Flex align="center" direction="row" gap="1">
        {label && (
          <Label className={labelClassName} htmlFor={name}>
            {label}
          </Label>
        )}
        {hint && <Hint content={hint} />}
      </Flex>
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
