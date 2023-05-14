import React from "react";
import AddCompanyForm from "../../../components/Company/AddCompanyForm";
import addCompanyImg from "../../../assets/pictures/addCompanyPhoto.png";
import SideBar from "../../../components/SideBar/SideBar";

function AddCompany() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="col f-flex flex-column justify-content-center align-items-center">
        <div className="p-3">
          <img className="img-fluid rounded" src={addCompanyImg}></img>
        </div>
          <AddCompanyForm />
      </div>
    </div>
  );
}

export default AddCompany;
