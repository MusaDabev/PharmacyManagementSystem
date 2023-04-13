import React from "react";
import { useSelector } from "react-redux";

function Stock() {
  const stock = useSelector((state) => state.stock);
  return (
    <div className="d-flex">
      <div>
        <div className="ms-3">Наличност: {stock.value}лв.</div>
        <button className="btn btn-primary ms-3">Изпрати отчет</button>
      </div>
    </div>
  );
}

export default Stock;
