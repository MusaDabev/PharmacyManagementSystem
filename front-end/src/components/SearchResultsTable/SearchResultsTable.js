import React from "react";
import styles from "./SearchResultsTable.module.css";

function SearchResultsTable({ searchResult, handleSelectedMedicine }) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Generic Name</th>
          <th scope="col">Brand Name</th>
          <th scope="col">MeasurementUnit</th>
          <th scope="col">Form</th>
        </tr>
      </thead>
      <tbody>
        {searchResult.map((result) => (
          <tr key={result.id} onClick={() => handleSelectedMedicine(result)}>
            <td>{result.genericName}</td>
            <td>{result.brandName}</td>
            <td>{result.measurementUnit}</td>
            <td>{result.form}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResultsTable;
