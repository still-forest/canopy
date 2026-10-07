# Canopy

_React components, built with Tailwind CSS, Shadcn, and VisX_

[![codecov](https://codecov.io/gh/still-forest/canopy/branch/main/graph/badge.svg)](https://codecov.io/gh/v/canopy)

**Resources**

- [Github repo](https://github.com/still-forest/canopy)
- Distribution
  - [npm registry](https://www.npmjs.com/package/@still-forest/canopy)
- Building blocks
  - [TailwindCSS](https://tailwindcss.com/docs)
  - [shadcn-ui](https://ui.shadcn.com/docs/)
    - [color themes](https://ui.shadcn.com/colors)
  - [Vite](https://vite.dev/guide/)
  - [Vitest](https://vitest.dev/guide/)
- Documentation via Storybook
  - [Github Pages](https://still-forest.github.io/canopy/) - docs only
- Development
  - [CodeCov](https://app.codecov.io/gh/still-forest/canopy)
  - [Renovate](https://developer.mend.io/github/still-forest/canopy)
- Other documentation, documents
  - [Changelog](./CHANGELOG.md)

---

## Usage

### Installation

Canopy provides foundational styles (colors, theme, typography, dimensions) as importable CSS. Import the styles in your primary `.css` file:

```css
@import "tailwindcss";
@import "@still-forest/canopy/styles";
@source "../node_modules/@still-forest/canopy/dist";

@layer base {
  /* your usual CSS definitions */
}
```

The `@import` provides Canopy's design tokens, theme variables, and utility classes. The `@source` directive ensures Tailwind detects classes used by Canopy components ([docs](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources)).

You can also import individual style modules:

```css
@import "@still-forest/canopy/styles/theme.css";
@import "@still-forest/canopy/styles/typography.css";
```

### Customization

Override any Canopy design tokens by redefining CSS variables after the import:

```css
@import "@still-forest/canopy/styles";

:root {
  --font-brand: "My Custom Font", serif;
  --color-brand: #4a90d9;
}
```

## z-index layering

Overlay components (backdrops, Sheet, Dialog, Drawer, Popover, DropdownMenu, Select, Combobox) share a single z-index and portal to the end of `<body>` when opened, so whatever opened last stacks on top. This works in both directions: a Select inside a Sheet, and a Sheet opened from a Popover.

| Token | z-index | Components |
|-------|---------|------------|
| `z-sticky` | `30` | Sticky headers/footers |
| `z-overlay`, `z-surface`, `z-popup` | `50` (`--z-index-layer`) | Everything that portals |
| `z-tooltip` | `70` | Tooltip |

Non-portaled elements shouldn't use `z-overlay`/`z-surface`/`z-popup`: they'd tie with portaled layers and lose on DOM order.

## Testing locally

### Using pnpm link

1. In this package, run build in watch mode:

```bash
pnpm build:watch
```

2. In the consuming package, link package.json to the locally built version:

```bash
pnpm link ~/Development/path/to/canopy
```

3. When done, cleanup:

```bash
pnpm unlink ~/Development/path/to/canopy
pnpm store prune # clear pnpm's global store
```

### Using pnpm add

1. In this package, run build in watch mode:

```bash
pnpm build:watch
```

2. In the consuming package, point package.json to the locally built version:

```bash
pnpm add ~/Development/canopy
```

### Direct file copy

**Alternatively**, directly copy the built version periodically:

```bash
rm -rf ./node_modules/@still-forest/canopy/dist && cp -r ~/Development/canopy/dist ./node_modules/@still-forest/canopy/dist
```
