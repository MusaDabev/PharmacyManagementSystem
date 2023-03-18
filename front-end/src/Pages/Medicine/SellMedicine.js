import React, { useState } from "react";
import MedicinesCart from "../../components/MedicinesCart/MedicinesCart";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SellMedicineForm from "../../components/SellMedicineForm/SellMedicineForm";

function SellMedicine() {
  const [selectedMedicine, setSelectedMedicine] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [numberOfUnits, setNumberOfUnits] = useState(1);

  const handleSelectedMedicine = (medicine) => {
    setSelectedMedicine(medicine);
    console.log(selectedMedicine);
  };

  const handleAddCartItem = (item, units) => {
    // check if the item already exists in the cart
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      // if the item already exists, update the quantity
      const updatedItems = cartItems.map((i) => {
       return i.id === item.id ? { ...i, units: i.units + 1 } : i;
      });
      setCartItems(updatedItems);
    } else {
      // if the item does not exist, add it to the cart with a quantity
      setCartItems([...cartItems, { ...item, units: units }]);
    }
  };

  const handleNumberOfUnitsChange = (e) => {
    setNumberOfUnits(e.target.value);
  };
  return (
    <>
      <NavBar />
      <div className="row p-3">Продай лекарство</div>
      <div className="row p-3">
        <div className="col">
          <SearchBar handleSelectedMedicine={handleSelectedMedicine} />
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
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellMedicine;
