import { ChevronDownIcon } from "lucide-react";
import type * as React from "react";

import { cn } from "@/utils";

import "./NativeSelect.css";

const NativeSelect = ({ className, ...props }: React.ComponentProps<"select">) => {
  return (
    <div className="native-select-wrapper" data-slot="native-select-wrapper">
      <select className={cn("native-select", className)} data-slot="native-select" {...props} />
      <ChevronDownIcon aria-hidden="true" className="native-select-icon" data-slot="native-select-icon" />
    </div>
  );
};

const NativeSelectOption = ({ ...props }: React.ComponentProps<"option">) => {
  return <option data-slot="native-select-option" {...props} />;
};

const NativeSelectOptGroup = ({ className, ...props }: React.ComponentProps<"optgroup">) => {
  return <optgroup className={cn(className)} data-slot="native-select-optgroup" {...props} />;
};

NativeSelect.Option = NativeSelectOption;
NativeSelect.OptGroup = NativeSelectOptGroup;

export { NativeSelect };
