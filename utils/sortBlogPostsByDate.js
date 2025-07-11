/**
 * Sorts an array of blog posts by date (newest first).
 *
 * @param {Array} posts - Array of objects with a `date` field.
 *
 * @returns {Array} - Sorted array.
 */
export default function sortBlogPostsByDate(posts) {
  return posts.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
}
