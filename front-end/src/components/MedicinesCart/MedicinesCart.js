import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStock } from "../../redux/slices/stockSlice";
import axios from "axios";
import { emptyCart } from "../../redux/slices/cartSlice";

function MedicinesCart({ setInvoices, setSelectedMedicine, costumer }) {
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const localDate =
    year +
    "-" +
    month.toString().padStart(2, "0") +
    "-" +
    day.toString().padStart(2, "0");

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.units;
  }, 0);

  let invoiceNumber = Math.floor(Math.random() * 10000000000);

  const handleSellMedicine = (e) => {
    e.preventDefault();
    setInvoices();
    dispatch(addStock(totalPrice));

    // save invoice in database
    saveInvoice();

    // empty cart
    dispatch(emptyCart());
  };

  async function saveInvoice() {
    const response = await axios.post("http://localhost:8080/invoices", {
      amount: totalPrice,
      invoiceNumber,
      costumer,
      invoiceDate: localDate,
    });

    if (response.status === 200) {
      // reset form
      setSelectedMedicine({});
      setSuccessMsg(true);
    } else {
      setErrorMsg(true);
    }
  }
  return (
    <div className="p-4">
      {successMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Операцията беше извършена усепшно!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessMsg(false)}
          ></button>
        </div>
      )}
      {errorMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Възникна грешка, опитайте отново!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrorMsg(false)}
          ></button>
        </div>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Генерично лекарство</th>
            <th scope="col">Търговско име</th>
            <th scope="col">Брой</th>
            <th scope="col">Цена за брой</th>
            <th scope="col">Обща цена</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.genericName}</td>
              <td>{item.name}</td>
              <td>{item.units}</td>
              <td>{item.price}</td>
              <td>{item.units * item.price}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">Общо: {totalPrice} лв.</div>
      <div>
        <button
          disabled={cartItems.length === 0}
          onClick={handleSellMedicine}
          className="btn btn-primary"
        >
          Продай и Принтирай
        </button>
      </div>
    </div>
  );
}

export default MedicinesCart;
