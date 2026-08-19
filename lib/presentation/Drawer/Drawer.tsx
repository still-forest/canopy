import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type { ComponentProps } from "react";
import { createContext, useContext, useMemo } from "react";
import { cn } from "@/utils/cn";

import "./Drawer.css";

type DrawerContextProps = {
  hasSnapPoints: boolean;
  modal: DrawerPrimitive.Root.Props["modal"];
  showSwipeHandle: boolean;
  swipeDirection: NonNullable<DrawerPrimitive.Root.Props["swipeDirection"]>;
};

const DrawerContext = createContext<DrawerContextProps | null>(null);

function useDrawer() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("useDrawer must be used within a Drawer.");
  }

  return context;
}

interface DrawerProps extends DrawerPrimitive.Root.Props {
  showSwipeHandle?: boolean;
}

const Drawer = ({
  swipeDirection = "down",
  snapPoints,
  modal = true,
  showSwipeHandle = true,
  ...props
}: DrawerProps) => {
  const hasSnapPoints = snapPoints != null && snapPoints.length > 0;
  const contextValue = useMemo(
    () => ({ hasSnapPoints, modal, showSwipeHandle, swipeDirection }),
    [hasSnapPoints, modal, showSwipeHandle, swipeDirection],
  );
  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root data-slot="drawer" swipeDirection={swipeDirection} {...props} />
    </DrawerContext.Provider>
  );
};

const DrawerTrigger = ({ className, ...props }: DrawerPrimitive.Trigger.Props) => {
  return <DrawerPrimitive.Trigger className={cn("drawer-trigger", className)} data-slot="drawer-trigger" {...props} />;
};

const DrawerPopup = ({ className, children, ...props }: DrawerPrimitive.Popup.Props) => {
  const { hasSnapPoints, swipeDirection } = useDrawer();
  const swipeAxis = swipeDirection === "down" || swipeDirection === "up" ? "y" : "x";

  return (
    <DrawerPrimitive.Popup
      className={cn(
        // Base.
        "drawer-popup group/drawer-popup m-(--drawer-inset,0px) h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col bg-popover text-sm text-popover-foreground transition-[transform,height,opacity,filter] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform outline-none select-none [interpolate-size:allow-keywords] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:border-t data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:border-r data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:border-l data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:border-b",
        // Nested.
        "data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95",
        // Bleed.
        "after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-popover)) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full",
        // Sizing.
        "[--drawer-content-height:var(--drawer-height,auto)] data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]",
        // Stack.
        "[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]",
        // Transitions.
        "data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
        // Axis: y.
        "data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height)",
        // Axis: x.
        "data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row",
        // Direction: down.
        "data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]",
        // Direction: up.
        "data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]",
        // Direction: left.
        "data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]",
        // Direction: right.
        "data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]",
        className,
      )}
      data-slot="drawer-popup"
      data-snap-points={hasSnapPoints ? "" : undefined}
      data-swipe-axis={swipeAxis}
      {...props}
    >
      {children}
    </DrawerPrimitive.Popup>
  );
};

const DrawerContent = ({ className, ...props }: DrawerPrimitive.Content.Props) => {
  const { showSwipeHandle } = useDrawer();

  return (
    <DrawerPrimitive.Portal data-slot="drawer-portal">
      <DrawerPrimitive.Backdrop className="drawer-backdrop supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute" />
      <DrawerPrimitive.Viewport className="drawer-viewport" data-slot="drawer-viewport">
        <DrawerPopup>
          {showSwipeHandle && <DrawerSwipeHandle />}
          <DrawerPrimitive.Content
            className={cn(
              "drawer-content group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none",
              className,
            )}
            data-slot="drawer-content"
            {...props}
          />
        </DrawerPopup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
};

const DrawerSwipeHandle = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "drawer-handle group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[swipe-axis=x]/drawer-popup:h-full group-data-[swipe-axis=x]/drawer-popup:w-3 group-data-[swipe-axis=x]/drawer-popup:items-center group-data-[swipe-axis=y]/drawer-popup:h-3 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center group-data-[swipe-direction=down]/drawer-popup:items-end group-data-[swipe-direction=left]/drawer-popup:order-last group-data-[swipe-direction=left]/drawer-popup:justify-start group-data-[swipe-direction=right]/drawer-popup:justify-end group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start group-data-[swipe-axis=x]/drawer-popup:after:h-[100px] group-data-[swipe-axis=x]/drawer-popup:after:w-1.5 group-data-[swipe-axis=y]/drawer-popup:after:h-1.5 group-data-[swipe-axis=y]/drawer-popup:after:w-[100px]",
        className,
      )}
      data-slot="drawer-swipe-handle"
      {...props}
    />
  );
};

const DrawerHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("drawer-header group-data-[swipe-axis=y]/drawer-popup:text-center", className)}
      data-slot="drawer-header"
      {...props}
    />
  );
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

const DrawerActions = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("drawer-actions", className)} data-slot="drawer-actions" {...props} />;
};

const DrawerFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("drawer-footer", className)} data-slot="drawer-footer" {...props} />;
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
Drawer.Actions = DrawerActions;
Drawer.Footer = DrawerFooter;
Drawer.Close = DrawerClose;

export { Drawer };
