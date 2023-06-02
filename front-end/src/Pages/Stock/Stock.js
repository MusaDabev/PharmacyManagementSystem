import React from "react";
import { useSelector } from "react-redux";

function Stock() {
  const stock = useSelector((state) => state.stock);
  return (
    <div className="d-flex">
      <div>
        <div className="ms-3  border border-primary rounded-pill p-2">
          Наличност: {stock && stock.value.toFixed(2)}лв.
        </div>
      </div>
    </div>
  );
}

export default Stock;
