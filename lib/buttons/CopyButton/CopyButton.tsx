import { Clipboard, ClipboardCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button, type ButtonProps } from "../Button";

interface CopyButtonProps extends Omit<ButtonProps, "onClick" | "disabled"> {
  content: string;
}

export const CopyButton = ({ content, ...props }: CopyButtonProps) => {
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
      disabled={recentlyCopied}
      icon={recentlyCopied ? <ClipboardCheck /> : <Clipboard />}
      label={recentlyCopied ? "Copied" : "Copy"}
      onClick={copyText}
      {...props}
    />
  );
};
