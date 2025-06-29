import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputError, InputGroup, Label } from "@/forms";
import { Flex, Grid } from "@/layout";

interface Option {
  value: string;
  label: string;
}

interface RadioSelectProps {
  name: string;
  label?: string;
  value?: string;
  options: Option[];
  onChange?: (value: string) => void;
  error?: string;
}

const RadioSelect = ({ label, name, options, value, onChange, error }: RadioSelectProps) => {
  return (
    <InputGroup label={label} labelFor={name} className="flex flex-col gap-4 px-2 py-1">
      <RadioGroup name={name} value={value} onValueChange={onChange} className="w-full">
        <Grid cols="2">
          {options.map((option, i) => (
            <Flex align="center" justify="start" gap="2" key={i}>
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value}>{option.label}</Label>
            </Flex>
          ))}
        </Grid>
      </RadioGroup>
      {error && <InputError message={error} />}
    </InputGroup>
  );
};

export { RadioSelect };
