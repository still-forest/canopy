# Breeze Primitives

_Primitive React components, built with Tailwind CSS_

[![codecov](https://codecov.io/gh/jszymanowski/breeze/branch/main/graph/badge.svg)](https://codecov.io/gh/jszymanowski/breeze)

**Resources**

- [Github repo](https://github.com/jszymanowski/breeze)
- Distribution
  - [npm registry](https://www.npmjs.com/package/@jszymanowski/breeze-primitives)
- Building blocks
  - [TailwindCSS](https://tailwindcss.com/docs)
  - [shadcn-ui](https://ui.shadcn.com/docs/)
    - [color themes](https://ui.shadcn.com/colors)
  - [Vite](https://vite.dev/guide/)
  - [Vitest](https://vitest.dev/guide/)
- Documentation via Storybook
  - [Github Pages](https://jszymanowski.github.io/breeze/) - docs only
  - [Chromatic](https://67ccefd8fafa91b1c6c38501-dubbfpsqzi.chromatic.com/) - full suite of stories
- Development
  - [Chromatic builds](https://www.chromatic.com/builds?appId=67ccefd8fafa91b1c6c38501)
  - [CodeCov](https://app.codecov.io/gh/jszymanowski/breeze)
  - [Renovate](https://developer.mend.io/github/jszymanowski/breeze)
- Other documentation, documents
  - [Changelog](./CHANGELOG.md)
  - [Roadmap](./docs/ROADMAP.md)

---

## Usage

### Installation

When using Vite, Breeze must be included in your primary `.css` file in order to ensure the necessary CSS classes are included in the build. For more details, read the Tailwind CSS documentation on [explicitly registering sources](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources).

Example `index.css`:

```css
@import "tailwindcss";
@source "../node_modules/@jszymanowski/breeze-primitives/dist";

@layer base {
  /* your usual CSS definitions */
}
```

---

### Releases & Publishing

Releases are automated using [Release Please](https://github.com/googleapis/release-please):

1. When a PR is merged to main, Release Please will analyze recent commits to determine if and how a release should be structured.
1. A PR with necessary changes to make a release will be opened. This will include:
   - version bump
   - [changelog](./CHANGELOG.md) updates
1. Once merged, the release will be completed but not published. Release Please will:
   - create a Git tag (like v1.2.3) corresponding to the released version
   - create a GitHub Release with the changelog as release notes
1. The [`publish` Github Action](../../.github/workflows/publish.yml) will detect the new tag and publish the release.
1. The new version will be available from the [NPM registry](https://www.npmjs.com/package/@jszymanowski/breeze-primitives)
