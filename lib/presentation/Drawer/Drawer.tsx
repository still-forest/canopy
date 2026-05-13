import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

import "./Drawer.css";

const Drawer = ({ swipeDirection = "down", ...props }: DrawerPrimitive.Root.Props) => {
  return <DrawerPrimitive.Root data-slot="drawer" swipeDirection={swipeDirection} {...props} />;
};

const DrawerTrigger = ({ className, ...props }: DrawerPrimitive.Trigger.Props) => {
  return <DrawerPrimitive.Trigger className={cn("drawer-trigger", className)} data-slot="drawer-trigger" {...props} />;
};

const DrawerContent = ({ className, ...props }: DrawerPrimitive.Content.Props) => {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Backdrop className="drawer-backdrop" />
      <DrawerPrimitive.Viewport className="drawer-viewport">
        <DrawerPrimitive.Popup className="drawer-popup">
          <DrawerPrimitive.Content className={cn("drawer-content", className)} data-slot="drawer-content" {...props} />
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
};

const DrawerHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("drawer-header", className)} data-slot="drawer-header" {...props} />;
};

const DrawerTitle = ({ className, ...props }: DrawerPrimitive.Title.Props) => {
  return <DrawerPrimitive.Title className={cn("drawer-title", className)} data-slot="drawer-title" {...props} />;
};

const DrawerDescription = ({ className, ...props }: DrawerPrimitive.Description.Props) => {
  return (
    <DrawerPrimitive.Description
      className={cn("drawer-description", className)}
      data-slot="drawer-description"
      {...props}
    />
  );
};

const DrawerBody = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("drawer-body", className)} data-slot="drawer-body" {...props} />;
};

const DrawerClose = ({ className, ...props }: DrawerPrimitive.Close.Props) => {
  return <DrawerPrimitive.Close className={cn("drawer-close", className)} data-slot="drawer-close" {...props} />;
};

Drawer.Trigger = DrawerTrigger;
Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Description = DrawerDescription;
Drawer.Body = DrawerBody;
Drawer.Close = DrawerClose;

export { Drawer };
