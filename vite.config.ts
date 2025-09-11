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
          // Externalize non-local deps; keep project and virtual modules bundled
          external: (id) => {
            // Keep Vite/Rollup virtual modules and project-relative imports bundled
            if (id.startsWith("\0") || id.startsWith("virtual:") || id.startsWith(".")) return false;
            const libRoot = resolve(__dirname, "lib");
            // Treat absolute paths as internal only if they point inside our lib dir
            const isAbs = id.startsWith("/") || /^[A-Za-z]:[\\/]/.test(id); // posix + win
            if (isAbs) return !id.startsWith(libRoot);
            // Bare specifiers (react, react-dom, tailwindcss, node:, etc.) are externals
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
