import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/utils/cn";
import "./DropdownMenu.css";

import { mergeProps } from "@base-ui/react";
import { Button } from "@still-forest/canopy";

const DropdownMenu = ({ ...props }: MenuPrimitive.Root.Props) => {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};

const DropdownMenuPortal = ({ ...props }: MenuPrimitive.Portal.Props) => {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
};

const DropdownMenuTrigger = ({ className, ...props }: MenuPrimitive.Trigger.Props) => {
  return (
    <div className="dropdown-menu">
      <MenuPrimitive.Trigger
        className={cn("dropdown-menu-trigger", className)}
        data-slot="dropdown-menu-trigger"
        render={(triggerProps) => <Button outline size="sm" {...mergeProps(triggerProps, props)} />}
        {...props}
      />
    </div>
  );
};

const DropdownMenuContent = ({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<MenuPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="dropdown-menu-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          className={cn("dropdown-menu-content", className)}
          data-slot="dropdown-menu-content"
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

const DropdownMenuGroup = ({ ...props }: MenuPrimitive.Group.Props) => {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
};

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) => {
  return (
    <MenuPrimitive.GroupLabel
      className={cn("dropdown-menu-label", className)}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
};

const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) => {
  return (
    <MenuPrimitive.Item
      className={cn("dropdown-menu-item group/dropdown-menu-item", className)}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    />
  );
};

const DropdownMenuSub = ({ ...props }: MenuPrimitive.SubmenuRoot.Props) => {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
};

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) => {
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn("dropdown-menu-sub-trigger", className)}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
};

const DropdownMenuSubContent = ({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) => {
  return (
    <DropdownMenuContent
      align={align}
      alignOffset={alignOffset}
      className={cn("dropdown-menu-sub-content", className)}
      data-slot="dropdown-menu-sub-content"
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

const DropdownMenuCheckboxItem = ({ className, children, checked, ...props }: MenuPrimitive.CheckboxItem.Props) => {
  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={cn("dropdown-menu-checkbox-item", className)}
      data-slot="dropdown-menu-checkbox-item"
      {...props}
    >
      <span data-slot="dropdown-menu-checkbox-item-indicator">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
};

const DropdownMenuRadioGroup = ({ ...props }: MenuPrimitive.RadioGroup.Props) => {
  return <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
};

const DropdownMenuRadioItem = ({ className, children, ...props }: MenuPrimitive.RadioItem.Props) => {
  return (
    <MenuPrimitive.RadioItem
      className={cn("dropdown-menu-radio-item", className)}
      data-slot="dropdown-menu-radio-item"
      {...props}
    >
      <span data-slot="dropdown-menu-radio-item-indicator">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
};

const DropdownMenuSeparator = ({ className, ...props }: MenuPrimitive.Separator.Props) => {
  return (
    <MenuPrimitive.Separator
      className={cn("dropdown-menu-separator", className)}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
};

const DropdownMenuShortcut = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn("dropdown-menu-shortcut group-focus/dropdown-menu-item:text-accent-foreground", className)}
      data-slot="dropdown-menu-shortcut"
      {...props}
    />
  );
};

DropdownMenu.Portal = DropdownMenuPortal;
DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Group = DropdownMenuGroup;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem;
DropdownMenu.RadioGroup = DropdownMenuRadioGroup;
DropdownMenu.RadioItem = DropdownMenuRadioItem;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.Shortcut = DropdownMenuShortcut;
DropdownMenu.Sub = DropdownMenuSub;
DropdownMenu.SubTrigger = DropdownMenuSubTrigger;
DropdownMenu.SubContent = DropdownMenuSubContent;

export { DropdownMenu };
