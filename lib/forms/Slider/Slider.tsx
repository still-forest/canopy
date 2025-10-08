import { Slider as BaseSlider } from "@/components/ui/slider";
import { cn } from "@/utils";

interface SliderProps extends React.ComponentProps<typeof BaseSlider> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Slider = ({ size = "xl", className, ...props }: SliderProps) => (
  <BaseSlider
    thumbClassName={cn({
      "size-2": size === "xs",
      "size-3": size === "sm",
      "size-4": size === "md",
      "size-5": size === "lg",
      "size-6": size === "xl",
    })}
    trackClassName={cn({
      "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1": size === "xs",
      "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5": size === "sm",
      "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2": size === "md",
      "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3": size === "lg",
      "data-[orientation=horizontal]:h-4 data-[orientation=vertical]:w-4": size === "xl",
    })}
    {...props}
  />
);
