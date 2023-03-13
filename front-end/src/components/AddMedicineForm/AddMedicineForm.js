import React, { useState } from "react";
import styles from "./AddMedicineForm.module.css";

function AddMedicineForm() {
  const [medicineName, setMedicineName] = useState("");
  const [noOfSachet, setNoOfSachet] = useState("");
  const [noOfTablets, setNoOfTablets] = useState("");
  const [medicineUnitValue, setMedicineUnitValue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [medicineTypeName, setMedicineTypeName] = useState("");
  const [saltName, setSaltName] = useState("");
  const [NOofSachetsPerSachet, setNOofSachetsPerSachet] = useState("");
  const [unit, setUnit] = useState("");
  const [isUnboxedAllowed, setIsUnboxedAllowed] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [medicineImage, setMedicineImage] = useState("");

  function handleMedicineNameChange(event) {
    setMedicineName(event.target.value);
  }

  function handleNoOfSachetChange(event) {
    setNoOfSachet(event.target.value);
  }

  function handleNoOfTabletsChange(event) {
    setNoOfTablets(event.target.value);
  }

  function handleMedicineUnitValueChange(event) {
    setMedicineUnitValue(event.target.value);
  }

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }

  function handleMedicineTypeNameChange(event) {
    setMedicineTypeName(event.target.value);
  }

  function handleSaltNameChange(event) {
    setSaltName(event.target.value);
  }

  function handleNOofSachetsPerSachetChange(event) {
    setNOofSachetsPerSachet(event.target.value);
  }

  function handleUnitChange(event) {
    setUnit(event.target.value);
  }

  function handleIsUnboxedAllowedChange(event) {
    setIsUnboxedAllowed(event.target.value);
  }

  function handleEmployeeNameChange(event) {
    setEmployeeName(event.target.value);
  }

  function handleMedicineImageChange(event) {
    setEmployeeName(event.target.value);
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const newEmployee = { firstName, email, password };
  //   try {
  //     const response = await axios.post("/api/employees", newEmployee);
  //     if (response.status === 200) {
  //       console.log("Employee added successfully");
  //       setFirstName("");
  //       setEmail("");
  //       setPassword("");
  //     } else {
  //       console.error("Failed to add employee");
  //     }
  //   } catch (error) {
  //     console.error("Failed to add employee", error);
  //   }
  // }

  function handleSubmit() {
    return null;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className="form-label">
        Име на лекарството:
        <input
          type="text"
          value={medicineName}
          onChange={handleMedicineNameChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <label className="form-label">
        Брой сашета:
        <input
          type="text"
          value={noOfSachet}
          onChange={handleNoOfSachetChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <label className="form-label">
        Брой таблетки:
        <input
          type="text"
          value={noOfTablets}
          onChange={handleNoOfTabletsChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <label className="form-label">
        Medicine unit value:
        <input
          type="text"
          value={medicineUnitValue}
          onChange={handleMedicineUnitValueChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <label className="form-label">
        Име на фирма:
        <input
          type="text"
          value={companyName}
          onChange={handleCompanyNameChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <label className="form-label" htmlFor="medicineTypeName">
        Вид лекарство:
        <input
          id="medicineTypeName"
          type="text"
          value={medicineTypeName}
          onChange={handleMedicineTypeNameChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <label>
        Salt name:
        <input
          type="text"
          value={saltName}
          onChange={handleSaltNameChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      {/* <label>
        Брой сашета в кутия:
        <input
          type="text"
          value={NOofSachetsPerSachet}
          onChange={handleNoOfTabletsChange}
          className={styles.input}
        />
      </label>
      <br /> */}
      <label>
        Unit:
        <input
          type="text"
          value={unit}
          onChange={handleUnitChange}
          className={`${styles.input} form-control`}
        />
      </label>
      <br />
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
      <button
        type="submit"
        className={`${styles.button}  btn btn-primary`}
      >
        Добави лекарство
      </button>
    </form>
  );
}

export default AddMedicineForm;
