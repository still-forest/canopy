import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { defineConfig, type ViteUserConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib/**/*"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    libInjectCss(),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "Canopy",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "tailwindcss",
        "@visx/axis",
        "@visx/brush",
        "@visx/curve",
        "@visx/event",
        "@visx/gradient",
        "@visx/grid",
        "@visx/group",
        "@visx/responsive",
        "@visx/scale",
        "@visx/shape",
        "@visx/tooltip",
        "@visx/vendor",
      ],
    },
    minify: true,
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
      "@root": resolve(__dirname, "./"),
      "@src": resolve(__dirname, "./src"),
      "@tests": resolve(__dirname, "./tests"),
      "@stories": resolve(__dirname, "./stories"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["tests/**/*.test.ts*"],
    coverage: {
      include: ["lib/**/*"],
      exclude: ["lib/types/*"],
      reporter: ["text", "json", "html", "lcov"], // lcov is needed for Codecov
    },
  },
} as ViteUserConfig);
