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

When using Vite, Canopy must be included in your primary `.css` file in order to ensure the necessary CSS classes are included in the build. For more details, read the Tailwind CSS documentation on [explicitly registering sources](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).

Example `index.css`:

```css
@import "tailwindcss";
@source "../node_modules/@still-forest/canopy/dist";

@layer base {
  /* your usual CSS definitions */
}
```
