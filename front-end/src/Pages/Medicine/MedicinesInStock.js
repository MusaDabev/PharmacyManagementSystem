import React from "react";
import NavBar from "../../components/NavBar/NavBar";

function MedicinesInStock({ medicines }) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Генерично лекарство</th>
            <th scope="col">Търговско име</th>
            <th scope="col">Цена</th>
            <th scope="col">Форма</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((result) => (
            <tr key={result.id}>
              <td>{result.genericName}</td>
              <td>{result.name}</td>
              <td>{result.price}</td>
              <td>{result.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MedicinesInStock;
