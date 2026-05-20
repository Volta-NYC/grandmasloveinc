/** Format an ISO date (YYYY-MM-DD) as e.g. "July 31, 2025" without TZ drift. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Short month + day, e.g. { month: "JUL", day: "31" } for date chips. */
export function dateParts(iso: string): { month: string; day: string; year: string } {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return {
    month: date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase(),
    day: String(d).padStart(2, "0"),
    year: String(y),
  };
}
