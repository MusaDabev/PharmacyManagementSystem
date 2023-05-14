import axios from "axios";
import React, { useState } from "react";
import styles from "./MedicineForm.module.css";

function AddCategory({ category, setCategory }) {
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const handleFormChange = (e) => {
    setCategory(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/medicines/categories",
        {
          name: category,
        }
      );
      if (response.status === 200) {
        setCategory("");
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
      <div className={styles.medicineFormTitle}>Добави категория лекарство</div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="medicineForm"
              placeholder="Категория лекарство"
              value={category}
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

export default AddCategory;