import sortBy from "lodash/sortBy";
import uniq from "lodash/uniq";

export function scaleUpNeatly(number: number): number {
  if (number === 0) {
    return 0;
  }

  const absNumber = Math.abs(number);

  const scalar = 10 ** Math.floor(Math.log10(absNumber));
  const roundedAbsNumber = Math.ceil(absNumber / scalar) * scalar;

  return number < 0 ? -roundedAbsNumber : roundedAbsNumber;
}

export function getTickValues(domain: [number, number], numTicks = 3): number[] {
  // NOTE: this function may add an extra tick for 0, if the domain contains positive and negative values

  if (numTicks < 3) {
    throw new Error("numTicks must be at least 3");
  }

  const minTick = Math.min(scaleUpNeatly(domain[0]), 0);
  const maxTick = Math.max(scaleUpNeatly(domain[1]), 0);
  const zeroTick = 0;

  // Create the initial unique set of ticks
  const ticks = uniq([minTick, maxTick, zeroTick]);

  // Add interpolated ticks if needed
  if (ticks.length < numTicks) {
    const tickInterval = (maxTick - minTick) / (numTicks - 1);

    for (let i = 1; i < numTicks - 1; i++) {
      const newTick = minTick + tickInterval * i;
      if (!ticks.some((t) => Math.abs(t - newTick) < 1e-6)) {
        ticks.push(newTick);
      }
    }
  }

  return sortBy(ticks);
}

export function displayUsd(amount: number, round?: boolean): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: round ? 0 : 2,
  }).format(amount);
}
