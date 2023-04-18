import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import AddSupplierForm from "../../components/AddSupplierForm/AddSupplierForm";
import SupplierImg from "../../assets/pictures/icons/supplier.svg";

function AddSupplier() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100 d-flex flex-column mt-2">
          <img className="mx-auto" src={SupplierImg} width="100%" height="60%"></img>
          <AddSupplierForm />
        </div>
    </div>
  );
}

export default AddSupplier;
