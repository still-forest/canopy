import { Hint } from "@/components";
import { InputError, Label } from "@/forms";
import { Flex } from "@/layout";
import { Text } from "@/typography";
import { cn } from "@/utils";

export interface TextInputProps extends Omit<React.ComponentProps<"input">, "size"> {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  labelClassName?: string;
  labelOrientation?: "top" | "left";
  hint?: string;
  note?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  error?: string;
}

const TextInput = ({
  name,
  type = "text",
  placeholder,
  label,
  labelClassName,
  labelOrientation = "top",
  hint,
  note,
  size = "md",
  className,
  error,
  ...props
}: TextInputProps) => {
  const inputClasses = cn(
    "flex w-full min-w-0 rounded-md border border-input bg-input px-3 py-1 shadow-xs outline-none",
    "transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex ",
    "file:h-7 file:border-0 file:bg-input file:font-medium file:text-foreground file:text-sm",
    "placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "dark:bg-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    size === "xs" && "h-7 text-xs md:text-xs",
    size === "sm" && "h-8 text-sm md:text-xs",
    size === "md" && "h-9 text-base md:text-sm",
    size === "lg" && "h-10 text-lg md:text-base",
    size === "xl" && "h-11 text-xl md:text-lg",
    className,
  );

  return (
    <Flex className="w-full" direction={labelOrientation === "left" ? "row" : "col"} gap="2">
      {(label || hint) && (
        <Flex align="center" direction="row" gap="1">
          {label && (
            <Label
              className={cn(labelOrientation === "left" ? "text-nowrap" : "", labelClassName)}
              htmlFor={name}
              size={size}
            >
              {label}
            </Label>
          )}
          {hint && <Hint content={hint} />}
        </Flex>
      )}
      <input
        aria-label={label || name}
        className={inputClasses}
        data-slot="input"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
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
};

export { TextInput };
