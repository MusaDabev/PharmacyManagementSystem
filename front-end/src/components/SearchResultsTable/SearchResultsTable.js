import React from "react";

function SearchResultsTable({ result }) {
  return (
    <table className="table table-primary table-striped">
      <thead>
        <tr>
          <th scope="col">Generic Name</th>
          <th scope="col">Brand Name</th>
          <th scope="col">MeasurementUnit</th>
          <th scope="col">Form</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{result.genericName}</td>
          <td>{result.brandName}</td>
          <td>{result.measurementUnit}</td>
          <td>{result.form}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResultsTable;
