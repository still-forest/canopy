import type { ReactNode } from "react";
import {
  InputGroup as BaseInputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export type InputGroupProps = React.ComponentProps<typeof BaseInputGroup> & {
  children: ReactNode;
};
type InputGroupInputProps = React.ComponentProps<typeof InputGroupInput>;
type InputGroupAddonProps = React.ComponentProps<typeof InputGroupAddon>;
type InputGroupButtonProps = React.ComponentProps<typeof InputGroupButton>;
type InputGroupTextProps = React.ComponentProps<typeof InputGroupText>;
type InputGroupTextareaProps = React.ComponentProps<typeof InputGroupTextarea>;

type InputGroupComponent = React.FC<InputGroupProps> & {
  Input: React.FC<InputGroupInputProps>;
  Addon: React.FC<InputGroupAddonProps>;
  Button: React.FC<InputGroupButtonProps>;
  Text: React.FC<InputGroupTextProps>;
  Textarea: React.FC<InputGroupTextareaProps>;
};

const InputGroup: InputGroupComponent = ({ children, ...props }: InputGroupProps) => {
  return <BaseInputGroup {...props}>{children}</BaseInputGroup>;
};

InputGroup.Input = InputGroupInput;
InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;
InputGroup.Text = InputGroupText;
InputGroup.Textarea = InputGroupTextarea;

export { InputGroup };
