import type { ComponentProps } from "react";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  Drawer as DrawerPrimitive,
  DrawerSwipeHandle,
  DrawerTitle as DrawerTitlePrimitive,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/utils/cn";

const Drawer = (props: ComponentProps<typeof DrawerPrimitive>) => {
  return <DrawerPrimitive {...props} />;
};

const DrawerBody = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("flex-1 p-4", className)} data-slot="drawer-body" {...props} />;
};

const DrawerTitle = ({ className, ...props }: ComponentProps<typeof DrawerTitlePrimitive>) => {
  return <DrawerTitlePrimitive className={cn("text-xl font-medium", className)} {...props} />;
};

Drawer.Trigger = DrawerTrigger;
Drawer.Portal = DrawerPortal;
Drawer.Close = DrawerClose;
Drawer.Overlay = DrawerOverlay;
Drawer.SwipeHandle = DrawerSwipeHandle;
Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;
Drawer.Title = DrawerTitle;
Drawer.Description = DrawerDescription;

export { Drawer };
