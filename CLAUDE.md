# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Canopy is a React component library built with Tailwind CSS, Shadcn UI, and Base UI primitives. It is published to npm as `@still-forest/canopy` and uses pnpm for package management.

## Development Commands

### Building
```bash
pnpm build              # Build the library
pnpm build --watch      # Build in watch mode for local development
```

### Testing
```bash
pnpm test               # Run tests in watch mode
pnpm test:coverage      # Run tests with coverage report
vitest run path/to/test.test.tsx  # Run a single test file
```

### Linting & Formatting
```bash
pnpm lint               # Check code with Biome
pnpm lint:fix           # Auto-fix linting issues
pnpm lint:ci            # Run CI checks (Biome + TypeScript)
pnpm format             # Format code with Biome
```

### Storybook
```bash
pnpm storybook          # Start Storybook dev server on port 6006
pnpm storybook:docs     # Start Storybook in docs-only mode
pnpm storybook:build    # Build Storybook for production
```

### Releasing
```bash
pnpm release            # Create a new release with release-it
pnpm release:dry-run    # Test release process without publishing
```

## Code Architecture

### Directory Structure

- **`lib/`**: Source code for the published library
  - `components/`: Reusable UI components (Alert, Badge, Card, Modal, etc.)
  - `components/ui/`: Low-level Shadcn UI primitives (not exported in coverage)
  - `forms/`: Form-related components (Button, Input, DatePicker, Select, etc.)
  - `layout/`: Layout components (Box, Container, Flex, Grid, Header, Footer)
  - `navigation/`: Navigation components (Sidebar)
  - `interstitials/`: Loading and error states (PageLoader, ErrorFallback, Interstitial)
  - `typography/`: Text components (Heading, Text, Code)
  - `types/`: TypeScript type definitions
  - `utils/`: Utility functions (cn for className merging)
  - `hooks/`: React hooks (use-mobile)
  - `main.ts`: Main entry point that exports all public APIs

- **`src/`**: Demo/development apps (not published)
  - Contains example applications for testing components locally
  - `App.tsx`, `LayoutApp.tsx`, `SidebarLayoutApp.tsx` demonstrate component usage

- **`stories/`**: Storybook stories for documentation and visual testing

- **`tests/`**: Vitest unit tests mirroring the `lib/` structure

### Build Configuration

The library uses Vite for building with multiple entry points:
- Main entry: `lib/main.ts` → `dist/index.js`
- Modular exports: `layout`, `navigation`, `forms`, `interstitials`, `typography`, `utilities`
- Each export has its own entry point in `package.json` exports field

TypeScript declarations are generated via `vite-plugin-dts` with rollup types enabled.

### Path Aliases

The project uses path aliases defined in `tsconfig.json` and `vite.config.ts`:
- `@/*` → `lib/`
- `@src/*` → `src/`
- `@tests/*` → `tests/`
- `@stories/*` → `stories/`
- `@root/*` → `./`

### Styling System

Components use Tailwind CSS v4 with:
- Shadcn UI design system and color themes
- `cn()` utility function for merging Tailwind classes (from `lib/utils/cn.ts`)
- Consumers must include Canopy in their CSS via `@source "../node_modules/@still-forest/canopy/dist"`

### Testing

- Framework: Vitest with jsdom environment
- Location: `tests/` directory mirrors `lib/` structure
- Coverage excludes: `lib/types/*`, `lib/components/ui/*`, `lib/main.ts`, `lib/**/index.ts`
- Setup files: `vitest.setup.ts` and `vitest.globals-setup.ts`

### Component Patterns

Components are organized in feature folders with:
- Component implementation file (`.tsx`)
- `index.ts` for clean exports
- Corresponding test file in `tests/` directory
- Storybook story in `stories/` directory

Components are built on Base UI primitives (`@base-ui/*`) for accessibility and use `class-variance-authority` for variant management.

## Local Development Workflow

When testing Canopy in a consuming app:

1. **Option 1: pnpm link**
   ```bash
   # In canopy repo
   pnpm build --watch
   pnpm link

   # In consuming app
   pnpm link @still-forest/canopy
   ```

2. **Option 2: Direct path**
   ```bash
   # In consuming app
   pnpm add ~/Development/canopy
   ```

3. **Option 3: Direct copy**
   ```bash
   rm -rf ./node_modules/@still-forest/canopy/dist && cp -r ~/Development/canopy/dist ./node_modules/@still-forest/canopy/dist
   ```

## Key Technologies

- **React 19** (peer dependency, supports 16.8+)
- **Tailwind CSS 4** (peer dependency)
- **Base UI** for accessible component primitives
- **Vite** for building and development
- **Vitest** for testing
- **Biome** for linting and formatting (extends `@still-forest/biomejs-config`)
- **Storybook** for component documentation
- **TypeScript** with strict mode enabled
