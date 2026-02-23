import type * as React from "react";

import { cn } from "@/utils";
import "./Textarea.css";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn("textarea", className)} data-slot="textarea" {...props} />;
}

export { Textarea };
