import { describe, expect, it } from "vitest";

import type { ResponsiveClassMap } from "@/utils";
import { responsiveClasses } from "@/utils";

const CLASSES = {
  base: { a: "a", b: "b" },
  sm: { a: "sm:a", b: "sm:b" },
  md: { a: "md:a", b: "md:b" },
  lg: { a: "lg:a", b: "lg:b" },
  xl: { a: "xl:a", b: "xl:b" },
  "2xl": { a: "2xl:a", b: "2xl:b" },
} satisfies ResponsiveClassMap<"a" | "b">;

const resolve = (value: Parameters<typeof responsiveClasses<"a" | "b">>[0]) =>
  responsiveClasses(value, CLASSES).filter(Boolean);

describe("responsiveClasses", () => {
  it("returns nothing for undefined", () => {
    expect(responsiveClasses(undefined, CLASSES)).toEqual([]);
  });

  it("returns nothing for an empty map", () => {
    expect(resolve({})).toEqual([]);
  });

  it("maps a bare token to the base breakpoint", () => {
    expect(resolve("a")).toEqual(["a"]);
  });

  it("maps a full breakpoint map in mobile-first order", () => {
    expect(resolve({ "2xl": "a", base: "a", lg: "b", md: "a", sm: "b", xl: "b" })).toEqual([
      "a",
      "sm:b",
      "md:a",
      "lg:b",
      "xl:b",
      "2xl:a",
    ]);
  });

  it("skips omitted breakpoints", () => {
    expect(resolve({ lg: "b", md: "a" })).toEqual(["md:a", "lg:b"]);
  });
});
