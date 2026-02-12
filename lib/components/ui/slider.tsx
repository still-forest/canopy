import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import * as React from "react";

import { cn } from "@/utils";

interface SliderProps extends SliderPrimitive.Root.Props {
  thumbClassName?: string;
  trackClassName?: string;
}

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbClassName,
  trackClassName,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      className={cn("data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      max={max}
      min={min}
      thumbAlignment="edge"
      value={value}
      {...props}
    >
      <SliderPrimitive.Control className="data-[orientation=vertical]:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col">
        <SliderPrimitive.Track
          className={cn(
            "bg-muted rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5 relative grow overflow-hidden select-none",
            trackClassName,
          )}
          data-slot="slider-track"
        >
          <SliderPrimitive.Indicator
            className="bg-primary select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
            data-slot="slider-range"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            className={cn(
              "border-primary ring-ring/50 size-4 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50",
              thumbClassName,
            )}
            data-slot="slider-thumb"
            key={index}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
