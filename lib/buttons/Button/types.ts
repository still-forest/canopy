import type { ComponentProps, ReactElement } from "react";
import type { ButtonSize, ButtonVariant } from "@/types";

export type BaseButtonProps = {
  className?: string;
  label?: string;
  icon?: ReactElement<ComponentProps<"svg">>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  knockout?: boolean;
  rounded?: boolean;
  fit?: boolean;
  asIcon?: boolean;
};
