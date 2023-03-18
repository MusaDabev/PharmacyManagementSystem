import React from "react";

function MedicinesCart({ cartItems, }) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Генерично лекарство</th>
          <th scope="col">Търговско име</th>
          <th scope="col">MeasurementUnit</th>
          <th scope="col">Форма</th>
          <th scope="col">Брой</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.genericName}</td>
            <td>{item.brandName}</td>
            <td>{item.measurementUnit}</td>
            <td>{item.form}</td>
            <td>{item.units}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedicinesCart;