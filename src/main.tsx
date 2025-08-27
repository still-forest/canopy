import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import App from "./App.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";
import LayoutApp from "./LayoutApp.tsx";
import SidebarLayoutApp from "./SidebarLayoutApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="canopy-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<LayoutApp />} path="/layout" />
          <Route element={<SidebarLayoutApp />} path="/sidebar" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
