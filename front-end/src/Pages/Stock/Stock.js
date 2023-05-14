import React from "react";
import { useSelector } from "react-redux";

function Stock() {
  const stock = useSelector((state) => state.stock);
  return (
    <div className="d-flex">
      <div>
        <div className="ms-3  border border-primary rounded-pill p-2">Наличност: {stock.value}лв.</div>
      </div>
    </div>
  );
}

export default Stock;
