import "@testing-library/jest-dom";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

vi.stubGlobal(
  "ResizeObserver",
  vi.fn(function ResizeObserver() {
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
  }),
);

vi.mock("@/hooks/use-mobile", () => ({
  useIsMobile: vi.fn(function useIsMobile() {
    return false;
  }),
}));

// Mock scrollIntoView for cmdk and other components that use it
Element.prototype.scrollIntoView = vi.fn(function scrollIntoView() {});
