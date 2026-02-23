import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { CheckIcon, ChevronDown, ChevronUp } from "lucide-react";
import type { ComponentProps } from "react";
import { DropdownMenu } from "@/components/DropdownMenu";
import { cn } from "@/utils/cn";
import "./MenuBar.css";

const Menubar = ({ className, ...props }: MenubarPrimitive.Props) => {
  return <MenubarPrimitive className={cn("menubar", className)} data-slot="menubar" {...props} />;
};

const MenubarMenu = ({ ...props }: ComponentProps<typeof DropdownMenu>) => {
  return <DropdownMenu data-slot="menubar-menu" {...props} />;
};

const MenubarTriggerGroup = ({ ...props }: ComponentProps<"div">) => {
  return <div className="menubar-trigger-group" data-slot="menubar-trigger-group" {...props} />;
};

const MenubarTrigger = ({
  className,
  children,
  variant = "default",
  ...props
}: ComponentProps<typeof DropdownMenu.Trigger> & { variant?: "default" | "outline" }) => {
  return (
    <DropdownMenu.Trigger
      className={cn("menubar-trigger group", className)}
      data-slot="menubar-trigger"
      data-variant={variant}
      {...props}
    >
      {children}
      <ChevronDown className="group-aria-expanded:hidden" />
      <ChevronUp className="hidden group-aria-expanded:block" />
    </DropdownMenu.Trigger>
  );
};

const MenubarGroup = ({ ...props }: ComponentProps<typeof DropdownMenu.Group>) => {
  return <DropdownMenu.Group data-slot="menubar-group" {...props} />;
};

const MenubarPortal = ({ ...props }: ComponentProps<typeof DropdownMenu.Portal>) => {
  return <DropdownMenu.Portal data-slot="menubar-portal" {...props} />;
};

const MenubarContent = ({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof DropdownMenu.Content>) => {
  return (
    <DropdownMenu.Content
      align={align}
      alignOffset={alignOffset}
      className={cn("menubar-content", className)}
      data-slot="menubar-content"
      sideOffset={sideOffset}
      {...props}
    />
  );
};

const MenubarItem = ({ className, inset, variant = "default", ...props }: ComponentProps<typeof DropdownMenu.Item>) => {
  return (
    <DropdownMenu.Item
      className={cn("menubar-item", className)}
      data-inset={inset}
      data-slot="menubar-item"
      data-variant={variant}
      {...props}
    />
  );
};

const MenubarCheckboxItem = ({ className, children, checked, ...props }: MenuPrimitive.CheckboxItem.Props) => {
  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={cn("menubar-checkbox-item", className)}
      data-slot="menubar-checkbox-item"
      {...props}
    >
      <span className="menubar-checkbox-item-indicator">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
};

const MenubarRadioGroup = ({ ...props }: ComponentProps<typeof DropdownMenu.RadioGroup>) => {
  return <DropdownMenu.RadioGroup data-slot="menubar-radio-group" {...props} />;
};

const MenubarRadioItem = ({ className, children, ...props }: MenuPrimitive.RadioItem.Props) => {
  return (
    <MenuPrimitive.RadioItem className={cn("menubar-radio-item", className)} data-slot="menubar-radio-item" {...props}>
      <span className="menubar-radio-item-indicator">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
};

const MenubarLabel = ({ className, inset, ...props }: ComponentProps<typeof DropdownMenu.Label>) => {
  return (
    <DropdownMenu.Label
      className={cn("menubar-label", className)}
      data-inset={inset}
      data-slot="menubar-label"
      {...props}
    />
  );
};

const MenubarSeparator = ({ className, ...props }: ComponentProps<typeof DropdownMenu.Separator>) => {
  return (
    <DropdownMenu.Separator className={cn("menubar-separator", className)} data-slot="menubar-separator" {...props} />
  );
};

const MenubarShortcut = ({ className, ...props }: ComponentProps<typeof DropdownMenu.Shortcut>) => {
  return (
    <DropdownMenu.Shortcut className={cn("menubar-shortcut", className)} data-slot="menubar-shortcut" {...props} />
  );
};

const MenubarSub = ({ ...props }: ComponentProps<typeof DropdownMenu.Sub>) => {
  return <DropdownMenu.Sub data-slot="menubar-sub" {...props} />;
};

const MenubarSubTrigger = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenu.SubTrigger> & {
  inset?: boolean;
}) => {
  return (
    <DropdownMenu.SubTrigger
      className={cn("menubar-sub-trigger", className)}
      data-inset={inset}
      data-slot="menubar-sub-trigger"
      {...props}
    />
  );
};

const MenubarSubContent = ({ className, ...props }: ComponentProps<typeof DropdownMenu.SubContent>) => {
  return (
    <DropdownMenu.SubContent
      className={cn("menubar-sub-content", className)}
      data-slot="menubar-sub-content"
      {...props}
    />
  );
};

const MenubarMenuSeparator = ({ className, ...props }: ComponentProps<typeof SeparatorPrimitive>) => {
  return (
    <SeparatorPrimitive
      className={cn("menubar-menu-separator", className)}
      data-slot="menubar-menu-separator"
      {...props}
    />
  );
};

Menubar.Menu = MenubarMenu;
Menubar.Group = MenubarGroup;
Menubar.Portal = MenubarPortal;
Menubar.Trigger = MenubarTrigger;
Menubar.TriggerGroup = MenubarTriggerGroup;
Menubar.Content = MenubarContent;
Menubar.Item = MenubarItem;
Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Label = MenubarLabel;
Menubar.Separator = MenubarSeparator;
Menubar.Shortcut = MenubarShortcut;
Menubar.Sub = MenubarSub;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.SubContent = MenubarSubContent;
Menubar.MenuSeparator = MenubarMenuSeparator;

export { Menubar };
