import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils";
import { Button, type ButtonProps } from "../Button";

interface CopyButtonProps extends Omit<ButtonProps, "onClick" | "disabled"> {
  content: string;
}

export const CopyButton = ({ content, className, size = "md", ...props }: CopyButtonProps) => {
  const [recentlyCopied, setRecentlyCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyText = () => {
    const write = navigator.clipboard?.writeText;
    if (!write) {
      return;
    }
    setRecentlyCopied(true);
    void write
      .call(navigator.clipboard, content)
      .then(() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setRecentlyCopied(false);
          timeoutRef.current = null;
        }, 2000);
      })
      .catch(() => {
        setRecentlyCopied(false);
      });
  };

  return (
    <Button
      className={cn(
        {
          "w-[88px]": size === "xs",
          "w-[96px]": size === "sm",
          "w-[100px]": size === "md",
          "w-[125px]": size === "lg",
          "w-[144px]": size === "xl",
        },
        "justify-start",
        className,
      )}
      disabled={recentlyCopied}
      icon={recentlyCopied ? <ClipboardCheck /> : <Clipboard />}
      label={recentlyCopied ? "Copied" : "Copy"}
      onClick={copyText}
      size={size}
      {...props}
    />
  );
};
