import React from "react";
import AddMedicineForm from "../../components/AddMedicineForm/AddMedicineForm";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import medicinesPhoto from "../../assets/pictures/DosageForm.jpg";


function AddMedicine() {
  return (
    <div>
      <div className="d-flex">
        <SideBar />
        <div className="row align-items-center">
          <div className="col"><img className="img-fluid" src={medicinesPhoto}></img></div>
          <div className="col"><AddMedicineForm /></div>
        </div>
      </div>
    </div>
  );
}

export default AddMedicine;
