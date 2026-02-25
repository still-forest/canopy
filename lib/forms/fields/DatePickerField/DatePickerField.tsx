import { Calendar as CalendarIcon } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/buttons";
import { Hint } from "@/components";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Field } from "@/forms";
import type { ButtonSize } from "@/types";
import { cn } from "@/utils";

interface DatePickerFieldProps {
  onDateSelection: (date: Date) => void;
  initialValue?: Date;
  className?: string;
  size?: ButtonSize;
  id?: string;
  name?: string;
  label?: string;
  hint?: string;
  note?: string;
  error?: string;
}

export const DatePickerField = ({
  onDateSelection,
  initialValue,
  className,
  size,
  error,
  id,
  name,
  label,
  hint,
  note,
}: DatePickerFieldProps) => {
  const [date, setDate] = useState<Date | undefined>(initialValue);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      onDateSelection(date);
    }
  };

  const defaultId = useId();
  const inputId = id ?? name ?? defaultId;

  const isInvalid = !!error;

  return (
    <Field data-invalid={isInvalid}>
      {label && (
        <Field.LabelGroup>
          <Field.Label htmlFor={inputId}>{label}</Field.Label>
          {hint && <Hint content={hint} />}
        </Field.LabelGroup>
      )}
      <Popover>
        <PopoverTrigger
          render={
            <Button
              aria-describedby={inputId}
              className={cn(
                "w-[280px] justify-start text-left font-normal bg-background",
                !date && "text-muted-foreground",
                className,
              )}
              outline
              size={size}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toISOString().split("T")[0] : <span>Select a date</span>}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0">
          <Calendar autoFocus mode="single" onSelect={handleSelect} selected={date} />
        </PopoverContent>
      </Popover>
      {note && <Field.Description>{note}</Field.Description>}
      {error && <Field.Error>{error}</Field.Error>}
    </Field>
  );
};
