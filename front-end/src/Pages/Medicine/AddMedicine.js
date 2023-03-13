import React from "react";
import AddMedicineForm from "../../components/AddMedicineForm/AddMedicineForm";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

function AddMedicine() {
  return (
    <div>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <AddMedicineForm />
      </div>
    </div>
  );
}

export default AddMedicine;
