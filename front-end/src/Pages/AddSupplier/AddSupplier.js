import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import AddSupplierForm from "../../components/AddSupplierForm/AddSupplierForm";

function AddSupplier() {
  return (
    <div className="d-flex">
      <SideBar />
      <AddSupplierForm />
    </div>
  );
}

export default AddSupplier;
