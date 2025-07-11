/**
 * Formats a date string or object into "MM DD, YYYY" (e.g, "Jun 16, 2024")
 *
 * @param {string | number | Date} dateString - a date string, timestamp,
 * or Date obect
 *
 * @returns {string} - Formatted date string
 */
export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  return date.toLocaleDateString(undefined, options);
}
