import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../lib/styles/index.css";

import App from "./App.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";
import LayoutApp from "./LayoutApp.tsx";
import SidebarLayoutApp from "./SidebarLayoutApp.tsx";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/layout",
  component: LayoutApp,
});

const sidebarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sidebar",
  component: SidebarLayoutApp,
});

const routeTree = rootRoute.addChildren([indexRoute, layoutRoute, sidebarRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="canopy-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
