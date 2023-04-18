import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice } from "../../redux/slices/invoiceSlice";
import { addStock } from "../../redux/slices/stockSlice";
import Modal from "../Modal/Modal";
import { InvoiceContext } from "../../context/InvoiceContext";
import axios from "axios";

function MedicinesCart({ setInvoices, setSelectedMedicine }) {
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const invoices = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const { showInvoiceButton, toggleShowButton } = useContext(InvoiceContext);
  const date = Date.now();

  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.units;
  }, 0);

  const handleSellMedicine = (e) => {
    e.preventDefault();
    setInvoices();
    dispatch(addStock(totalPrice));

    // add a new invoice
    dispatch(
      addInvoice({
        id: date,
        cartItems: [...cartItems],
        total: totalPrice,
      })
    );
    // save invoice in database
    saveInvoice();
    // show invoice button
    toggleShowButton(true);
  };

  async function saveInvoice() {
    const response = await axios.post("http://localhost:8080/invoices", {
      amount: totalPrice,
      invoiceDate: new Date(),
      // items: [...cartItems],
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
    <>
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
            <th scope="col">Цена</th>
            <th scope="col">Форма</th>
            <th scope="col">Брой</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.genericName}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.form}</td>
              <td>{item.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleSellMedicine} className="btn btn-primary">
          Продай и Принтирай
        </button>
      </div>
      <Modal items={cartItems} />
    </>
  );
}

export default MedicinesCart;
