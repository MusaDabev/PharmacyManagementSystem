import React from "react";

function SearchResultsTable({
  searchResult,
  handleSelectedMedicine,
  medicines,
}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Генерично лекарство</th>
          <th scope="col">Търговско име</th>
          <th scope="col">Цена</th>
          <th scope="col">Милиграми</th>
        </tr>
      </thead>
      <tbody>
        {searchResult.length > 0 &&
          searchResult.map((result) => (
            <tr key={result.id} onClick={() => handleSelectedMedicine(result)}>
              <td>{result.genericName}</td>
              <td>{result.name}</td>
              <td>{result.price}</td>
              <td className="text-center">{result.milligrams}</td>
            </tr>
          ))}
          {/* {searchResult.length === 0 &&
          medicines.splice(0, 10).map((result) => (
            <tr key={result.id} onClick={() => handleSelectedMedicine(result)}>
              <td>{result.genericName}</td>
              <td>{result.name}</td>
              <td>{result.price}</td>
              <td>{result.form}</td>
            </tr>
          ))} */}
      </tbody>
    </table>
  );
}

export default SearchResultsTable;
