import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { Button } from "@still-forest/canopy";
import { XIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import "./Sheet.css";
import { useIsMobile } from "@/hooks/use-mobile";

const Sheet = ({ ...props }: SheetPrimitive.Root.Props) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

const SheetTrigger = ({ ...props }: SheetPrimitive.Trigger.Props) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};

const SheetClose = ({ ...props }: SheetPrimitive.Close.Props) => {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
};

const SheetPortal = ({ ...props }: SheetPrimitive.Portal.Props) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};

const SheetOverlay = ({ className, ...props }: SheetPrimitive.Backdrop.Props) => {
  return <SheetPrimitive.Backdrop className={cn("sheet-overlay", className)} data-slot="sheet-overlay" {...props} />;
};

const SheetContent = ({
  className,
  children,
  side,
  showCloseButton = true,
  showOverlay = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
  showOverlay?: boolean;
}) => {
  const isMobile = useIsMobile();
  const defaultSide = isMobile ? "bottom" : "right";
  return (
    <SheetPortal>
      {showOverlay && <SheetOverlay />}
      <SheetPrimitive.Popup
        className={cn("sheet-content", className)}
        data-side={side ?? defaultSide}
        data-slot="sheet-content"
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetClose render={<Button className="absolute top-4 right-4" size="sm" variant="ghost" />}>
            <XIcon />
            <span className="sr-only">Close</span>
          </SheetClose>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
};

const SheetHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("sheet-header", className)} data-slot="sheet-header" {...props} />;
};

const SheetBody = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("sheet-body", className)} data-slot="sheet-body" {...props} />;
};

const SheetFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("sheet-footer", className)} data-slot="sheet-footer" {...props} />;
};

const SheetTitle = ({ className, ...props }: SheetPrimitive.Title.Props) => {
  return <SheetPrimitive.Title className={cn("sheet-title", className)} data-slot="sheet-title" {...props} />;
};

const SheetDescription = ({ className, ...props }: SheetPrimitive.Description.Props) => {
  return (
    <SheetPrimitive.Description
      className={cn("sheet-description", className)}
      data-slot="sheet-description"
      {...props}
    />
  );
};

Sheet.Trigger = SheetTrigger;
Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
Sheet.Overlay = SheetOverlay;
Sheet.Header = SheetHeader;
Sheet.Body = SheetBody;
Sheet.Footer = SheetFooter;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;

export { Sheet };
