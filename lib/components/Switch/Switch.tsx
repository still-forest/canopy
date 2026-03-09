import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { cn } from "@/utils";
import "./Switch.css";

function Switch({
  className,
  size = "md",
  thumbClassName,
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  thumbClassName?: string;
}) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "switch peer group/switch",
        "data-[size=xs]:h-[10px]",
        "data-[size=xs]:w-[16px]",
        "data-[size=sm]:h-[14px]",
        "data-[size=sm]:w-[24px]",
        "data-[size=md]:h-[18.4px]",
        "data-[size=md]:w-[32px]",
        "data-[size=lg]:h-[22px]",
        "data-[size=lg]:w-[40px]",
        "data-[size=xl]:h-[26px]",
        "data-[size=xl]:w-[48px]",
        className,
      )}
      data-size={size}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "switch-thumb",
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
          thumbClassName,
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
