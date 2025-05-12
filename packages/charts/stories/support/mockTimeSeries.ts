import ProperDate from "@jszymanowski/proper-date.js";

export function createRandomTimeSeries() {
  const startDate = new ProperDate("2023-12-31");
  const endDate = new ProperDate("2024-12-31");
  const data = [];

  let currentValue = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; // Start with a random value

  for (let date = new ProperDate(startDate); date <= endDate; date = date.add(1, "days")) {
    // Generate a small change to the current value
    const change = (Math.random() - 0.5) * 500; // Random change between -250 and +250
    currentValue = Math.max(1000, Math.min(10000, currentValue + change)); // Keep value within bounds

    data.push({
      date: new ProperDate(date), // Clone the date object
      value: Math.round(currentValue), // Round to nearest integer
    });
  }

  return data;
}
