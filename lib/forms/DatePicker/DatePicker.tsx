import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button, InputError } from "@/forms";
import { Flex } from "@/layout";
import { cn } from "@/utils/cn";

interface DatePickerProps {
  onDateSelection: (date: Date) => void;
  initialValue?: Date;
  className?: string;
  size?: "default" | "xs" | "sm" | "lg";
  error?: string;
}

export const DatePicker = ({ onDateSelection, initialValue, className, size = "default", error }: DatePickerProps) => {
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
        <PopoverTrigger asChild>
          <Button
            className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground", className)}
            size={size}
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? date.toISOString().split("T")[0] : <span>Select a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar autoFocus mode="single" onSelect={handleSelect} selected={date} />
        </PopoverContent>
      </Popover>
      {error && <InputError message={error} />}
    </Flex>
  );
};
