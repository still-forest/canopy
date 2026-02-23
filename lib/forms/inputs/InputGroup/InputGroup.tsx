import type { ComponentProps, FC } from "react";
import { Button } from "@/buttons";
import { Textarea } from "@/forms/inputs";
import { cn } from "@/utils/cn";
import "./InputGroup.css";

const Input = ({ id, name, ...props }: ComponentProps<"input">) => {
  return <input data-slot="input-group-control" id={id || name} name={name} {...props} />;
};

interface AddonProps extends ComponentProps<"div"> {
  align?: "inline-start" | "inline-end";
}

const Addon = ({ children, align = "inline-start", ...props }: AddonProps) => {
  return (
    <div data-align={align} data-slot="input-group-addon" {...props}>
      {children}
    </div>
  );
};

const Text = ({ children, ...props }: ComponentProps<"span">) => {
  return (
    <span data-slot="input-group-text" {...props}>
      {children}
    </span>
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
