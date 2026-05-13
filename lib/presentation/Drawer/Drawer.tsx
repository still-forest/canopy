import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";

const Drawer = ({ ...props }: DrawerPrimitive.Root.Props) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
};

const DrawerTrigger = ({ ...props }: DrawerPrimitive.Trigger.Props) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

const DrawerContent = ({ ...props }: DrawerPrimitive.Content.Props) => {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Backdrop />
      <DrawerPrimitive.Viewport>
        <DrawerPrimitive.Popup>
          <DrawerPrimitive.Content data-slot="drawer-content" {...props} />
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
};

const DrawerHeader = ({ ...props }: ComponentProps<"div">) => {
  return <div data-slot="drawer-header" {...props} />;
};

const DrawerTitle = ({ ...props }: DrawerPrimitive.Title.Props) => {
  return <DrawerPrimitive.Title data-slot="drawer-title" {...props} />;
};

const DrawerDescription = ({ ...props }: DrawerPrimitive.Description.Props) => {
  return <DrawerPrimitive.Description data-slot="drawer-description" {...props} />;
};

const DrawerBody = ({ ...props }: ComponentProps<"div">) => {
  return <div data-slot="drawer-body" {...props} />;
};

Drawer.Trigger = DrawerTrigger;
Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Description = DrawerDescription;
Drawer.Body = DrawerBody;

export { Drawer };
