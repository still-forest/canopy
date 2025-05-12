# Breeze Charts

_React chart components, built with Tailwind CSS and VisX_

[![codecov](https://codecov.io/gh/jszymanowski/breeze/branch/main/graph/badge.svg)](https://codecov.io/gh/jszymanowski/breeze)

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
1. The new version will be available from the [NPM registry](https://www.npmjs.com/package/@jszymanowski/breeze-charts)
