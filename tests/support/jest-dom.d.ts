// Vitest 5 changed `Assertion<T>` to `Assertion<R, T>`, which breaks the augmentation shipped in
// `@testing-library/jest-dom/vitest`. Augment `Matchers` (Vitest's extension point) instead.
// Remove once jest-dom ships Vitest 5 compatible types.
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import "vitest";

declare module "vitest" {
  interface Matchers<R extends void | Promise<void> = void | Promise<void>, T = unknown>
    extends TestingLibraryMatchers<unknown, R> {}
}
