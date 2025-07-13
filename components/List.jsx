const columnsClassMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

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
      <div className={`grid ${columnsClassMap[columns]} gap-4`}>
        {sortedItems.map(renderItem)}
      </div>
    </ul>
  );
}
