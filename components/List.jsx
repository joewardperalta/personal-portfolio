"use client";

import { useState } from "react";
import Search from "./Search";
import sortListByDate from "@/utils/sortListByDate";

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
 * @param {Function}  searchable - Boolean to identify the list to be searchable.
 * @returns {JSX.Element} - A list wrapped in a Grid component.
 */
export default function List({
  items = [],
  renderItem,
  columns = 1,
  searchable = false,
}) {
  const [searchString, setSearchString] = useState("");

  // Filter items by title
  const filtered = items.filter((item) => {
    // Cleans up the search string with any special characters
    let cleanSearchString = searchString.toLowerCase().replace(/[^a-z]/g, "");

    if (item.title.toLowerCase().includes(cleanSearchString)) return true;
    else return false;
  });

  // Sort items by date (latest first)
  const sorted = sortListByDate(filtered);

  return (
    <>
      {searchable && (
        <div className="w-fit">
          <Search inputChange={(e) => setSearchString(e.target.value)} />
        </div>
      )}

      <ul>
        <div className={`grid ${columnsClassMap[columns]} gap-4`}>
          {sorted.map(renderItem)}
        </div>
      </ul>
    </>
  );
}
