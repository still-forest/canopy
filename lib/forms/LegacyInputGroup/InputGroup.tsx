import { Label } from "@/forms";
import { Flex } from "@/layout";

interface InputGroupProps {
  label?: string;
  labelFor?: string;
  className?: string;
  labelClassName?: string;
  children: React.ReactNode;
}

export const LegacyInputGroup = ({
  label,
  labelFor,
  className = "",
  labelClassName = "",
  children,
}: InputGroupProps) => (
  <Flex direction="col" gap="2">
    {label && (
      <Label className={labelClassName} htmlFor={labelFor}>
        {label}
      </Label>
    )}
    <Flex className={`rounded-md border border-input bg-card p-2 shadow-xs ${className}`} gapY="1">
      {children}
    </Flex>
  </Flex>
);
