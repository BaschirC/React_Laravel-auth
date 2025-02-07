export function getColorForResponseTime(timeString: string): string {
  // Convert time to milliseconds for comparison
  const timeInMs = convertToMilliseconds(timeString);

  // Assign colors based on thresholds
  if (timeInMs <= 1) {
    return "green"; // Excellent: Sub-millisecond or near-instant
  } else if (timeInMs <= 100) {
    return "lime"; // Good: Sub-100ms
  } else if (timeInMs <= 500) {
    return "yellow"; // Moderate: 100ms to 500ms
  } else if (timeInMs <= 2000) {
    return "orange"; // Slow: 500ms to 2 seconds
  } else {
    return "red"; // Very slow: Over 2 seconds
  }
}

export function convertToMilliseconds(timeString: string): number {
  const unitMatch = timeString.match(/[a-zµ]+/i);
  const valueMatch = timeString.match(/[\d.]+/);

  if (!unitMatch || !valueMatch) {
    console.log(timeString, "timeString");
    throw new Error(`Invalid time string format: ${timeString}`);
  }

  const unit = unitMatch[0];
  const value = parseFloat(valueMatch[0]);

  switch (unit) {
    case "ns":
      return value / 1e6; // Nanoseconds to milliseconds
    case "µs":
    case "μs":
    case "us": // Support alternative microsecond notation
      return value / 1e3; // Microseconds to milliseconds
    case "ms":
      return value;
    case "s":
      return value * 1e3; // Seconds to milliseconds
    default:
      throw new Error(`Unknown time unit: ${unit}`);
  }
}
