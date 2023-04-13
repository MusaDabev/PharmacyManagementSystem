import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../redux/slices/cartSlice";
import { addInvoice, } from "../../redux/slices/invoiceSlice";
import { addStock } from "../../redux/slices/stockSlice";
import Modal from "../Modal/Modal";
import { InvoiceContext } from "../../context/InvoiceContext";

function MedicinesCart({ setInvoices, setSelectedMedicine }) {
  const cartItems = useSelector((state) => state.cart);
  const invoices = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const {showInvoiceButton, toggleShowButton} = useContext(InvoiceContext);
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
        cartItems: [...cartItems]
  })
    );

    // reset form
    setSelectedMedicine({});

    // show invoice button
    toggleShowButton(true);
  };
  useEffect(() => {
    console.log(invoices)
  })
  return (
    <>
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
      <button onClick={handleSellMedicine} className="btn btn-primary">
        Продай и Принтирай
      </button>
      <Modal items={cartItems} />
    </>
  );
}

export default MedicinesCart;
