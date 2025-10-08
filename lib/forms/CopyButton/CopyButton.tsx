import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  content: string;
}

export function CopyButton({ content }: CopyButtonProps) {
  const [recentlyCopied, setRecentlyCopied] = useState(false);

  const copyText = () => {
    setRecentlyCopied(true);
    navigator.clipboard.writeText(content);

    setTimeout(() => {
      setRecentlyCopied(false);
    }, 2000);
  };

  return (
    <button
      className="flex w-25 justify-center gap-1 rounded-sm"
      disabled={recentlyCopied}
      onClick={copyText}
      type="button"
    >
      {recentlyCopied ? (
        <>
          <ClipboardCheck size={24} />
          Copied
        </>
      ) : (
        <>
          <Clipboard size={24} />
          Copy
        </>
      )}
    </button>
  );
}
