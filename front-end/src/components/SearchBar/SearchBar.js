import React, { useState, useEffect } from "react";
import SearchResultsTable from "../SearchResultsTable/SearchResultsTable";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    // Example: searching for a keyword in an array
    const result = jsonData.filter((item) =>
      item.brandName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResult(result);
  };

  useEffect(() => {
    fetch('http://localhost:5000/medicines')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data)})
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Enter keyword to search"
      />
      <button type="button" onClick={handleSearchClick}>
        Search
      </button>
      {/* Display the search results */}
      <ul>
        {searchResult.map((result) => (
            <SearchResultsTable result={result} />
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
