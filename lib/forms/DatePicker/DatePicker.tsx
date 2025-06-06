import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/forms";
import { cn } from "@/utils";

interface DatePickerProps {
  onDateSelection: (date: Date) => void;
  initialValue?: Date;
  className?: string;
  size?: "default" | "xs" | "sm" | "lg";
}

export const DatePicker = ({ onDateSelection, initialValue, className, size = "default" }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(initialValue);

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    if (date) {
      onDateSelection(date);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size={size}
          className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground", className)}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toISOString().split("T")[0] : <span>Select a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleSelect} autoFocus />
      </PopoverContent>
    </Popover>
  );
};
