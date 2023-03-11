import React, { useState } from "react";
import styles from "./AddEmployeeForm.module.css";
import axios from 'axios';

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

  async function handleSubmit(event) {
    event.preventDefault();
    const newEmployee = { firstName, email, password };
    try {
      const response = await axios.post('/api/employees', newEmployee);
      if (response.status === 200) {
        console.log('Employee added successfully');
        setFirstName('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Failed to add employee');
      }
    } catch (error) {
      console.error('Failed to add employee', error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Име на лекарството:
        <input
          type="text"
          value={medicineName}
          onChange={handleMedicineNameChange}
          className={styles.input}
        />
      </label>
      <br />
      <label>
        Имейл:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
        />
        <span className={styles.error}>{emailError}</span>
      </label>
      <br />
      <label>
        Парола:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={styles.input}
        />
        <span className={styles.error}>{passwordError}</span>
      </label>
      <br />
      <button
        type="submit"
        className={styles.button}
        disabled={emailError || passwordError}
      >
        Добави служител
      </button>
    </form>
  );
}

export default AddMedicineForm;