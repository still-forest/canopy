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

### Responsive layout

Layout props on `Grid` accept either a single token, applied at every width, or a
mobile-first map of breakpoint to token (`base`, `sm`, `md`, `lg`, `xl`, `2xl`):

```tsx
import { Grid } from "@still-forest/canopy/layout";

<Grid cols="3" gap="4" />                                  // three columns, always
<Grid cols={{ base: "1", sm: "2", lg: "4" }} gap={{ base: "2", md: "8" }} />
```

`cols`, `rows`, `flow`, `gap`, `gapX`, `gapY`, `align`, `justify`, `alignContent`
and `justifyItems` all work this way. Any breakpoint you leave out simply
inherits the one below it.

`Grid.Item` places children across tracks, and is responsive in the same way:

```tsx
<Grid cols="12" gap="4">
  <Grid.Item colSpan={{ base: "12", md: "8" }}>Main</Grid.Item>
  <Grid.Item colSpan={{ base: "12", md: "4" }}>Aside</Grid.Item>
</Grid>
```

Because these compile to ordinary Tailwind utilities, `className` still overrides
a single breakpoint without disturbing the rest — `className="md:grid-cols-6"`
replaces only the `md` value.

> **Migrating from `GridLayout`.** `GridLayout` and `GridLayout.Item` are
> deprecated in favour of `Grid` and `Grid.Item`, which add responsive columns,
> gaps and alignment instead of a fixed 12-column `gap-4` container. Note that
> `Grid.Item` takes string tokens where `GridLayout.Item` took numbers:
>
> ```tsx
> <GridLayout>                        <Grid cols="12" gap="4">
>   <GridLayout.Item span={12}          <Grid.Item
>     md={6} />                           colSpan={{ base: "12", md: "6" }} />
> ```

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

Overlay components use a tiered z-index system to ensure correct stacking when nested:

| z-index | Layer | Components |
|---------|-------|------------|
| `50` | Panels | Sheet |
| `55` | Modals | Dialog |
| `60` | Floating | Popover, DropdownMenu |

## Testing locally

### Using pnpm link

1. In this package, run build in watch mode:

```bash
pnpm build:watch
```

Then expose it locally for linking:

```bash
pnpm link .
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
