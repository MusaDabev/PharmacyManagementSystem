import React, { useEffect } from "react";

const Invoice = (props) => {
  const { invoiceNumber, items, total } = props;

  // creates and formats date
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("bg-BG", options);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Фактура #{Date.now()}</h1>
      <p>Дата: {formattedDate}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Име</th>
            <th>Брой</th>
            <th>Единична цена</th>
            <th>Общо цена</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.units}</td>
              <td>{item.price}</td>
              <td>{item.units * item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right font-weight-bold">
              Общо:
            </td>
            <td className="font-weight-bold">{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Invoice;
