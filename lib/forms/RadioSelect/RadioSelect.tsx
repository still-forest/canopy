import { Hint } from "@/components";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputError, Label } from "@/forms";
import { Flex, Grid } from "@/layout";
import type { Gap, GridCols } from "@/types";

interface Option {
  value: string;
  label: string;
  hint?: string;
}

interface RadioSelectProps {
  cols?: GridCols;
  gap?: Gap;
  name: string;
  label?: string;
  labelClassName?: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  error?: string;
}

export const RadioSelect = ({
  cols = "1",
  gap = "2",
  label,
  name,
  options,
  value,
  size = "md",
  onChange,
  error,
  labelClassName,
}: RadioSelectProps) => {
  const radioSizeClasses = size === "lg" ? "size-5" : size === "md" ? "size-4" : "size-3";
  return (
    <Flex direction="col" gap="2">
      {label && (
        <Label className={labelClassName} htmlFor={name}>
          {label}
        </Label>
      )}
      <Flex
        className="flex flex-col gap-4 px-4 py-2 rounded-md border border-input bg-background p-2 shadow-xs"
        gapY="1"
      >
        <RadioGroup className="w-full" name={name} onValueChange={onChange} value={value}>
          <Grid cols={cols} gap={gap}>
            {options.map((option, i) => (
              <Flex align="center" gap="2" justify="start" key={i}>
                <RadioGroupItem className={radioSizeClasses} id={option.value} value={option.value} />
                <Label className={labelClassName} htmlFor={option.value} size={size}>
                  {option.label}
                </Label>
                {option.hint && <Hint content={option.hint} />}
              </Flex>
            ))}
          </Grid>
        </RadioGroup>
        {error && <InputError message={error} />}
      </Flex>
    </Flex>
  );
};
