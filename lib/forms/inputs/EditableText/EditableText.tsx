import { type PointerEvent, useState } from "react";
import { cn } from "@/utils";
import "./EditableText.css";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "@/buttons";

interface EditableTextProps {
  value: string;
  name: string;
  className?: string;
  onSave: (value: string) => void;
  isEditing?: boolean;
  onEditingChange?: (isEditing: boolean) => void;
}

export const EditableText = ({
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

  const setIsEditing = (value: boolean) => {
    if (!isControlled) setUncontrolledIsEditing(value);
    onEditingChange?.(value);
  };

  const preventInputBlur = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSave = () => {
    onSave(value);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  // biome-ignore-start lint:noAutoFocus: Necessary for the mechanics of this component
  return (
    <div className="editable-text">
      {isEditing ? (
        <div className="editable-text-input-group">
          <input
            autoFocus
            className={cn("grow", className)}
            name={name}
            onBlur={handleSave}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSave();
              if (event.key === "Escape") {
                handleCancel();
              }
            }}
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
      ) : (
        <button className={cn("editable-text-button", className)} onClick={() => setIsEditing(true)} type="button">
          {value}
        </button>
      )}
    </div>
  );
  // biome-ignore-end lint:noAutoFocus: Necessary for the mechanics of this component
};
