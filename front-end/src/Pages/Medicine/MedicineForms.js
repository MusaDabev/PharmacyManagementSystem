import React, { useEffect, useState } from "react";
import MedicineForm from "../../components/Medicines/MedicineForm";
import MedicineFormsTable from "../../components/Medicines/MedicineFormsTable";
import SideBar from "../../components/SideBar/SideBar";
import axios from "axios";

function MedicineForms() {
  const [forms, setForms] = useState();
  const [form, setForm] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/medicines/forms").then((response) => {
        setForms(response.data)
    })
  })
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <div className="w-100">
          <MedicineForm form={form} setForm={setForm} />
          <MedicineFormsTable forms={forms} />
        </div>
      </div>
    </>
  );
}

export default MedicineForms;
