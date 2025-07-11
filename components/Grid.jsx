const columnClassMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

/**
 * A dynamic Grid component that accepts a `columns` prop.
 * @param {number} columns - Number of columns for the grid layout.
 * @param {React.ReactNode} props.children - The content to display in the grid.
 * @returns {JSX.Element} - An element with a class grid.
 */
export default function Grid({ columns = 2, children }) {
  return (
    <div className={`grid ${columnClassMap[columns]} gap-3`}>{children}</div>
  );
}
