import type { ReactNode } from "react";
import {
  InputGroup as BaseInputGroup,
  InputGroupAddon as BaseInputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { Button, type ButtonProps } from "@/forms/Button";
import { Input, type InputProps } from "@/forms/Input";
import { Textarea, type TextareaProps } from "@/main";
import { cn } from "@/utils";

export type InputGroupProps = React.ComponentProps<typeof BaseInputGroup> & {
  children: ReactNode;
};
type InputGroupTextProps = React.ComponentProps<typeof InputGroupText>;
type InputGroupTextareaProps = React.ComponentProps<typeof InputGroupTextarea>;

type InputGroupComponent = React.FC<InputGroupProps> & {
  Input: React.FC<InputProps>;
  Addon: React.FC<InputGroupAddonProps>;
  Button: React.FC<ButtonProps>;
  Text: React.FC<InputGroupTextProps>;
  Textarea: React.FC<InputGroupTextareaProps>;
};

const InputGroup: InputGroupComponent = ({ children, ...props }: InputGroupProps) => {
  return (
    <BaseInputGroup className="bg-background" {...props}>
      {children}
    </BaseInputGroup>
  );
};

const InputGroupButton = ({ className, size = "xs", variant = "ghost", ...props }: ButtonProps) => (
  <Button
    className={cn("shadow-none flex gap-2 items-center", className)}
    data-slot="input-group-control"
    size={size}
    variant={variant}
    {...props}
  />
);

const InputGroupInput = ({ className, ...props }: InputProps) => {
  return (
    <Input
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className,
      )}
      data-slot="input-group-control"
      {...props}
    />
  );
};

const InputGroupTextarea = ({ className, ...props }: TextareaProps) => {
  return (
    <Textarea
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className,
      )}
      data-slot="input-group-control"
      {...props}
    />
  );
};

interface InputGroupAddonProps extends React.ComponentProps<typeof BaseInputGroupAddon> {
  right?: boolean;
}

const InputGroupAddon = ({ className, right = false, ...props }: InputGroupAddonProps) => {
  return <BaseInputGroupAddon align={right ? "inline-end" : "inline-start"} className={className} {...props} />;
};

InputGroup.Input = InputGroupInput;
InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;
InputGroup.Text = InputGroupText;
InputGroup.Textarea = InputGroupTextarea;

export { InputGroup };
