import { Label } from "@/forms";
import { Flex } from "@/layout";

interface InputGroupProps {
  label?: string;
  labelFor?: string;
  className?: string;
  labelClassName?: string;
  children: React.ReactNode;
}

export const InputGroup = ({ label, labelFor, className = "", labelClassName = "", children }: InputGroupProps) => (
  <Flex direction="col" gap="2">
    {label && (
      <Label htmlFor={labelFor} className={labelClassName}>
        {label}
      </Label>
    )}
    <Flex gapY="1" className={`border-input bg-card rounded-md border p-2 shadow-xs ${className}`}>
      {children}
    </Flex>
  </Flex>
);
