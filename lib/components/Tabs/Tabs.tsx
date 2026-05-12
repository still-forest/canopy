import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import "./Tabs.css";
import { cn } from "@/utils";

function Tabs({ className, orientation = "horizontal", ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={cn("tabs group/tabs", className)}
      data-orientation={orientation}
      data-slot="tabs"
      {...(orientation === "vertical" && { "data-vertical": true })}
      {...(orientation === "horizontal" && { "data-horizontal": true })}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      className={cn(
        "tabs-list group-data-horizontal/tabs:h-9 group/tabs-list group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
        className,
      )}
      data-slot="tabs-list"
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "tabs-trigger group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start",
        "group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5",
        className,
      )}
      data-slot="tabs-trigger"
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel className={cn("tabs-content", className)} data-slot="tabs-content" {...props} />;
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

export { Tabs };
