export const BREAKPOINTS = ["base", "sm", "md", "lg", "xl", "2xl"] as const;
export type Breakpoint = (typeof BREAKPOINTS)[number];

/**
 * A value that may either be a single token (applied at all widths) or a
 * mobile-first map of breakpoint to token.
 *
 * @example
 * cols="3"                            // three columns at every width
 * cols={{ base: "1", md: "3" }}       // one column, three from `md` up
 */
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;
