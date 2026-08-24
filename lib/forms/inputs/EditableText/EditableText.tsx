import { type PointerEvent, useState } from "react";
import { cn } from "@/utils";
import "./EditableText.css";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "@/buttons";

type EditableTextTypography = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label";

export interface EditableTextProps {
  as?: EditableTextTypography;
  value: string;
  name: string;
  className?: string;
  onSave: (value: string) => void;
  isEditing?: boolean;
  onEditingChange?: (isEditing: boolean) => void;
}

export const EditableText = ({
  as = "p",
  value: initialValue,
  name,
  className,
  onSave,
  isEditing: controlledIsEditing,
  onEditingChange,
}: EditableTextProps) => {
  const [uncontrolledIsEditing, setUncontrolledIsEditing] = useState(false);
  const isControlled = controlledIsEditing !== undefined;
  const isEditing = isControlled ? controlledIsEditing : uncontrolledIsEditing;
  const [value, setValue] = useState(initialValue);
  const isDirty = value !== initialValue;

  const setIsEditing = (value: boolean) => {
    if (!isControlled) setUncontrolledIsEditing(value);
    onEditingChange?.(value);
  };

  const preventInputBlur = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSave = () => {
    setIsEditing(false);

    if (isDirty) {
      onSave(value);
    }
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const typographyClasses = cn(
    as === "p" && "body-base",
    as === "h1" && "heading-1 h-12",
    as === "h2" && "heading-2",
    as === "h3" && "heading-3",
    as === "h4" && "heading-4",
    as === "h5" && "heading-5",
    as === "h6" && "heading-6",
    as === "label" && "label",
  );

  // biome-ignore-start lint:noAutoFocus: Necessary for the mechanics of this component
  return (
    <div className={cn("editable-text", isEditing && "editable-text--editing")}>
      <input
        autoFocus
        className={cn("grow", typographyClasses, className)}
        name={name}
        onBlur={() => {
          if (isEditing) {
            handleSave();
          }
        }}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsEditing(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSave();
          if (event.key === "Escape") {
            handleCancel();
          }
        }}
        readOnly={!isEditing}
        value={value}
      />
      <div className="editable-text-actions">
        <Button
          aria-label="Save edited text"
          asIcon
          className="editable-text-action"
          icon={<CheckIcon />}
          onClick={handleSave}
          onPointerDown={preventInputBlur}
          size="xs"
          variant="ghost"
        />
        <Button
          aria-label="Cancel editing text"
          asIcon
          className="editable-text-action"
          icon={<XIcon />}
          onClick={handleCancel}
          onPointerDown={preventInputBlur}
          size="xs"
          variant="ghost"
        />
      </div>
    </div>
  );
  // biome-ignore-end lint:noAutoFocus: Necessary for the mechanics of this component
};
