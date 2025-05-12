export function asOptionalValue<T>(options: readonly T[]): (T | null | undefined)[] {
  return [null, undefined, ...options];
}

export function summarizeValues<T>(options: readonly T[], optional = false): string {
  if (optional) {
    return `<optional> | ${options.join(" | ")}`;
  }
  return options.join(" | ");
}
