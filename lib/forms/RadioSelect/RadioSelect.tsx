import { Hint } from "@/components";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputError, Label, LegacyInputGroup } from "@/forms";
import { Flex, Grid } from "@/layout";
import type { GridCols } from "@/types";

interface Option {
  value: string;
  label: string;
  hint?: string;
}

interface RadioSelectProps {
  cols?: GridCols;
  name: string;
  label?: string;
  labelClassName?: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
  error?: string;
}

export const RadioSelect = ({
  cols = "1",
  label,
  name,
  options,
  value,
  onChange,
  error,
  labelClassName,
}: RadioSelectProps) => {
  return (
    <LegacyInputGroup className="flex flex-col gap-4 px-4 py-2" label={label} labelFor={name}>
      <RadioGroup className="w-full" name={name} onValueChange={onChange} value={value}>
        <Grid cols={cols} gap="2">
          {options.map((option, i) => (
            <Flex align="center" gap="2" justify="start" key={i}>
              <RadioGroupItem id={option.value} value={option.value} />
              <Label className={labelClassName} htmlFor={option.value}>
                {option.label}
              </Label>
              {option.hint && <Hint content={option.hint} />}
            </Flex>
          ))}
        </Grid>
      </RadioGroup>
      {error && <InputError message={error} />}
    </LegacyInputGroup>
  );
};
