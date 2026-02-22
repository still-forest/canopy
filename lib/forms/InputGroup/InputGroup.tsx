import type { ComponentProps, ReactNode } from "react";
import { Button, type ButtonProps } from "@/buttons/Button";
import { Input } from "@/components/ui/input";
import {
  InputGroup as BaseInputGroup,
  InputGroupAddon as BaseInputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils";

export type InputGroupProps = React.ComponentProps<typeof BaseInputGroup> & {
  children: ReactNode;
};
type InputGroupTextProps = React.ComponentProps<typeof InputGroupText>;
type InputGroupTextareaProps = React.ComponentProps<"textarea">;

type InputGroupComponent = React.FC<InputGroupProps> & {
  Input: React.FC<ComponentProps<"input">>;
  Addon: React.FC<InputGroupAddonProps>;
  Button: React.FC<ButtonProps>;
  Text: React.FC<InputGroupTextProps>;
  Textarea: React.FC<InputGroupTextareaProps>;
};

const InputGroup: InputGroupComponent = ({ children, className, ...props }: InputGroupProps) => {
  return (
    <BaseInputGroup className={cn("bg-background", className)} {...props}>
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

const InputGroupInput = ({ className, ...props }: ComponentProps<"input">) => {
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

const InputGroupTextarea = ({ className, ...props }: React.ComponentProps<"textarea">) => {
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
