import React, { useState } from "react";
import CompaniesList from "../../../components/Company/CompaniesList";
import UpdateCompanyForm from "../../../components/Company/UpdateCompanyForm";

function ManageCompanies() {
  const [selectedCompany, setSelectedCompany] = useState({});

  const handleSelectedCompany = (company) => {
    setSelectedCompany(company);
  };
  return (
    <div className="row g-0 p-4">
      <div className="col">
        <CompaniesList handleSelectedCompany={handleSelectedCompany} />
      </div>
      <div className="col">
        <UpdateCompanyForm selectedCompany={selectedCompany} />
      </div>
    </div>
  );
}

export default ManageCompanies;
