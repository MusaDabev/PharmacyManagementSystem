import axios from "axios";
import React, { useState } from "react";
import styles from "./MedicineForm.module.css";

function MedicineForm({ form, setForm }) {
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const handleFormChange = (e) => {
    setForm(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/medicines/forms",
        {
          name: form,
        }
      );
      if (response.status === 200) {
        setForm("");
        setSuccessMsg(true);
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      setErrorMsg(true);
      console.error(error);
    }
  }
  return (
    <div>
      <div className={styles.medicineFormTitle}>Добави лекарствена форма</div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="medicineForm"
              placeholder="Лекарствена форма"
              value={form}
              onChange={handleFormChange}
            />
          </div>
          <button type="submit" className="btn btn-primary ms-2">
            Добави
          </button>
        </form>
      </div>
    </div>
  );
}

export default MedicineForm;
