import React from "react";
import AddCompanyForm from "../../../components/Company/AddCompanyForm";
import addCompanyImg from "../../../assets/pictures/addCompanyImg.jpg";
import SideBar from "../../../components/SideBar/SideBar";

function AddCompany() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="row g-0 mt-3 justify-content-center">
        <div className="col-lg-6 col-sm-8 p-3">
          <img className="img-fluid" src={addCompanyImg}></img>
        </div>
        <div className="col-lg-6">
          <AddCompanyForm />
        </div>
      </div>
    </div>
  );
}

export default AddCompany;
