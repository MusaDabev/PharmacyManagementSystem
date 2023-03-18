import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SellMedicineForm from "../../components/SellMedicineForm/SellMedicineForm";

function SellMedicine() {
  const [selectedMedicine, setSelectedMedicine] = useState({});

  const handleSelectedMedicine = (medicine) => {
    setSelectedMedicine(medicine);
    console.log(selectedMedicine);
  };
  return (
    <>
      <NavBar />
      <div className="row p-3">Продай лекарство</div>
      <div className="row p-3">
        <div className="col">
          <SearchBar handleSelectedMedicine={handleSelectedMedicine}/>
        </div>
        <div className="col">
          <div className="row">
            <SellMedicineForm medicine={selectedMedicine} />
          </div>
          <div className="row"> Количка </div>
        </div>
      </div>
    </>
  );
}

export default SellMedicine;
