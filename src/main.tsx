import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import App from "./App.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";
import SidebarApp from "./SidebarApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="canopy-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<SidebarApp />} path="/sidebar" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
