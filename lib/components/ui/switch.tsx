import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/utils";

function Switch({
  className,
  size = "md",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent shadow-xs focus-visible:ring-3 aria-invalid:ring-3 peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-[size=xs]:h-[10px]",
        "data-[size=xs]:w-[16px]",
        "data-[size=sm]:h-[14px]",
        "data-[size=sm]:w-[24px]",
        "data-[size=md]:h-[18.4px]",
        "data-[size=md]:w-[32px]",
        "data-[size=lg]:h-[22.8px]",
        "data-[size=lg]:w-[40px]",
        "data-[size=xl]:h-[27.2px]",
        "data-[size=xl]:w-[48px]",
        className,
      )}
      data-size={size}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full  pointer-events-none block ring-0 transition-transform",
          "group-data-[size=xs]/switch:size-2",
          "group-data-[size=xs]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=xs]/switch:data-unchecked:translate-x-0",
          "group-data-[size=sm]/switch:size-3",
          "group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=sm]/switch:data-unchecked:translate-x-0",
          "group-data-[size=md]/switch:size-4",
          "group-data-[size=md]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=md]/switch:data-unchecked:translate-x-0",
          "group-data-[size=lg]/switch:size-5",
          "group-data-[size=lg]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=lg]/switch:data-unchecked:translate-x-0",
          "group-data-[size=xl]/switch:size-6",
          "group-data-[size=xl]/switch:data-checked:translate-x-[calc(100%-2px)]",
          "group-data-[size=xl]/switch:data-unchecked:translate-x-0",
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
