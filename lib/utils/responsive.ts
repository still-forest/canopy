import { BREAKPOINTS, type Breakpoint, type Responsive } from "@/types";

/**
 * A lookup table of every literal Tailwind class a responsive prop can emit,
 * keyed by breakpoint and then by token value.
 *
 * The classes must be written out in full (`"md:grid-cols-3"`, never
 * `` `${bp}:grid-cols-${n}` ``): consuming apps generate their utilities by
 * scanning Canopy's built output, so an interpolated name produces no CSS.
 */
export type ResponsiveClassMap<T extends string> = Record<Breakpoint, Record<T, string>>;

/**
 * Resolves a responsive prop to its Tailwind classes, in mobile-first order.
 *
 * A bare token is treated as `base`. Returns a sparse array; `cn` discards the
 * empty entries.
 */
export const responsiveClasses = <T extends string>(
  value: Responsive<T> | undefined,
  classes: ResponsiveClassMap<T>,
): (string | undefined)[] => {
  if (value == null) {
    return [];
  }

  if (typeof value === "string") {
    return [classes.base[value as T]];
  }

  return BREAKPOINTS.map((breakpoint) => {
    const token = value[breakpoint];
    return token == null ? undefined : classes[breakpoint][token];
  });
};
