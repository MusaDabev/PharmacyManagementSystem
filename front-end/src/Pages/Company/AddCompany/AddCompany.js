import React from "react";
import AddCompanyForm from "../../../components/Company/AddCompanyForm";
import addCompanyImg from "../../../assets/pictures/addCompanyImg.jpg";

function AddCompany() {
  return (
    <div className="row g-0 mt-3 justify-content-center">
      <div className="col-lg-6 col-sm-8 p-3">
        <img className="img-fluid" src={addCompanyImg}></img>
      </div>
      <div className="col-lg-6">
        <AddCompanyForm />
      </div>
    </div>
  );
}

export default AddCompany;
