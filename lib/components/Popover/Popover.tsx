import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type * as React from "react";

import "./Popover.css";
import { cn } from "@/utils/cn";

const Popover = ({ ...props }: PopoverPrimitive.Root.Props) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
};

const Trigger = ({ ...props }: PopoverPrimitive.Trigger.Props) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

const Content = ({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<PopoverPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">) => {
  return (
    <PopoverPrimitive.Portal className="popover-portal">
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="popover-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <PopoverPrimitive.Popup className={cn("popover-content", className)} data-slot="popover-content" {...props} />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
};

const Header = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("popover-header", className)} data-slot="popover-header" {...props} />;
};

const Title = ({ className, ...props }: PopoverPrimitive.Title.Props) => {
  return <PopoverPrimitive.Title className={cn("popover-title", className)} data-slot="popover-title" {...props} />;
};

const Description = ({ className, ...props }: PopoverPrimitive.Description.Props) => {
  return (
    <PopoverPrimitive.Description
      className={cn("popover-description", className)}
      data-slot="popover-description"
      {...props}
    />
  );
};

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.Header = Header;
Popover.Title = Title;
Popover.Description = Description;

export { Popover };
