import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search shows by artist..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
