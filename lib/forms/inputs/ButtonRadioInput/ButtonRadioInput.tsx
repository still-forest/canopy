import { type ComponentProps, type KeyboardEvent, type ReactElement, useRef } from "react";
import { Button, ButtonGroup } from "@/buttons";
import { SelectInput, type SelectOption } from "@/forms/inputs";
import "./ButtonRadioInput.css";

import { useIsMobile } from "@/hooks/use-mobile";

interface Option {
  label?: string;
  value: string;
  icon?: ReactElement<ComponentProps<"svg">>;
}

interface ButtonRadioInputProps {
  label?: string;
  name: string;
  options: Option[];
  secondaryOptions?: SelectOption[];
  value?: string | null;
  onChange: (value?: string | null) => void;
}

export const ButtonRadioInput = ({
  options,
  secondaryOptions,
  value,
  onChange,
  label,
  ...props
}: ButtonRadioInputProps) => {
  const hasSecondaryOptions = secondaryOptions && secondaryOptions.length > 0;
  const isMobile = useIsMobile();

  // Refs for managing focus
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  if (isMobile) {
    const mobileOptions = [...options, ...(secondaryOptions || [])].map((option) => ({
      label: option.label ?? "",
      value: option.value,
    }));
    return <SelectInput onChange={onChange} options={mobileOptions} value={value} {...props} />;
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, currentValue: string) => {
    const currentIndex = options.findIndex((opt) => opt.value === currentValue);
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        newIndex = (currentIndex + 1) % options.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        newIndex = currentIndex <= 0 ? options.length - 1 : currentIndex - 1;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = options.length - 1;
        break;
      case " ":
      case "Enter":
        e.preventDefault();
        onChange(currentValue);
        return;
      default:
        return;
    }

    // Focus and select the new option
    const newOption = options[newIndex];
    const buttonRef = buttonRefs.current.get(newOption.value);
    if (buttonRef) {
      buttonRef.focus();
      onChange(newOption.value);
    }
  };

  return (
    <ButtonGroup aria-label={label} className="button-select-input" role="radiogroup" {...props}>
      {options.map((option, index) => {
        const isSelected = option.value === value;
        const isFirstOption = index === 0;
        const isPrimarySelected = options.some((o) => o.value === value);
        const shouldBeInTabOrder = isSelected || (!isPrimarySelected && isFirstOption);

        return (
          <Button
            aria-checked={isSelected}
            icon={option.icon}
            key={option.value}
            label={option.label}
            onClick={() => onChange(option.value)}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
            outline={!isSelected}
            ref={(el) => {
              if (el) {
                buttonRefs.current.set(option.value, el);
              } else {
                buttonRefs.current.delete(option.value);
              }
            }}
            role="radio"
            tabIndex={shouldBeInTabOrder ? 0 : -1}
          />
        );
      })}
      {hasSecondaryOptions && (
        <SelectInput
          className="w-[150px] btn btn-primary"
          name="secondary-options"
          onChange={(value) => onChange(value)}
          options={secondaryOptions}
          placeholder="More options..."
          value={value}
        />
      )}
    </ButtonGroup>
  );
};
