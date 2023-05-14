import React, { useState } from "react";
import styles from "./AddMedicineForm.module.css";
import axios from "axios";

function AddMedicineForm() {
  const [name, setName] = useState("");
  const [genericName, setGenericName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [milligrams, setMilligrams] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [price, setPrice] = useState(null);
  const [purchaseMethod, setPurchaseMethod] = useState(null);
  const [form, setForm] = useState("");
  const [expireDate, setExpireDate] = useState(null);
  const [category, setCategory] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  // const [NOofSachetsPerSachet, setNOofSachetsPerSachet] = useState("");
  // const [isUnboxedAllowed, setIsUnboxedAllowed] = useState("");
  // const [employeeName, setEmployeeName] = useState("");
  // const [medicineImage, setMedicineImage] = useState("");

  function handleMedicineNameChange(event) {
    setName(event.target.value);
  }

  function handleGenericNameChange(event) {
    setGenericName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleMilligramsChange(event) {
    setMilligrams(event.target.value);
  }

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }

  function handleMedicineCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handlePurchaseMethodChange(event) {
    setPurchaseMethod(event.target.value);
  }

  function handleFormChange(event) {
    setForm(event.target.value);
  }

  function handleExpireDateChange(event) {
    setExpireDate(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newMedicine = {
      name,
      genericName,
      quantity,
      milligrams,
      manufacturer: companyName,
      price,
      form,
      expireDate,
      category,
      purchaseMethod,
    };
    try {
      const response = await axios.post("http://localhost:8080/medicines", newMedicine);
      if (response.status === 200) {
        setName("");
        setGenericName("");
        setQuantity("");
        setMilligrams("");
        setCompanyName("");
        setPrice(null);
        setForm(null);
        setExpireDate(null);
        setCategory(null);
        setPurchaseMethod(null);
      } else {
        console.error("Failed to add medicine");
      }
    } catch (error) {
      console.error("Failed to add medicine", error);
    }
  }

  function handleSubmit() {
    return null;
  }

  return (
    <>
      <h4 className="ms-2">Добави лекарство</h4>
      <hr />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="w-100">
          <label className="form-label">
            Име на лекарството:
            <input
              type="text"
              value={name}
              onChange={handleMedicineNameChange}
              className={`${styles.input} form-control`}
            />
          </label>
          <br />
          <label className="form-label">
            Генерично име на лекарството:
            <input
              type="text"
              value={genericName}
              onChange={handleGenericNameChange}
              className={`${styles.input} form-control`}
            />
          </label>
          <br />
          <label className="form-label">
            Количество:
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              className={`${styles.input} form-control`}
            />
          </label>
          <br />
          <label className="form-label">
            Милиграми:
            <input
              type="text"
              value={milligrams}
              onChange={handleMilligramsChange}
              className={`${styles.input} form-control`}
            />
          </label>
          <br />
          <label className="form-label">
            Производител:
            <input
              type="text"
              value={companyName}
              onChange={handleCompanyNameChange}
              className={`${styles.input} form-control`}
            />
          </label>
        </div>
        <div className="w-100 ms-2">
          <div className="ms-1">
            <label htmlFor="category">Категория лекарство:</label>
            <select
              id="category"
              className="form-select mb-2"
              value={category}
              onChange={handleMedicineCategoryChange}
            >
              <option value="">
                --Моля изберете категория на лекарството--
              </option>
              <option value="xраносмилателна система и метаболизъм">
                Храносмилателна система и метаболизъм
              </option>
              <option value="кръв и кръвотворни органи">
                Кръв и кръвотворни органи
              </option>
              <option value="сърдечно-съдова система">
                Сърдечно-съдова система
              </option>
              <option value="дерматологични средства">
                Дерматологични средства
              </option>
              <option value="пикочо-полова система и полови хормони">
                Пикочо-полова система и полови хормони
              </option>
              <option value="хормонални препарати за системно приложение, с изключение на полови хормони и инсулини">
                Хормонални препарати за системно приложение, с изключение на
                полови хормони и инсулини
              </option>
              <option value="антиинфекциозни средства за системно приложение">
                Антиинфекциозни средства за системно приложение
              </option>
              <option value="антинеопластични и имуномодулиращи средства">
                Антинеопластични и имуномодулиращи средства
              </option>
              <option value="мускулно-скелетна система">
                Мускулно-скелетна система
              </option>
              <option value="антипаразитни продукти, инсектициди и репеленти">
                Антипаразитни продукти, инсектициди и репеленти
              </option>
              <option value="дихателна система">Дихателна система</option>
              <option value="сензорни органи">Сензорни органи</option>
              <option value="Разни">Разни</option>
            </select>
          </div>
          <label>
            Цена:
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              className={`${styles.input} form-control`}
            />
          </label>
          <br />
          <div className="ms-1">
            <label htmlFor="purchaseMethod">Метод на продажба:</label>
            <select
              id="purchaseMethod"
              className="form-select mb-2"
              value={purchaseMethod}
              onChange={handlePurchaseMethodChange}
            >
              <option value="">--Моля изберете метод на продажба--</option>
              <option value="с рецепта">С рецепта</option>
              <option value="ОТС">ОТС</option>
            </select>
          </div>
          <div className="ms-1">
            <label htmlFor="form">Форма:</label>
            <select
              id="form"
              className="form-select mb-2"
              value={form}
              onChange={handleFormChange}
            >
              <option value="">--Моля изберете форма--</option>
              <option value="таблетки">Таблетки</option>
              <option value="капсули">Капсули</option>
              <option value="ефервесцентни таблетки">
                Ефервесцентни таблетки
              </option>
              <option value="разтвори">Разтвори</option>
              <option value="инжекционни разтвори">Инжекционни разтвори</option>
              <option value="кремове и мази">Кремове и мази</option>
              <option value="пластир">Пластир</option>
              <option value="капки">Капки</option>
              <option value="сиропи">Сиропи</option>
              <option value="гранули">Гранули</option>
              <option value="емулсия">Емулсия</option>
              <option value="суспензия">Суспензия</option>
              <option value="тинктура">Тинктура</option>
              <option value="пяна">Пяна</option>
            </select>
          </div>
          <div className="me-1">
            <label htmlFor="expireDate">Краен срок на годност:</label>
            <input
              id="expireDate"
              value={expireDate}
              className="form-control"
              type="date"
              onChange={handleExpireDateChange}
            />
          </div>
          <div className="ms-auto" style={{width: "fit-content"}}>
            <button
              type="submit"
              className={`${styles.button}  btn btn-primary mt-2`}
            >
              Добави лекарство
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddMedicineForm;
