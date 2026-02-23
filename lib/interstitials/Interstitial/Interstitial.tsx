import type { ComponentProps, ReactElement } from "react";
import "./Interstitial.css";
import { cloneElement } from "react";
import type { NotificationVariant } from "@/types/variants";
import { cn } from "@/utils/cn";

export interface InterstitialProps extends ComponentProps<"div"> {
  fit?: boolean;
  icon?: ReactElement<ComponentProps<"svg">>;
  headline?: string;
  headlineClassName?: string;
  message?: string;
  messages?: string[];
  variant?: NotificationVariant;
}

export const Interstitial = ({
  fit,
  headline,
  headlineClassName,
  icon,
  message,
  messages: messagesProp,
  variant,
  children,
  className,
  ...props
}: InterstitialProps) => {
  const messages = messagesProp || (message ? [message] : []);
  return (
    <div
      className={cn(
        "interstitial",
        {
          "interstitial--info": variant === "info",
          "interstitial--success": variant === "success",
          "interstitial--warning": variant === "warning",
          "interstitial--danger": variant === "danger",
          "interstitial--fit": fit,
        },
        className,
      )}
      {...props}
    >
      {icon && cloneElement(icon, { className: cn("interstitial-icon", icon.props.className) })}
      {headline && <h2 className={cn("interstitial-headline", headlineClassName)}>{headline}</h2>}
      {messages.map((message, i) => (
        <p className="interstitial-message" key={i}>
          {message}
        </p>
      ))}
      {children && <div className="interstitial-children">{children}</div>}
    </div>
  );
};
