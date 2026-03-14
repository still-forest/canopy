import { createRootRoute, Outlet } from "@tanstack/react-router";
import ThemeProvider from "../context/ThemeProvider";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="light" storageKey="canopy-theme">
      <Outlet />
    </ThemeProvider>
  ),
});
