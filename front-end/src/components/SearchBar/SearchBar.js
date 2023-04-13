import React, { useState, useEffect } from "react";
import SearchResultsTable from "../SearchResultsTable/SearchResultsTable";
import styles from "./SearchBar.module.css";

function SearchBar({jsonData, handleSelectedMedicine }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    // Example: searching for a keyword in an array
    const result = jsonData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResult(result);
  };

  return (
    <div>
      <form className="d-flex" onSubmit={handleSearchClick}>
        <input
          id="searchInput"
          className={`form-control me-1 ${styles.searchInput}`}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Търси"
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleSearchClick}
        >
          Търси
        </button>
      </form>

      {/* Display the search results */}
      <div className="mt-2">
        <SearchResultsTable
          searchResult={searchResult}
          medicines={jsonData}
          handleSelectedMedicine={handleSelectedMedicine}
        />
      </div>
    </div>
  );
}

export default SearchBar;
