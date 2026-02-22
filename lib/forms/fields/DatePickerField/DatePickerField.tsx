import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/buttons";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { InputError } from "@/forms";
import { Flex } from "@/layout";
import { cn } from "@/utils";

interface DatePickerFieldProps {
  onDateSelection: (date: Date) => void;
  initialValue?: Date;
  className?: string;
  size?: "default" | "xs" | "sm" | "lg";
  error?: string;
}

export const DatePickerField = ({
  onDateSelection,
  initialValue,
  className,
  size = "default",
  error,
}: DatePickerFieldProps) => {
  const [date, setDate] = useState<Date | undefined>(initialValue);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      onDateSelection(date);
    }
  };

  return (
    <Flex direction="col" gap="2">
      <Popover>
        <PopoverTrigger
          render={
            <Button
              className={cn(
                "w-[280px] justify-start text-left font-normal bg-background",
                !date && "text-muted-foreground",
                className,
              )}
              size={size}
              variant="outline"
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
      {error && <InputError message={error} />}
    </Flex>
  );
};
