import React, { useState } from "react";
import MedicinesCart from "../../components/MedicinesCart/MedicinesCart";
import SearchBar from "../../components/SearchBar/SearchBar";
import SellMedicineForm from "../../components/SellMedicineForm/SellMedicineForm";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";

function SellMedicine({ jsonData, setCartItems, setInvoices }) {
  const [selectedMedicine, setSelectedMedicine] = useState({});
  const [numberOfUnits, setNumberOfUnits] = useState(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleSelectedMedicine = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleAddCartItem = (item) => {
    dispatch(addItem({ ...item, units: numberOfUnits }));
  };

  const handleNumberOfUnitsChange = (e) => {
    setNumberOfUnits(e.target.value);
  };
  return (
    <>
      <div className="row p-3">Продай лекарство</div>
      <div className="row p-3">
        <div className="col">
          <SearchBar
            jsonData={jsonData}
            handleSelectedMedicine={handleSelectedMedicine}
          />
        </div>
        <div className="col">
          <div className="row">
            <SellMedicineForm
              medicine={selectedMedicine}
              numberOfUnits={numberOfUnits}
              handleAddCartItem={handleAddCartItem}
              handleNumberOfUnitsChange={handleNumberOfUnitsChange}
            />
          </div>
          <div className="row">
            <MedicinesCart
              cartItems={cartItems}
              numberOfUnits={numberOfUnits}
              setInvoices={setInvoices}
              setSelectedMedicine={setSelectedMedicine}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellMedicine;
