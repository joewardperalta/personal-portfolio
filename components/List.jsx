import Grid from "./Grid";

/**
 * Renders a grid of items using custom render function.
 *
 * @param {Array} items - Array of items to display
 * @param {Function}  renderItem - Function to render each item. Should
 * return a React element.
 * @param {number} columns - Number of columns to display in the grid
 * layout.
 *
 * @returns {JSX.Element} - A list wrapped in a Grid component.
 */
export default function List({ items = [], renderItem, columns = 1 }) {
  return (
    <ul>
      <Grid columns={columns}>{items.map(renderItem)}</Grid>
    </ul>
  );
}
