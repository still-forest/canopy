/**
 * Responsive utility functions for handling Tailwind CSS breakpoint-based values
 */

import type { Breakpoint, ResponsiveValue } from "@/types/layout";

/**
 * Checks if a value is a responsive object (contains breakpoint keys)
 */
export function isResponsiveValue<T>(value: T | ResponsiveValue<T>): value is Partial<Record<Breakpoint, T>> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Generates Tailwind CSS classes with responsive prefixes from a responsive value
 *
 * @param value - Either a simple value or an object with breakpoint keys
 * @param getClass - Function that converts a value to a class name (without responsive prefix)
 * @returns Array of class names with appropriate responsive prefixes
 *
 * @example
 * // Simple value (backwards compatible)
 * getResponsiveClasses("row", (d) => `flex-${d}`)
 * // Returns: ["flex-row"]
 *
 * @example
 * // Responsive value
 * getResponsiveClasses({ base: "col", md: "row" }, (d) => `flex-${d}`)
 * // Returns: ["flex-col", "md:flex-row"]
 */
export function getResponsiveClasses<T extends string | boolean | number>(
  value: T | ResponsiveValue<T> | undefined,
  getClass: (val: T) => string,
): string[] {
  if (value === undefined || value === null) {
    return [];
  }

  // Handle primitive value (backwards compatible) - string, number, or boolean
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return [getClass(value as T)];
  }

  // Handle responsive object
  if (!isResponsiveValue(value)) {
    return [];
  }

  const classes: string[] = [];
  const breakpointOrder: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"];

  for (const breakpoint of breakpointOrder) {
    const val = value[breakpoint];
    if (val !== undefined) {
      const prefix = breakpoint === "base" ? "" : `${breakpoint}:`;
      classes.push(`${prefix}${getClass(val as T)}`);
    }
  }

  return classes;
}

/**
 * Generates conditional Tailwind CSS classes with responsive prefixes
 * Useful for properties that map to multiple CSS classes based on value
 *
 * @param value - Either a simple value or an object with breakpoint keys
 * @param classMap - Object mapping values to class names (can be partial)
 * @returns Array of class names with appropriate responsive prefixes, filtering out empty/undefined values
 *
 * @example
 * getResponsiveConditionalClasses(
 *   { base: "start", md: "center" },
 *   { start: "items-start", center: "items-center", end: "items-end" }
 * )
 * // Returns: ["items-start", "md:items-center"]
 */
export function getResponsiveConditionalClasses<T extends string>(
  value: T | ResponsiveValue<T> | undefined,
  classMap: Partial<Record<T, string>>,
): string[] {
  return getResponsiveClasses(value, (val) => classMap[val] ?? "").filter(Boolean);
}
