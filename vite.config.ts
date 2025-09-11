import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { defineConfig, type ViteUserConfig } from "vitest/config";

export default defineConfig(
  ({ mode }) =>
    ({
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
          entry: {
            index: "lib/main.ts",
            layout: "lib/layout/index.ts",
            navigation: "lib/navigation/index.ts",
            forms: "lib/forms/index.ts",
            interstitials: "lib/interstitials/index.ts",
            typography: "lib/typography/index.ts",
            utilities: "lib/utils/index.ts",
          },
          name: "Canopy",
          fileName: "index",
          formats: ["es"],
        },
        rollupOptions: {
          // Externalize all dependencies
          external: (id) => {
            // Always bundle local files
            if (id.startsWith(".") || id.startsWith("/") || id.startsWith(resolve(__dirname, "lib"))) {
              return false;
            }
            // Externalize everything else (e.g., node_modules)
            return true;
          },
          output: {
            entryFileNames: "[name].js",
            chunkFileNames: "chunks/[name]-[hash].js",
            preserveModules: false,
            manualChunks: undefined, // Use Rollup defaults
          },
        },
        minify: true,
        sourcemap: false,
        emptyOutDir: true,
      },
      define: {
        "process.env.NODE_ENV": JSON.stringify(mode),
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
        globalSetup: "./vitest.globals-setup.ts",
        setupFiles: "./vitest.setup.ts",
        include: ["tests/**/*.test.ts*"],
        coverage: {
          include: ["lib/**/*"],
          exclude: ["lib/types/*", "lib/components/ui/*", "lib/main.ts", "lib/**/index.ts"],
          reporter: ["text", "json", "html", "lcov"], // lcov is needed for Codecov
        },
      },
    }) as ViteUserConfig,
);
