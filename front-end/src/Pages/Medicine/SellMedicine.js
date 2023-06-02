import React, { useEffect, useState } from "react";
import MedicinesCart from "../../components/MedicinesCart/MedicinesCart";
import SearchBar from "../../components/SearchBar/SearchBar";
import SellMedicineForm from "../../components/SellMedicineForm/SellMedicineForm";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import axios from "axios";

function SellMedicine({ jsonData, setCartItems, setInvoices }) {
  const [selectedMedicine, setSelectedMedicine] = useState({});
  const [numberOfUnits, setNumberOfUnits] = useState(1);
  const [costumer, setCostumer] = useState();
  const [medicines, setMedicines] = useState();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleSelectedMedicine = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleCostumerChange = (e) => {
    setCostumer(e.target.value);
  }

  const handleAddCartItem = (item) => {
    dispatch(addItem({ ...item, units: numberOfUnits }));
  };

  const handleNumberOfUnitsChange = (e) => {
    setNumberOfUnits(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/medicines")
      .then((response) => setMedicines(response.data));
  }, []);
  return (
    <>
      <div className="h4 mt-2 ms-4">Продай лекарство</div>
      <hr />
      <div className="row p-3 g-0">
        <div className="col">
          <SearchBar
            medicines={medicines}
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
              handleCostumerChange={handleCostumerChange}
            />
          </div>
          <div className="row">
            <MedicinesCart
              cartItems={cartItems}
              numberOfUnits={numberOfUnits}
              setInvoices={setInvoices}
              setSelectedMedicine={setSelectedMedicine}
              costumer={costumer}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellMedicine;
