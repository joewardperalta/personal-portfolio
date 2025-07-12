import Grid from "./Grid";

/**
 * Renders a grid of items using custom render function.
 *
 * @param {Array} items - Array of items to display
 * @param {Function}  renderItem - Function to render each item.
 * Should return a React element.
 * @param {number} columns - Number of columns to display in the grid
 * layout.
 * @param {Function} sortFunction - Function to sort the items
 * @returns {JSX.Element} - A list wrapped in a Grid component.
 */
export default function List({
  items = [],
  renderItem,
  sortFunction,
  columns = 1,
}) {
  // Sorts the item array based on sortFunction.
  const sortedItems = sortFunction ? sortFunction(items) : items;

  return (
    <ul>
      <Grid columns={columns}>{sortedItems.map(renderItem)}</Grid>
    </ul>
  );
}
