import React, { useState } from "react";
import styles from "./AddEmployeeForm.module.css";
import axios from 'axios';

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleEmailChange(event) {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (emailValue === "") {
      setEmailError("");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setEmailError("Невалиден имейл адрес!");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(event) {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (passwordValue === "") {
      setPasswordError("");
    } else if (passwordValue.length < 6) {
      setPasswordError("Паролата трябва да бъде с дължина поне 6 символа!");
    } else {
      setPasswordError("");
    }
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
        Име:
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
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

export default AddEmployeeForm;