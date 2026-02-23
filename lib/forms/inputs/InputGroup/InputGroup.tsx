import type { ComponentProps, FC } from "react";
import { Button as BaseButton } from "@/buttons";
import { Input as BaseInput, Textarea as BaseTextarea } from "@/forms/inputs";
import { cn } from "@/utils/cn";
import "./InputGroup.css";

interface AddonProps extends ComponentProps<"div"> {
  align?: "inline-start" | "inline-end" | "block-start" | "block-end";
}

const Addon = ({ children, align = "inline-start", className, ...props }: AddonProps) => {
  return (
    <div
      className={cn(
        "input-group-addon",
        {
          "input-group-addon--inline-start": align === "inline-start",
          "input-group-addon--inline-end": align === "inline-end",
          "input-group-addon--block-start": align === "block-start",
          "input-group-addon--block-end": align === "block-end",
        },
        className,
      )}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
};

const Button = ({ children, size = "xs", variant = "ghost", ...props }: ComponentProps<typeof BaseButton>) => {
  return (
    <BaseButton size={size} variant={variant} {...props}>
      {children}
    </BaseButton>
  );
};

const Text = ({ children, className, ...props }: ComponentProps<"span">) => {
  return (
    <span className={cn("input-group-text", className)} {...props}>
      {children}
    </span>
  );
};

const Input = (props: ComponentProps<typeof BaseInput>) => {
  return <BaseInput data-slot="input-group-control" {...props} />;
};

const Textarea = ({ children, className, ...props }: ComponentProps<typeof BaseTextarea>) => {
  return (
    <BaseTextarea className={cn("input-group-textarea", className)} data-slot="input-group-control" {...props}>
      {children}
    </BaseTextarea>
  );
};

type InputGroupComponent = FC<ComponentProps<"div">> & {
  Input: typeof Input;
  Addon: typeof Addon;
  Text: typeof Text;
  Button: typeof Button;
  Textarea: typeof Textarea;
};

const InputGroup: InputGroupComponent = ({ children, className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("input-group group/input-group", className)} {...props}>
      {children}
    </div>
  );
};

InputGroup.Input = Input;
InputGroup.Addon = Addon;
InputGroup.Text = Text;
InputGroup.Button = Button;
InputGroup.Textarea = Textarea;
export { InputGroup };
